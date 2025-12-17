import dotenv from "dotenv";
import { z } from "zod";

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  HOST: z.string(),
  PORT: z.coerce.number().default(3000),
  RETRY_ATTEMPTS: z.coerce.number().default(2),
  RETRY_BACKOFF_MS: z.coerce.number().default(250),
  FEATURES: z.string().default("")
});

export class AppConfig {
  private static instance: AppConfig;
  private env: z.infer<typeof EnvSchema>;

  private port: number;
  private baseURL: string;
  private apiBase: string;
  private retryPolicy: { attempts: number; backoffMs: number };
  private featureFlags: Set<string>;

  private constructor() {
    dotenv.config();

    const parsed = EnvSchema.parse(process.env);

    this.env = parsed;

    this.port = parsed.PORT;

    const protocol =
      parsed.NODE_ENV === "production" ? "https" : "http";

    this.baseURL = `${protocol}://${parsed.HOST}:${this.port}`;
    this.apiBase = new URL("/api", this.baseURL).toString();

    this.retryPolicy = {
      attempts: parsed.RETRY_ATTEMPTS,
      backoffMs: parsed.RETRY_BACKOFF_MS
    };

    this.featureFlags = new Set(
      parsed.FEATURES.split(",").filter(Boolean)
    );
  }

  static getInstance(): AppConfig {
    if (!this.instance) {
      this.instance = new AppConfig();
    }
    return this.instance;
  }

  getPort(): number {
    return this.port;
  }

  getBaseURL(): string {
    return this.baseURL;
  }

  getApiBase(): string {
    return this.apiBase;
  }

  getRetryPolicy() {
    return this.retryPolicy;
  }

  isFeatureEnabled(name: string): boolean {
    return this.featureFlags.has(name);
  }
}

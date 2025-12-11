# Drill 2 — Mermaid Diagrams

This file contains three required Mermaid diagrams:
1. Block diagram for a web app  
2. Flowchart for a login process  
3. Sequence diagram for an API request  

---

## 1️⃣ Block Diagram — Simple Web App Architecture

```mermaid


graph LR
    Browser --> Backend
    Backend --> Database
    Backend --> ExternalAPI[External API]
    Database --> Storage[(Storage Layer)]

flowchart TD
    A[User submits login form] --> B{Are fields valid?}
    B -->|No| C[Show validation error]
    B -->|Yes| D[Send credentials to backend]
    D --> E{Do credentials match?}
    E -->|No| F[Return error message]
    E -->|Yes| G[Generate JWT token]
    G --> H[Redirect to dashboard]

sequenceDiagram
    participant Client
    participant Server
    participant Database

    Client->>Server: GET /items
    Server->>Database: Query items
    Database-->>Server: Results
    Server-->>Client: 200 OK + JSON

export type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

export type TaskStats = {
  total: number;
  completed: number;
  pending: number;
};


export type TaskCollection = {
  tasks: Task[];
};

export type TaskEventListener = (
  event: "add" | "update" | "delete",
  task: Task
) => void;



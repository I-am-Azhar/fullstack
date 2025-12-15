import { Task, Priority } from "./types.js";

export function createTask(title: string, priority: Priority = 'medium'): Task {
  return {
    id: Math.random().toString(36).substr(2, 9),
    title,
    completed: false,
    priority,
    createdAt: new Date()
  };
}

export function markCompleted(task: Task): Task {
  return { ...task, completed: true };
}

export function filterByStatus(tasks: Task[], status: boolean): Task[] {
  return tasks.filter(task => task.completed === status);
}

export function sortByPriority(tasks: Task[]): Task[] {
  const priorityOrder: Priority[] = ['high', 'medium', 'low'];
  
  return tasks.sort((a, b) => {
    return priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority);
  });
}
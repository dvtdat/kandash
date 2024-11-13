import { Task, TaskStatus } from "../types/task";

const MockTasks: Task[] = [
  {
    id: 1,
    title: "Task 1",
    description: "This is task 1",
    status: TaskStatus.OPEN,
  },
  {
    id: 2,
    title: "Task 2",
    description: "This is task 2",
    status: TaskStatus.OPEN,
  },
  {
    id: 3,
    title: "Task 3",
    description: "This is task 3",
    status: TaskStatus.IN_PROGRESS,
  },
];

export default MockTasks;

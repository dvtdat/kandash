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
  {
    id: 4,
    title: "Task 4",
    description: "This is task 4",
    status: TaskStatus.DONE,
  },
  {
    id: 5,
    title: "Task 5",
    description: "This is task 5",
    status: TaskStatus.IN_PROGRESS,
  },
  {
    id: 6,
    title: "Task 6",
    description: "This is task 6",
    status: TaskStatus.DONE,
  },
  {
    id: 7,
    title: "Task 7",
    description: "This is task 7",
    status: TaskStatus.OPEN,
  },
  {
    id: 8,
    title: "Task 8",
    description: "This is task 8",
    status: TaskStatus.OPEN,
  },
  {
    id: 9,
    title: "Task 9",
    description: "This is task 9",
    status: TaskStatus.OPEN,
  },
];

export default MockTasks;

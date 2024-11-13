import { Task } from "../types/task";
import TaskDetail from "./TaskDetail";

type TaskListProps = {
  status: string;
  tasks: Task[];
};

const TaskList = ({ status, tasks }: TaskListProps) => {
  return (
    <div className="w-full h-full rounded-lg border-blue-300 border p-4">
      <div className="w-full flex flex-row items-center justify-center">
        <p>{status}</p>
      </div>
      <div className="">
        {tasks.map((task) => (
          <TaskDetail key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;

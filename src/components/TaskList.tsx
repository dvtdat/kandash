import { Task } from "../types/task";
import TaskDetail from "./TaskDetail";

type TaskListProps = {
  status: string;
  tasks: Task[];
};

const TaskList = ({ status, tasks }: TaskListProps) => {
  return (
    <div className="w-full bg-gray-50 shadow-md rounded-lg p-6">
      <div className="flex items-center justify-center mb-8">
        <p className="font-black text-3xl text-blue-700 capitalize">{status}</p>
      </div>

      <div className="grid gap-4">
        {tasks.map((task) => (
          <TaskDetail key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;

import { Task } from "../types/task";

type TaskDetailProps = {
  task: Task;
};

const TaskDetail = ({ task }: TaskDetailProps) => {
  return (
    <div className="flex flex-col p-4 bg-white shadow-md rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out">
      <p className="font-semibold text-lg mb-2">{task.title}</p>
      <p className="">{task.description}</p>
    </div>
  );
};

export default TaskDetail;

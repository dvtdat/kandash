import { Task } from "../types/task";

type TaskDetailProps = {
  task: Task;
};

const TaskDetail = ({ task }: TaskDetailProps) => {
  return (
    <div className="">
      <p className="font-bold">{task.title}</p>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskDetail;

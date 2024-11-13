import { Component } from "react";
import { Task } from "../types/task";
import TaskList from "./TaskList";

const statuses = ["OPEN", "IN_PROGRESS", "DONE"];

interface TaskPagesProps {
  tasks: Task[];
}

class TaskPages extends Component<TaskPagesProps> {
  renderTaskList() {
    const { tasks } = this.props;
    return statuses.map((status) => {
      const statusTasks = tasks.filter((task: Task) => task.status === status);
      return <TaskList key={status} status={status} tasks={statusTasks} />;
    });
  }

  render() {
    return (
      <div className="w-full grid grid-cols-3 gap-4 py-10 px-20">
        {this.renderTaskList()}
      </div>
    );
  }
}

export default TaskPages;

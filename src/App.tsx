import TaskPages from "./components/TaskPage";
import MockTasks from "./constants/mock-tasks";

const App = () => {
  return (
    <div className="w-full h-screen">
      <TaskPages tasks={MockTasks} />
    </div>
  );
};

export default App;

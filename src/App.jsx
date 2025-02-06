import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  //State (Estado)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description:
        "Estudar programação para se tornar um desenvolvedor full stack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Matematica",
      description:
        "Estudar Matamatica, pois com ela vou me tornar um desenvolvedor full stack",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Inglês",
      description: "Estudar inglês",
      isCompleted: false,
    },
  ]);
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl  text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTask></AddTask>
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}
export default App;

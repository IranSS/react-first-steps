import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { v4 } from "uuid";

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

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //Precisa atualizar tarefa
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      //Não precisa atualizar
      return task;
    });
    setTasks(newTasks);
  }
  function onDeleteTaskClick(taskId) {
    //verifica se a tarefa é diferente da tarefa que quer deletar e adiciona em uma nova atualizada;
    const UpdateTask = tasks.filter((task) => task.id !== taskId);
    setTasks(UpdateTask);
  }
  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl  text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick} //Sempre atualizar aqui um botão quando tal for criado
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}
export default App;

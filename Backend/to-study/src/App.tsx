import { useState } from "react"
import style from "./App.module.css"
import { Header } from "./components/header"
import { TaskItem } from "./components/taskItem"

type Task = {
  id: number,
  text: string, 
  complete: boolean
}

function App() {
  const [ taskText, setTaskText] = useState((""))
  const [tasks, setTasks] = useState<Task[]>([])

  // Função para pegar o valor que a pessoa digitar no input
  
  function handleChangeText(text: string) {
    console.log(text)         
  }
  // Função para adicionar tarefa nova
  function addTask() {
    setTasks([{id: Date.now(), text: taskText, complete: false}])
  }
  return (
    <div className={style.container}>
      <div className={style.paper}>
       <Header addTask={addTask} handleTaskNewText={handleChangeText}/>
       {
        tasks.map((task) => {
          return (
            <p>{task.text   }</p>
          )
        })
       }
       <TaskItem/>
       <TaskItem/>
       <TaskItem/>
       <TaskItem/>
       <TaskItem/>
       <TaskItem/>
       
      </div>
    </div>
  )
}

export default App

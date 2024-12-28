import Header from './Components/Header'
import './App.css'
import { useState } from 'react'
import ToDoList from './Components/ToDoList';
import ToDoItem from './Components/ToDoItem';

function App() {
const [tasks,setTasks]=useState([]);
function getTasks(data)
{
  var flag=true;
  tasks.map((task)=>{
    if(task.task==data.task)
    {
      flag=false;
    }
  })
  if(flag==false)
  {
    alert("Task already exist")
    return;
  }
  setTasks((prev)=>[...prev,data]);
}
function afterUpdation(data)
{
  setTasks(data)
}
  return (
    <>
      <Header /> 
      <ToDoItem sendTask={tasks} setTask={setTasks} tasksData={afterUpdation}/>
      <ToDoList tasksData={getTasks}/>   
    </>
  )
}

export default App

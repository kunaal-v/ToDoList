import { useState } from "react";
import "./style.css"
import PropTypes from 'prop-types';


ToDoList.propTypes = {
    tasksData: PropTypes.func
  };
function ToDoList(props)
{
    const [task,setTask]=useState("");
    const [id,setId]=useState(1);
    const [isCompleted,setIsCompleted]=useState(false);
    function addTask()
    {
        if(task=="")
        {
            alert("Please Enter the Task First, Then click on Add")
            return ;
        }
        const data={task,itemId:id,isCompleted};
        setIsCompleted(isCompleted);
        setId(id+1);
        setTask("");
        props.tasksData(data);
    }
    return(
        <>
            <span className="text_shadow">--Enter the task and click on Add Tasks to add--</span >
            <div className="input_btn">
                <input type="text" onChange={(e)=>{setTask(e.target.value)}} value={task} className="input" />
                <button type="submit" className="btn" onClick={addTask}>Add Task</button>
            </div>

        </>
    )
}
export default ToDoList;
import PropTypes from 'prop-types';
import {useState } from 'react';
ToDoItem.propTypes={
    sendTask: PropTypes.array,
    tasksData:PropTypes.func,
};

function ToDoItem(props)
{
    const [edit,setEdit]=useState("")
    const [item,setItem]=useState("");
    const [editDisplay,setEditDisplay]=useState(false);
    const [flag,setFlag]=useState(true);
    const tasks=props.sendTask;
    function handleMarkAsCompleted(e)
    {
        const item=e.target.parentElement.parentElement.firstChild.innerHTML.trim();
        const data=tasks.map((t)=>{
            if(t.task==item)
            {
                return { ...t, isCompleted: !t.isCompleted }
            } 
            return t;          
        });
        props.tasksData(data);
    }
    function handleDelete(e)
    {
        const item=e.target.parentElement.parentElement.firstChild.innerHTML.trim();
        const newData=tasks.filter((task)=>{
            if(task.task!=item)
            {
                return task;
            }
        });
        if(newData.length==0&&editDisplay){
            setEditDisplay(false);
        }
        props.tasksData(newData)
    }
    function displayEdit(e)
    {
        setItem(e.target.parentElement.parentElement.firstChild.innerHTML.trim());
        if(flag)
        {
            setFlag(false)
            setEditDisplay(true);
        }
        else{
            if(!editDisplay)
            {
                setEditDisplay(true)
            }
        }
    }
    function handleEdit()
    {
        if(edit=="")
        {
            alert("Task Cannot be empty. If you want to remove it, click on Delete Button");
            return ;
        }
        let flag;
        tasks.map((task)=>{
            if(task.task==edit)
            {
              flag=false;
            }
          })
          if(flag==false)
          {
            alert("Task already exist")
            return;
          }
        const data=tasks.map((t)=>{
            if(t.task==item)
            {
                return { ...t, task: edit }
            } 
            return t;          
        });
        setItem(edit);
        setEdit("");
        setEditDisplay(false)
        props.tasksData(data);
    }
    
    
    return(
        <>
        <div style={{display:'flex', justifyContent:"space-around"}}>
            <div>
                <h1 className='text'>Tasks To Do</h1>
                <div className="ToDoList">
                    {tasks.map((t)=><li key={t.itemId} style={{listStyle:"none"}}>
                        <div className="Item" key={t.itemId}>
                                <span style={{ textDecoration: t.isCompleted ? "line-through red" : "none" }} className='Task_Name text' >
                                    {t.task} 
                                </span>
                                {t.isCompleted ? "Completed":""}
                                <div className="btns">
                                    <button className="btn Edit" onClick={(e)=>{displayEdit(e)} }>Edit</button>
                                    <button className="btn Delete" onClick={(e)=>{handleDelete(e)}}>Delete</button>
                                    <button className="btn Mark" onClick={(e)=>{handleMarkAsCompleted(e)}}>
                                    {t.isCompleted ? "Mark as Incomplete" : "Mark as Completed"}
                                    </button>
                                </div>
                            </div>
                        </li>)}  
                </div>
            </div>
            {editDisplay&&(
            
                <div className='Edit_Item' >
                    {    console.log("enter Edit")}
                <p className="Edit_Text">--Edit your task here--</p>
                <div className='Edit_Box'>
                    <input type="text" className="input" onChange={(e)=>{setEdit(e.target.value)}} value={edit}/>
                    <button onClick={handleEdit} className='btn'>Update</button>
                </div>
            </div>)}
        </div>
        </>
    )
}
export default ToDoItem
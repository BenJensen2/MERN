import React, { useState } from 'react';

const TaskForm = ({tasks, setTasks}) => {

  const [task, setTask] = useState("");

  const taskHandler = (e) => {
    
    // console.log("Task Handler")
    setTask(e.target.value)
  }

  const taskListHandler = (e) => {
    e.preventDefault();

    setTasks([...tasks,{
      text: task,
      completed: false,
      style:{
        textDecoration: 'none'
      }
    }])

    setTask("")
  }

  return(
    <form onSubmit={ taskListHandler }>
      <div>
        <label>New Task: </label>
        {/* <input type="text" value = {task} onChange={ taskHandler } /> */}
        <input type="text" value={task} onChange={taskHandler}/>
        <input type="submit" value="Add"></input>
      </div>
    </form>
  )
}

export default TaskForm;
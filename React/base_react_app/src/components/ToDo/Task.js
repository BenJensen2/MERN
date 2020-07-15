import React, {useState} from "react";

const Task = ({task, idx,deleteHandler, checkHandler}) => {

  return (
    <div style={task.style}>
      <input type="checkbox" checked={task.completed} onChange={e=> checkHandler(e,idx)}/>
      {task.text}
      <button onClick={(e) => {deleteHandler(idx)}}>Delete</button>
    </div>
  )
}

export default Task;
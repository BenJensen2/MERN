import React from 'react';
import Task from './Task'

const TaskDisplay = ({tasks,deleteHandler, checkHandler}) => {

  return (
    <div>
      {
        tasks.map((task,i) =>
        <section key={i} >
          <Task
            task = {task}
            idx = {i}
            deleteHandler = {deleteHandler}
            checkHandler = {checkHandler}
            />
          </section>
        )
      }
    </div>
  )
}

export default TaskDisplay;
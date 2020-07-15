import React, {useState} from 'react';
import TaskForm from './TaskForm'
import TaskDisplay from './TaskDisplay'

const ToDo = (props) => {

  const [check, setCheck] = useState("")
  const [tasks, setTasks] = useState([
    {
      text: "Get a MERN belt",
      completed: false,
      style:{
        textDecoration: 'none'
      }
    }
  ])

  const deleteHandler = (idx) => {
    console.log(idx)
    setTasks(tasks.filter((tasks, i) => i !== idx));
}

const checkHandler = (e,idx) => {
  console.log(idx)
  let newTasks = [...tasks];
  const selectedTask = Object.assign({}, newTasks[idx])
  const selectedStyle = Object.assign({},newTasks[idx].style)
  console.log(selectedStyle.textDecoration)
  if (selectedTask.completed==false){
    selectedTask.completed = true;
    selectedStyle.textDecoration = 'line-through'
  }
  else{
    selectedTask.completed = false;
    selectedStyle.textDecoration = 'none'
  }
  selectedTask.style = selectedStyle;
  newTasks[idx] = selectedTask;
  setTasks(newTasks);
}

  return(
    <div>
      <TaskForm
        tasks = {tasks}
        setTasks = {setTasks}
      />
      <TaskDisplay 
      tasks = {tasks} 
      deleteHandler = {deleteHandler}
      checkHandler = {checkHandler}
      />
    </div>
  )
}

export default ToDo;
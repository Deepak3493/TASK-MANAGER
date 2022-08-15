import React from 'react'
import InputBox from './inputBox'
import ListItems from './listItems'
const Tasks = () => {
  let [TaskItems,setTask]=React.useState(["fdsdsf"]);
  const getTask = (currtask)=>{
      console.log("in to do list ", currtask);
      let newTaskArr=[...TaskItems];
      newTaskArr.push(currtask);
      console.log(newTaskArr);
      setTask(newTaskArr);
  }
  return (
    <div>
      <h1>TASK MANAGER</h1>
      <InputBox parentGetTask={getTask}/>
      <ListItems TaskItems={TaskItems}></ListItems>
    </div>
  )
}

export default Tasks
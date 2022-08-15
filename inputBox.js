import React from 'react'
// import App from '../App'
const InputBox = (props) => {
  const[currvalue,setcurrValue]=React.useState("");
  const changeValueOfInput =(e)=>{
      setcurrValue(e.target.value);
  }
  const addTask=(e)=>{
   // e.preventDefault();
    props.parentGetTask(currvalue);
    setcurrValue("");
  }

  return (
    <div>
       <input type="text" value={currvalue} onChange={(e)=>changeValueOfInput(e)}></input>
       <button onClick={addTask}>Add Task</button>
    </div>
  )
}

export default InputBox
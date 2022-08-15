import React from 'react'
// import Tasks from './Tasks'
const ListItems = (props) => {
  let TaskItems=props.TaskItems;
  return (
    <div>
        <ul>
            {TaskItems.map(function(task){
              return <li>{task}</li>
             })
            }
        
        </ul>
    </div>
  )
}

export default ListItems
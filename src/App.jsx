import React, { useState } from 'react'
import { FaTrash } from "react-icons/fa";

const App = () => {
  let [items, setitmes] = useState([
    {
      id:1,
      item:"coding",
      checked: true,
    },
    {
      id:1,
      item:"coding",
      checked: true,
    }
  ])
  
  return (
    <div>
     <p>TO DO LIST</p>
     <ul>
      {items.map((itm)=>(
        <li>
          <input type='checkbox'
          checked = {itm.checked}
          />
          <label>{itm.item}</label>
           <button><FaTrash/></button>
        </li>
         
      ))}
     </ul>
    </div>
  )
}

export default App
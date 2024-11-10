import React, { useState } from 'react'
import { FaTrash } from "react-icons/fa";

const Content = () => {

    let [items, setitmes] = useState([
      {
        id:1,
        item:"coding",
        checked: true,
      },
      {
        id:2,
        item:"coding",
        checked: false,
      }
    ])
    function handleCheck(id){
      const newlist = items.map((itms)=>{
        if(itms.id===id)
        {
          return{...itms,checked:!itms.checked};  
        }
        else
        {
            return itms
        }
      })  
      setitmes(newlist)
    }
    
    return (
      <div>
       <p>TO DO LIST</p>
       <ul>
        {items.map((itm)=>(
          <li className='item' key={itm.id}>
            <input type='checkbox'
            onChange={ () => handleCheck(itm.id) }
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

export default Content
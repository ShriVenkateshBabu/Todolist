import React from 'react'
import { FaTrash } from "react-icons/fa";
const LineItems = ({itm,handleCheck,handleclick}) => {
  return (
    <li className='item' key={itm.id}>
        <input type='checkbox'
        onChange={ () => handleCheck(itm.id) }
        checked = {itm.checked}
        />
                   <label
        style={itm.checked ? {textDecoration:"line-through"}:null}
        onDoubleClick={() => handleCheck(itm.id)}
        >{itm.item}</label>
         <FaTrash 
         onClick={()=> handleclick(itm.id)}
         role='button'
         /> 
          </li>
  )
}

export default LineItems
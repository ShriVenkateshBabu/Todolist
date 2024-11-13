import React from 'react'
import { FaPlus } from "react-icons/fa";
const AddItem = ({newItem,setitem,handlesubmit}) => {
  return (
    <form className='addForm' onSubmit={handlesubmit}>
        <label htmlFor='additem'>ADD ITEMS</label>
        <input type='text'
        id='additem'
        placeholder='add item'
        autoFocus
        // required if forgot to give requried use it handlesubmit
        value={newItem}
        onChange={(e)=>setitem(e.target.value)}

        />
        
        <button
        type='submit'
        >
        <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem
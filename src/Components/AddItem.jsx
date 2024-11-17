import React from 'react'
import { FaPlus } from "react-icons/fa";
import { useRef } from 'react';
const AddItem = ({newItem,setitem,handlesubmit}) => {
  const input_ref = useRef()
  return (
    <form className='addForm' onSubmit={handlesubmit}>
        <label htmlFor='additem'>ADD ITEMS</label>
        <input type='text'
        ref={input_ref}
        id='additem'
        placeholder='add item'
        autoFocus
        // required if forgot to give requried use it handlesubmit
        value={newItem}
        onChange={(e)=>setitem(e.target.value)}

        />
        
        <button
        type='submit'
        onClick={()=> input_ref.current.focus()}
        >
        <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem
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
        item:"coding venky",
        checked: false,
      }
    ])
  
    // console.log(items)
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
      localStorage.setItem("to-do-list",JSON.stringify(newlist)) 
      setitmes(newlist)
    }
    function handleclick(id){
      const new_list = items.filter((itm)=>itm.id!=id)
      localStorage.setItem("to-do-list", JSON.stringify(new_list))
      setitmes(new_list);
    }

    return (
      <div>
       <p>TO DO LIST</p>
       {(items.length)? (
       <ul>
        {items.map((itm)=>{
        //  let labelstyle ={}
        //  if(itm.checked){
        //   labelstyle={textDecoration:"line-through"}
        //   }
          return (<li className='item' key={itm.id}>
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
              </li>)
})}
       </ul>):<p>your list is empty</p>}
      </div>
    )
}

export default Content
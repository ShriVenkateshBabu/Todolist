 import Content from './Components/Content';
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import React, { useState } from 'react'
import AddItem from './Components/AddItem';

const App = () => {
  let [items, setitmes] = useState([
    // {
    //   id:1,
    //   item:"coding",
    //   checked: true,
    // },
    // {
    //   id:2,
    //   item:"coding venky",
    //   checked: false,
    // }
  ])
  
 
  let[newItem, setnewItem] =useState("")
  
   function additem(item){
    let id = items.length ? items[items.length-1].id +1:1;
    let new_item = {id,item,checked:false};
    setitmes([...items,new_item]);
    localStorage.setItem("to-do-list", JSON.stringify(new_item))
   }
  function handlesubmit(e){
    e.preventDefault()
    if(!newItem)
      return;
    additem(newItem)
    console.log(newItem);
    setnewItem("")
  }
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
    <div className=''>
      <Header title= "to-od-list"/>
      <AddItem
      newItem ={newItem}
      setitem = {setnewItem}
      handlesubmit ={handlesubmit}
      />
    
      <Content 
      items = {items}
      handleCheck ={handleCheck}
      handleclick ={handleclick}
      />
      <Footer
      length ={items.length}
      />
    </div>
  )
}

export default App
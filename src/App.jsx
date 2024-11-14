 import Content from './Components/Content';
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import React, { useEffect, useState } from 'react'
import AddItem from './Components/AddItem';
import Searchitem from './Components/Searchitem';

const App = () => {
  let [items, setitmes] = useState(JSON.parse(localStorage.getItem("to-do-list"))|| []);
  let[newItem, setnewItem] =useState("")
  let [searchitm, setSearchitm] = useState('')
 

   function additem(item){
    let id = items.length ? items[items.length-1].id +1:1;
    let new_item = {id,item,checked:false};
    let updateitem = [...items,new_item]
    setitmes(updateitem);
    localStorage.setItem("to-do-list", JSON.stringify(updateitem))
   }
  function handlesubmit(e){
    e.preventDefault()
    if(!newItem)
      return;
    additem(newItem)
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
      <Searchitem
       searchitm ={searchitm}
       setsearchitm = {setSearchitm}
      />
      <Content 
      items = {items.filter((items)=>(items.item).toLowerCase().includes(searchitm.toLowerCase()))}
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
 import Content from './Components/Content';
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import React, { useEffect, useState } from 'react'
import AddItem from './Components/AddItem';
import Searchitem from './Components/Searchitem';
import apirequest from './apirequest';

const App = () => {
   const API_URL = "http://localhost:3400/items"
  let [items, setitmes] = useState([]);
  let[newItem, setnewItem] =useState("")
  let [searchitm, setSearchitm] = useState('')
  let[fetchError,setFetchError] = useState(null)
  let[loading ,setloading] = useState(true)
  
  useEffect(()=>{
      const fetch_items = async() => {
       try{
         const response = await fetch(API_URL);
         if(!response.ok){
           throw Error("data is not received from api call")
         }
         const listitm = await response.json();
         console.log(listitm);
         setitmes(listitm)
         setFetchError(null)
       }
       catch(err){
        setFetchError(err.message)
       }
       finally{
          setloading(false)
       }
      }
      setTimeout(()=>{
        (async ()=>await fetch_items())()
      },3000)
      
  },[])

    const  additem = async (item) =>{
    let id = items.length ?  Number(items[items.length-1].id) + 1 : 1;
    let new_item = {id,item,checked:false};
    let updateitem = [...items,new_item]
    setitmes(updateitem);
    // localStorage.setItem("to-do-list", JSON.stringify(updateitem))
    const postoptions = {
     method :"POST",
     headers :{
      "Content-Type":"application/json"},
     body: JSON.stringify(new_item)
    }
    const result = await apirequest(API_URL,postoptions)
    if(result){
      setFetchError(result)
    }
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
    // localStorage.setItem("to-do-list",JSON.stringify(newlist)) 
    setitmes(newlist)
  }
  function handleclick(id){
    const new_list = items.filter((itm)=>itm.id!=id)
    // localStorage.setItem("to-do-list", JSON.stringify(new_list))
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
     <main>    
      {loading && <p>loading items</p>}
      {fetchError && <p>Error :{fetchError}</p>}
      {!loading && !fetchError && 
      <Content 
      items = {items.filter((items)=>(items.item).toLowerCase().includes(searchitm.toLowerCase()))}
      handleCheck ={handleCheck}
      handleclick ={handleclick}
      />}
      </main>
      <Footer
      length ={items.length}
      />
    </div>
  )
}

export default App
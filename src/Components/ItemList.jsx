import React from 'react'

import LineItems from './LineItems';

const ItemList = ({items,handleCheck,handleclick}) => {
    return (
    
    <ul > 
    {items.map((itm)=>{
    //  let labelstyle ={}
    //  if(itm.checked){
    //   labelstyle={textDecoration:"line-through"}
    //   }
      return (
      <LineItems
      itm ={itm}
      handleCheck={handleCheck}
      handleclick={handleclick}
      key={itm.id}
      />
      )
})}
   </ul>
  )
}

export default ItemList
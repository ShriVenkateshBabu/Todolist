import React from 'react'

import LineItems from './LineItems';

const ItemList = ({items,handleCheck,handleclick}) => {
    return (
    
    <ul>
    {items.map((itm)=>{
    //  let labelstyle ={}
    //  if(itm.checked){
    //   labelstyle={textDecoration:"line-through"}
    //   }
      return (
      <LineItems
      itm ={itm}
      key={itm.id}
      handleCheck={handleCheck}
      handleclick={handleclick}
      />
      )
})}
   </ul>
  )
}

export default ItemList
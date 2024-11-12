import React from 'react'

const Footer = ({length}) => {
  const year = new Date();
  return (
    <div style={{backgroundColor:"mediumblue",color:"white"}}>copyright &copy; {year.getFullYear()}
    <p style ={{fontWeight : "bolder",color:"black"}}>{length===1 ? length+"list item" :
     length + 'list items' }
    </p>
    </div>
  )
}

export default Footer
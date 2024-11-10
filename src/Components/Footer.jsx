import React from 'react'

const Footer = () => {
  const year = new Date();
  return (
    <div style={{backgroundColor:"mediumblue",color:"white"}}>copyright &copy; {year.getFullYear()}</div>
  )
}

export default Footer
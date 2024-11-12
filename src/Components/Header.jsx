import React from 'react'

const Header = ({title}) => {
  return (
    <div style={{backgroundColor:"mediumblue",color:"white"}}>{title}</div>
  )
}
// Header.defaultProps ={
//   title:"to do list"
// }
export default Header
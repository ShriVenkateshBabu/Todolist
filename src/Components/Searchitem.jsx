import React from 'react'

const Searchitem = ({searchitm,setsearchitm}) => {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
      <input type='text'
       id ="Search"
       value={searchitm}
       placeholder='enter a item to search'
       onChange={(e)=>setsearchitm(e.target.value)}
      />
    </form>
  )
}

export default Searchitem
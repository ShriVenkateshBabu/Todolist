import ItemList from "./ItemList";

const Content = ({items,handleCheck,handleclick}) => {
 
    return (
      <div>
       <p>TO DO LIST</p>
       {(items.length)? (
        <ItemList
        items = {items}
        handleCheck ={handleCheck}
        handleclick ={handleclick}
        />
):
<p>your list is empty</p>}
      </div>
    )
}

export default Content

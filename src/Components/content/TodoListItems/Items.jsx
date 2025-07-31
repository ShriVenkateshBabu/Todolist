
import TodoFunctions from "./TodoFunctions/TodoFunctions";
import "./Todolistitem.scss";
import { FaEdit } from "react-icons/fa";

import { MdDelete } from "react-icons/md";
const Items = ({ item }) => {
const {handleCheck,handleDelete,handleUpdate} = TodoFunctions()
  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => handleCheck(item.id)}
        />
        <label>{item.title}</label>
        <FaEdit role="button" tabIndex={0} onClick={()=>handleUpdate(item.id)} ></FaEdit>
        <MdDelete role="button" tabIndex={0} onClick={()=>handleDelete(item.id)}></MdDelete>
      </li>
    </>
  );
};

export default Items;

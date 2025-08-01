import useTodoFunctions from "./TodoFunctions/TodoFunctions";
import "./Todolistitem.scss";
import { FaEdit } from "react-icons/fa";

import { MdDelete } from "react-icons/md";
const Items = ({ item }) => {
  const { handleCheck, handleDelete, handleUpdate } = useTodoFunctions();
  return (
    <>
      <li className="ListItems">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => handleCheck(item.id)}
        />
        <label style={{ textDecoration: item.completed ? "line-through" : "" }}>
          {item.title}
        </label>
        <div className="IconContainer">
          <FaEdit
            role="button"
            tabIndex={0}
            onClick={() => handleUpdate(item.id)}
          ></FaEdit>
          <MdDelete
            role="button"
            tabIndex={0}
            onClick={() => handleDelete(item.id)}
          ></MdDelete>
        </div>
      </li>
    </>
  );
};

export default Items;

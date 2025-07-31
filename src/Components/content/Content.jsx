import "./Content.scss";
import { useContext } from "react";

import TodolistItems from "./TodoListItems/TodolistItems.jsx";

const Content = () => {

  return (
    <main>
      <div className="Content">
         <TodolistItems/>
      </div>
    </main>
  );
};

export default Content;

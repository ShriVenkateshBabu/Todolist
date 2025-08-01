import React, { useState } from "react";
import { TodoButton } from "../../../StyleComponents/Button";
import { DataContext } from "../../../ContextAPI/UseContext.jsx";
import { useContext } from "react";
import ListItem from "./ListItem.jsx";
import useTodoFunctions from "./TodoFunctions/TodoFunctions.jsx";
const TodolistItems = () => {
  const { listItems, TaskName, setTaskName, isToggle ,Inputref } =
    useContext(DataContext);
  const {handleAddTask} = useTodoFunctions()

  return (
    <>
      <input
        id="InputTask"
        ref ={Inputref}
        type="text"
        onChange={(e) => setTaskName(e.target.value)}
        value={TaskName}
        placeholder="Enter the task"
      />
      <TodoButton role="button" onClick={handleAddTask} tabIndex={0}>
        {isToggle ? "Save" : "Add Task"}
      </TodoButton>
      <ListItem list={listItems} />
    </>
  );
};

export default TodolistItems;

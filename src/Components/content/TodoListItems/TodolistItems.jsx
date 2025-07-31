import React, { useState } from "react";
import { TodoButton } from "../../../StyleComponents/Button";
import { DataContext } from "../../../ContextAPI/UseContext.jsx";
import { useContext } from "react";
import ListItem from "./ListItem.jsx";
const TodolistItems = () => {
  const { listItems, TaskName, setTaskName, isToggle } =
    useContext(DataContext);

  return (
    <>
      <label htmlFor="InputTask">Add Task</label>
      <input
        id="InputTask"
        type="text"
        onChange={(e) => setTaskName(e.target.value)}
        value={TaskName}
        placeholder="Enter the task"
      />
      <TodoButton role="button" tabIndex={0}>
        {isToggle ? "Save" : "Add Task"}
      </TodoButton>
      <ListItem list={listItems} />
    </>
  );
};

export default TodolistItems;

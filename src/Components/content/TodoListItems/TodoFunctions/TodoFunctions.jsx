import { useContext } from "react";
import { DataContext } from "../../../../ContextAPI/UseContext";

import React from "react";

const TodoFunctions = () => {
  const { listItems, setListItems, setTaskName, setIsToggle } =
    useContext(DataContext);
  const handleCheck = (id) => {
    const NewItems = listItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });
    setListItems(NewItems);
    localStorage.setItem("listItems", NewItems);
  };

  const handleDelete = (id) => {
    const NewItems = listItems
      .filter((item) => item.id !== id)
      .map((item, index) => {
        return {
          ...item,
          id: index,
        };
      });
    setListItems(NewItems);
    localStorage.setItem("listItems", NewItems);
  };
  const handleUpdate = (id) => {
    const LabelName = listItems.find((item) => item.id == id);
    setTaskName(LabelName.title);
    setIsToggle(true);
  };

  return { handleDelete, handleCheck, handleUpdate };
};

export default TodoFunctions;

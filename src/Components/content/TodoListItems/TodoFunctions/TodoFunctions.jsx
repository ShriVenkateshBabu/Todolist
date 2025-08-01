import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../../ContextAPI/UseContext";

const useTodoFunctions = () => {
  const {
    listItems,
    setListItems,
    TaskName,
    setTaskName,
    setIsToggle,
    isToggle,
    EditId,
    setEditId,
    Inputref,
  } = useContext(DataContext);

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
    setEditId(id);
  };
  const handleAddTask = () => {
    if (TaskName === "") {
      Inputref.current.setCustomValidity("Please Enter the Task")
      Inputref.current.reportValidity()
      return;
    }
    if (isToggle) {
      const EditedItem = listItems.map((item) => {
        if (EditId === item.id) {
          return {
            ...item,
            title: TaskName,
          };
        } else {
          return item;
        }
      });
      setListItems(EditedItem);
      setTaskName("");
      setIsToggle(false);
      Inputref.current.focus();
    } else {
      const NewId = listItems.length
        ? listItems[listItems.length - 1].id + 1
        : 1;
      const NewItem = [
        ...listItems,
        {
          id: NewId,
          title: TaskName,
          completed: false,
        },
      ];
      setListItems(NewItem);
      setTaskName("");
      setIsToggle(false);
      Inputref.current.focus();
    }
  };
  return { handleDelete, handleCheck, handleUpdate, handleAddTask };
};

export default useTodoFunctions;

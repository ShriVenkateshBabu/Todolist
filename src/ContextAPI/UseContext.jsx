import { createContext, useEffect, useRef, useState } from "react";
import useAxios from "../axios/useAxios";
import PropTypes from "prop-types";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const data = useAxios();
  const [users, SetUsers] = useState([]);
  const [listItems, setListItems] = useState([]);
  const [TaskName, setTaskName] = useState("");
  const [isToggle, setIsToggle] = useState(false);
  const [EditId, setEditId] = useState("");
  const Inputref = useRef(null);
  useEffect(() => {
    if (data.items) {
      setListItems(data.items);
      SetUsers(data.users);
    }
  }, [data]);

  return (
    <DataContext.Provider
      value={{
        data,
        listItems,
        setListItems,
        TaskName,
        setTaskName,
        isToggle,
        setIsToggle,
        users,
        SetUsers,
        EditId,
        setEditId,
        Inputref,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default DataProvider;

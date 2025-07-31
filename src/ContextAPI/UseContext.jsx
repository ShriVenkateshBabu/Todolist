
import { createContext, useEffect, useState } from "react";
import useAxios from "../axios/useAxios";
import PropTypes from "prop-types";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const data = useAxios();
  const [listItems, setListItems] = useState([]);
  const [TaskName, setTaskName] = useState("");
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    if (data.items) {
      setListItems(data.items);
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

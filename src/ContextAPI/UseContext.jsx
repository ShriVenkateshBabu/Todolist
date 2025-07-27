import { createContext, useContext } from "react";
import useAxios from "../axios/useAxios";

const DataContext = createContext();

export const DataProvider = ({children}) => {
   const data = useAxios();
   console.log(useAxios())
   console.log("Data from useAxios:", data);
   return (
    <DataContext.Provider value ={data}>
    {children}
    </DataContext.Provider>
   )
}
export default DataContext;

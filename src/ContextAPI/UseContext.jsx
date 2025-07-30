import { createContext, useEffect} from "react";
import useAxios from "../axios/useAxios";
import PropTypes from "prop-types"

export const DataContext = createContext();

 const DataProvider = ({children}) => {

   const data = useAxios();
   console.log("Data in DataProvider", data);

   return (
    <DataContext.Provider value ={data}>
    {children}
    </DataContext.Provider>
   )
}
DataProvider.propTypes ={
    children : PropTypes.any.isRequired
}
export default DataProvider;

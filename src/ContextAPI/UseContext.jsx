import { createContext} from "react";
import useAxios from "../axios/useAxios";
import PropTypes from "prop-types"
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
DataProvider.propTypes ={
    children : PropTypes.any.isRequired
}
export default DataContext;

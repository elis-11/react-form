import React, { createContext } from "react";

const DataContext = createContext();

export const DataProvider =({ children }) =>{
    const [data, setData]=useState({})

    const setValues = (values) => {
        setData(prevData=> ({}))
    }
}

import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

const DataContext = createContext(); //create context api

export const useStore = () => {
    return useContext(DataContext);
};

export const DataProvider = ({ children }) => {

    const initialState = {
        userData: null,
    };

    const [state, dispatch] = useReducer(reducer, initialState); //global state

    return (
        <DataContext.Provider value={{ state, dispatch }}> //using context api provider as component to use over root component
            {children}
        </DataContext.Provider>
    );
};

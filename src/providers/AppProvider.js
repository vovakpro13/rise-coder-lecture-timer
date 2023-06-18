import {createContext, useContext, useState} from "react";
import {Modules} from "../constants/modules";
import {Lectures} from "../constants/lectures";

const defaultValue = {
    module: Modules.JS,
    lecture: {
        number: 0,
        title: Lectures[Modules.JS][0]
    },
    startTime: null,

    setAppData: () => {}
}

const AppContext = createContext(defaultValue)

export const useApp = () => {
  return useContext(AppContext)
}

export const AppProvider = ({children}) => {
    const [appData, setAppData] = useState(defaultValue);

   return  <AppContext.Provider value={{ ...appData, setAppData}}>
        {children}
    </AppContext.Provider>
}
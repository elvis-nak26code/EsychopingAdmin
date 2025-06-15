import { createContext,useState } from "react";

export const GlobalContext = createContext() 

export const GlobaProvider=({children})=>{
    const [menuIsOpen,setMenuIsOpen]=useState(false)

    const [menuBtnActiv,setMenuBtnActiv] = useState(0)
    

    return (
        <GlobalContext.Provider value={{menuIsOpen , setMenuIsOpen , menuBtnActiv , setMenuBtnActiv}}>
            {children}
        </GlobalContext.Provider>
    )
}
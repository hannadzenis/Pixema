import React from "react";
import { useState } from "react"


export const SearchProvider = ({children}:{children:React.ReactNode}) => {
    const [searchValue, setSearchValue] = useState('');
    return (
        <SearchContext.Provider value={{searchValue, setSearchValue}}>
        {children}
        </SearchContext.Provider>
    )
}

export const SearchContext = React.createContext<{searchValue: string, setSearchValue: (s:string)=> void}>({searchValue: '', setSearchValue: ()=>{}})
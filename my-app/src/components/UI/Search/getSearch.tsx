import React from "react";
import { useState } from "react"

export const SearchProvider = ({children}:{children:React.ReactNode}) => {
    const [searchValue, setSearchValue] = useState('');
    // const API_KEY = "da2c0b84"
    // const SEARCH = `/?s=${searchValue}&apikey=${API_KEY}`
    return (
        <SearchContext.Provider value={{searchValue, setSearchValue}}>
        {children}
        </SearchContext.Provider>
    )
}

export const SearchContext = React.createContext<{searchValue: string, setSearchValue: (s:string)=> void}>({searchValue: '', setSearchValue: ()=>{}})
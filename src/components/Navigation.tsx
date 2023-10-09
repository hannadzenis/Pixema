import { Route, Routes } from "react-router-dom"
import { MainPage } from "./Main"
import { Authorization } from "./Auth"
import { Registration } from "./Reg"
import { Filter } from "./Filter"

export const Navigation = () => {

    return (
        <>
            <Routes>
                <Route path='*' element={<MainPage />} />
                <Route path='auth' element={<Authorization />} />
                <Route path='reg' element={<Registration />} />
                <Route path='movies/*' element={<MainPage />} />
                {/* <Route path='settings' element={<Filter/>}/> */}
            </Routes>
        </>
    )
}
import { Route, Routes } from "react-router-dom"
import { MainPage } from "./Main"

export const Navigation = () => {

    return (
        <>
            <Routes>
                <Route path='*' element={<MainPage />} />
                <Route path='movies/*' element={<MainPage />} />
            </Routes>
        </>
    )
}
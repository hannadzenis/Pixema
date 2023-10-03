import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./Store/store";
import { Navigation } from "./components/Navigation";

export const App = () => {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        </Provider>
    )

}

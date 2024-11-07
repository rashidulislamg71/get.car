

 
import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login-SignUp/Login";
import SignUp from "../Pages/Login-SignUp/SignUp";
import NotFound from "../Pages/PageNotFound/NotFound";
import Cart from "../Component/Cart/Cart";
import About_us from "../Pages/About/About_us";
import SupportPage from "../Pages/SupportPage/SupportPage";
import ProductsPage from "../Pages/Products/ProductsPage";
import NewsPage from "../Pages/NewsPage/NewsPage";


const router = createBrowserRouter([
    {
        element: <App />,
        children:[
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/cars",
                element: <ProductsPage />
            },
            {
                path: "/news",
                element: <NewsPage />
            },
            {
                path: "/about",
                element: <About_us />
            },
            {
                path: "/support",
                element: <SupportPage />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/log-in",
                element: <Login />
            },
            {
                path: "/sign-up",
                element: <SignUp />
            },
            {
                path: "*",
                element: <NotFound />
            },
        ]
    }
]);

export default router;
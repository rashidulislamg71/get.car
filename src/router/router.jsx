import { createBrowserRouter } from "react-router-dom";


import App from "../App";
import Home from "../Pages/Home/Home";
import Cars from "../Pages/Products/Cars";
import Login from "../Pages/Login-SignUp/Login";
import SignUp from "../Pages/Login-SignUp/SignUp";
import NotFound from "../Pages/PageNotFound/NotFound";
import Support from "../Pages/Support/Support";
import Cart from "../Component/Cart/Cart";
import News from "../Pages/News/News";
import About_us from "../Pages/About/About_us";


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
                element: <Cars />
            },
            {
                path: "/news",
                element: <News />
            },
            {
                path: "/about",
                element: <About_us />
            },
            {
                path: "/support",
                element: <Support />
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
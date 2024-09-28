import { createBrowserRouter } from "react-router-dom";


import App from "../App";
import Home from "../Pages/Home/Home";
import Cars from "../Pages/Products/Cars";
import About from "../Pages/About/About";
import Login from "../Pages/Login-SignUp/Login";
import SignUp from "../Pages/Login-SignUp/SignUp";
import NotFound from "../Pages/PageNotFound/NotFound";
import Support from "../Pages/Support/Support";
import Cart from "../Component/Cart/Cart";
import News from "../Pages/News/News";


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
                element: <About />
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
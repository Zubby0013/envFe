import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import HomeScreemn from "../pages/HomeScreemn";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Login from "../pages/Login";


export const mainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomeScreemn/>
            },
            {
                index: true,
                path: '/about',
                element: <About/>
            },
            {
                index: true,
                path: '/contact',
                element: <Contact/>
            },
        ]
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/login',
        element: <Login/>
    },
]);
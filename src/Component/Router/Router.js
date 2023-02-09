import Root from "../../Layout/Root";
import Card from "../Card/Card";
import Details from "../Details/Details";
import Home from "../Home/Home";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/card',
                element: <Card></Card>
            },
            {
                path: '/details',
                element: <Details></Details>
            }
        ]
    }
])
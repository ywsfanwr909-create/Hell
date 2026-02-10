import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout/MainLayout'
import Home from '../Pages/Home/Home'
import Profile from '../Pages/Profile/Profile'
import NotFound from '../Pages/Not.found/NotFound'
import AuthLayout from '../layouts/AuthLayout/AuthLayout'
import Login from '../Pages/Auth/Login/Login'
import Register from '../Pages/Auth/Register/Register'











export const routing=  createBrowserRouter([
    {path: "" , element: <MainLayout />,
        children:[
            {index :true ,element : <Home />,},
            {path: "Profile" ,element : <Profile />,},
            {path: "*" ,element : <NotFound/>,},
        ]
    },
    {path: "", element : <AuthLayout />,
        children:[
            {path: "login",element : <Login />},
            {path: "register" ,element : <Register />}
        ],
    },
])
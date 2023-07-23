import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home";
import Main from "../../layout/Main";
import Login from "../../components/Login/Login";
import SignUp from "../../components/Signup/Signup";
import TandC from "../../components/Terms&Conditions/TandC";
import Events from "../../components/Events/Events";
import EventDetails from "../../components/Events/EventDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import News from "../../components/News/News";
import NewsDetails from "../../components/News/NewsDetails";
import CategoryNews from "../../components/News/CategoryNews";
import Feed from "../../components/Feed/Feed";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home> ,
                
            },
            {
                path: '/feed',
                element: <PrivateRoute><Feed></Feed></PrivateRoute> ,
                
            },
            {
                path: '/events',
                element: <Events></Events>,
                loader: () => fetch('http://localhost:5000/events')
                
            },
            {
                path: '/events/:id',
                element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/events/${params.id}`)
                
            },
            {
                path: '/news',
                element: <News></News>,
                loader: () => fetch('http://localhost:5000/news')
                
            },
            {
                path: '/news/:id',
                element: <NewsDetails></NewsDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
                
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
                
            },
            {
                path: '/TandC',
                element: <TandC></TandC>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            }
        ]
    },
    
])
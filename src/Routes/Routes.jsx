import {
  Navigate,
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/News/News/News";
import LoginlLayout from "../Layouts/LoginlLayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
const router = createBrowserRouter([
  {
    path:"/",
    element:<LoginlLayout></LoginlLayout>,
    children:[
      {
        path:'/',
        element:<Navigate to ="/category/0"></Navigate>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
   },
    {
      path: "category",
      element: <Main></Main>,
      children:[
        {
          path:':id',
          element:<Category></Category>,
          loader: ({params}) => fetch(`http://localhost:2000/categories/${params.id}`)
        }
      ]
    },
    {
      path:'news',
      element:<NewsLayout></NewsLayout>,
      children:[
        {
          path:':id',
          element:<News></News>,
          loader:({params}) => fetch(`http://localhost:2000/news/${params.id}`)
        }
      ]
    }
  ]);
  export default router;
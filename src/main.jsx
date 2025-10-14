import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from './layouts/Roots.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
      {
        index: true,
        Component: Home,
        path: "/"
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

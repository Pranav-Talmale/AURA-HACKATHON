/* eslint-disable no-unused-vars */
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import HomePage from '../Pages/HomePage'
import SignUpPage from '../Pages/SignUpPage'
import LoginPage from '../Pages/LoginPage'



export const router = createBrowserRouter([
    {
        path: '/home',
        element: <HomePage/>
    },
    {
        path: '/',
        element: <SignUpPage />
    },
    {
        path: '/login',
        element: <LoginPage />
    }
])
/* eslint-disable no-unused-vars */
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import HomePage from '../Pages/HomePage'
import SignUpPage from '../Pages/SignUpPage'
import LoginPage from '../Pages/LoginPage'
import NetWorthFormPage from '../Pages/NetworthFormPage';
import DashboardPage from '../Pages/DashboardPage';
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
    },
    {
        path: '/networthform',
        element: <NetWorthFormPage/>
    },
    {
        path: '/dashboard',
        element: <DashboardPage/>
    }
])
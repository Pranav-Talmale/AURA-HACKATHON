/* eslint-disable no-unused-vars */
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import HomePage from '../Pages/HomePage'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    }
])
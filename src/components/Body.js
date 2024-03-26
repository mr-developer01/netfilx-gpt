import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'
import LoginForm from './LoginForm'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/login",
            element: <LoginForm />
        },
        {
            path: "/browse",
            element: <Browse />
        },
    ])
  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body
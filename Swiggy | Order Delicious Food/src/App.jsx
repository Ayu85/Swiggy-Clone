import { useState } from 'react'
import Body from './components/Body'
import Header from './components/Header'
import RestaurantMenu from './components/RestaurantMenu'
import { BrowserRouter, Routes, Route, createBrowserRouter, Outlet } from "react-router-dom"
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu />
      }
    ]
  }
])
function App() {

  return (
    <>
      <Header />
      <Outlet/>


    </>
  )
}

export default appRouter;

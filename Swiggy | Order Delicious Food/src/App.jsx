import { lazy, useState, Suspense } from 'react'
import Body from './components/Body'
import Header from './components/Header'
import RestaurantMenu from './components/RestaurantMenu'
import { BrowserRouter, Routes, Route, createBrowserRouter, Outlet } from "react-router-dom"
import About from './components/About'
//import Instamart from './components/Instamart'
const Mart = lazy(() => import('./components/Instamart'))
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
      },
      {
        path:'/about',
        element:<About/>
      }

    ]
  },
  {
    path: '/instamart',
    element: <Suspense><Mart /></Suspense>
  }
])
function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default appRouter;

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Banner from './components/Banner/Banner';
import Statistics from './components/Statistics/Statistics';
import Category from './components/Category/Category';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/category',
        element: <Category></Category>,
        loader: () => fetch('/jobCategory.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

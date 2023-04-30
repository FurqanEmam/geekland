import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Applied from './components/Applied/Applied';
import Blog from './components/Blog/Blog';
import Details from './components/Details/Details';
import Main from './components/Main/Main'
import Error from './components/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main ></Main>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/applied',
        element: <Applied></Applied>
      },
      {
        path: '/blog',
        element: <Blog> </Blog>
      },
      {
        path: '/details/:id',
        element: <Details />,
        loader: async ({params}) => {
          const res = await fetch("/jobData.json");
          const data = await res.json();
          const jobs = data.find(jobInfo => jobInfo.id == params.id);

          return jobs;
        }
      }
    ]
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

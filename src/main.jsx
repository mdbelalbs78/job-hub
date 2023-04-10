import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App';
import Home from './component/Home/Home';
import Shop from './component/Shop/Shop';
import ViewDetails from './component/ViewDetails/ViewDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'shop',
        element: <Shop></Shop>
      },
      
      {
        path: 'viewDetails/:id',
        element: <ViewDetails></ViewDetails>,
        loader: async ({ params }) => {
          const res = await fetch(`/public/data.json`)
          const data = await res.json();
          // console.log(data)
          const findJob = data.find(d => d.id === params.id)
          return findJob;
        }
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

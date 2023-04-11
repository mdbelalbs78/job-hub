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
import Blog from './component/Blog/Blog';
import JobApply from './component/JobApply/JobApply';
import Reachart from './component/Reachart/Reachart';
import DataPass from './component/Product/DataPass/DataPass';

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
         path: 'blog',
         element: <Blog></Blog>
      },
      {
        path: 'applied',
        element: <JobApply></JobApply>
      },
    
      {
        path:'statistics',
        element: <Reachart></Reachart>
      },
      {
        path: 'datapass',
        element: <DataPass></DataPass>
      },

      {
        path: '*',
        element:<div>44000444</div>
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

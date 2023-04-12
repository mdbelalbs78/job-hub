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
import ApplyDetails from './component/ApplyDetails/ApplyDetails';

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
        element: <ApplyDetails></ApplyDetails>
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
        path: 'viewDetails/:id',
        element: <ViewDetails></ViewDetails>,
        loader: async ({ params }) => {
          const res = await fetch(`/data.json`)
          const data = await res.json();
          // console.log(data)
          const findJob = data.find(d => d.id === params.id)
          return findJob;
        }
      },
      {
        path: '*',
        element:<div>44000444</div>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

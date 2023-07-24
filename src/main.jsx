import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./component/Home/Home";
import Shop from "./component/Shop/Shop";
import ViewDetails from "./component/ViewDetails/ViewDetails";
import Blog from "./component/Blog/Blog";
import JobApply from "./component/JobApply/JobApply";
import Reachart from "./component/Reachart/Reachart";
import DataPass from "./component/Product/DataPass/DataPass";
import ApplyDetails from "./component/ApplyDetails/ApplyDetails";
import About from "./component/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    {
      path: "/about",
      element: <About></About>
    },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "applied",
        element: <ApplyDetails></ApplyDetails>,
      },

      // {
      //   path: "statistics",
      //   element: <Reachart></Reachart>,
      // },
      {
        path: "datapass",
        element: <DataPass></DataPass>,
      },

      {
        path: "viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: async ({ params }) => {
          const res = await fetch(`/data.json`);
          const data = await res.json();
          // console.log(data)
          const findJob = data.find((d) => d.id === params.id);
          return findJob;
        },
      },
      {
        path: "*",
        element: (
          <div className="text-center text-6xl mt-20 text-purple-500">
            <div className="card w-full text-center  ">
              <div className="card-body items-center text-center">
                <p>Sorry!! Not Found this Page</p>
                <p className="mt-4">404</p>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

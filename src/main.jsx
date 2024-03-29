import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './MainLayOut/MainLayOut';
import Home from './Pages/Home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children:[
      {
    path:"/",
    element: <Home />
  }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className=' max-w-full mx-auto bg-gradient-to-r from-[#04619F] to-[#000000]  text-white'>
     <RouterProvider router={router} />
     </div>
  </React.StrictMode>,
)

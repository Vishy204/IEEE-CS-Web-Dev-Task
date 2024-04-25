import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Message from './message';


import Details from './MacDetails';
import Cart from './cart';

import Caart from './emptycart';
const router=createBrowserRouter([
  {
    path:'/',
    element: <Message />,
    errorElement:<div>404 Not Found</div>
  },


  {
    path:'/MacDetails',
    element:<Details />,
  },
  {
    path:'/YourCart',
    element:<Cart />,
  },

  {
    path:'/Cart',
    element:<Caart />,
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

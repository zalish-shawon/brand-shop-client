import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayouts from './components/mainLayouts/MainLayouts.jsx';
import Home from './components/Home/Home.jsx';
import AddProducts from './components/AddProducts/AddProducts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addProducts",
        element: <AddProducts></AddProducts>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

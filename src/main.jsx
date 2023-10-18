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
import AppleItems from './components/AppleItems/AppleItems.jsx';
import SamsungItems from './components/SamsungItems/SamsungItems.jsx';
import ProductDetails from './components/Details/ProductDetails.jsx';
import UpdateProduct from './components/UpdateProduct/UpdateProduct.jsx';

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
      },
      {
        path: "/appleItems",
        element: <AppleItems></AppleItems>,
        loader: () => fetch(`http://localhost:5001/products`)
        
      },
      {
        path: "/samsungItems",
        element: <SamsungItems></SamsungItems>,
        loader: () => fetch(`http://localhost:5001/products`)
        
      },
      {
        path: "/details/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({params}) => fetch(`http://localhost:5001/products/${params.id}`)

      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({params}) => fetch(`http://localhost:5001/products/${params.id}`)

      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

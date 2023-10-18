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
import MyCart from './components/MyCart/MyCart.jsx';
import SonyItems from './components/Sony/SonyItems.jsx';
import GoogleItems from './components/Google/GoogleItems.jsx';
import MicrosoftItems from './components/Microsoft/MicrosoftItems.jsx';
import IntelItems from './components/Intel/IntelItems.jsx';

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
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
        loader: () => fetch(`http://localhost:5001/myCarts`)
      },
      {
        path: "/sonyItems",
        element: <SonyItems></SonyItems> ,
        loader: () => fetch(`http://localhost:5001/products`)
      },
      {
        path: "/googleItems",
        element: <GoogleItems></GoogleItems>,
        loader: () => fetch(`http://localhost:5001/products`)

      },
      {
        path: "/microsoftItems",
        element: <MicrosoftItems></MicrosoftItems>,
        loader: () => fetch(`http://localhost:5001/products`)
      },
      {
        path: "/intelItems",
        element: <IntelItems></IntelItems>,
        loader: () => fetch(`http://localhost:5001/products`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

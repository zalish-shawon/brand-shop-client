import React, { useContext } from 'react'
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
import Login from './components/Login/Login.jsx';
import Registration from './components/Registration/Registration.jsx';
import AuthProvider, { AuthContext } from './Provider/AuthProvider.jsx';
import PrivateRoutes from './components/Route/PrivateRoutes.jsx';
import ErrorPage from './components/Error/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addProducts",
        element: <PrivateRoutes><AddProducts></AddProducts></PrivateRoutes>
      },
      {
        path: "/userLogin",
        element: <Login></Login>
      },
      {
        path: "/userRegistration",
        element: <Registration></Registration>
      },
      {
        path: "/details/:id",
        element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`https://brand-shop-server-qv8oodnr1-md-zalish-mahmuds-projects.vercel.app/products/${params.id}`)

      },
      {
        path: "/updateProduct/:id",
        element: <PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes>,
        loader: ({params}) => fetch(`https://brand-shop-server-qv8oodnr1-md-zalish-mahmuds-projects.vercel.app/products/${params.id}`)

      },
      {
        path: "/myCart",
        element:<PrivateRoutes> <MyCart></MyCart></PrivateRoutes>,
        loader: () => fetch(`https://brand-shop-server-qv8oodnr1-md-zalish-mahmuds-projects.vercel.app/myCarts`)
      },

      {
        path: "/appleItems",
        element: <AppleItems></AppleItems>,
        loader: () => fetch(`https://brand-shop-server-qv8oodnr1-md-zalish-mahmuds-projects.vercel.app/apple`)
        
      },
      {
        path: "/samsungItems",
        element: <SamsungItems></SamsungItems>,
        loader: () => fetch(`https://brand-shop-server-qv8oodnr1-md-zalish-mahmuds-projects.vercel.app/samsung`)
        
      },
      {
        path: "/sonyItems",
        element: <SonyItems></SonyItems> ,
        loader: () => fetch(`https://brand-shop-server-qv8oodnr1-md-zalish-mahmuds-projects.vercel.app/sony`)
      },
      {
        path: "/googleItems",
        element: <GoogleItems></GoogleItems>,
        loader: () => fetch(`https://brand-shop-server-qv8oodnr1-md-zalish-mahmuds-projects.vercel.app/google`)

      },
      {
        path: "/microsoftItems",
        element: <MicrosoftItems></MicrosoftItems>,
        loader: () => fetch(`https://brand-shop-server-qv8oodnr1-md-zalish-mahmuds-projects.vercel.app/microsoft`)
      },
      {
        path: "/intelItems",
        element: <IntelItems></IntelItems>,
        loader: () => fetch(`https://brand-shop-server-qv8oodnr1-md-zalish-mahmuds-projects.vercel.app/intel`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     
      <RouterProvider router={router} />
     
    
    </AuthProvider>
  </React.StrictMode>,
)

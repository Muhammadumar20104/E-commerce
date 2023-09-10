import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetails from './features/product-list/components/ProductDetails';
import ProductDetailsPage from './pages/ProductDetailsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignupPage/>,
  },
  {
    path: "/cart",
    element: <CartPage/>,
  },
  {
    path: "/checkout",
    element: <Checkout/>,
  },
  {
    path: "/product-detail",
    element: <ProductDetailsPage />,
  },
]); 

function App() {
  return (
    <>
      <div>
        {/* <SignupPage />  */}
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;

import React from "react";
import Home_mobile from "./component/Home_mobile.jsx";
import Services from "./component/services.jsx";
import Blog from "./component/Blog.jsx";
import Contact from "./component/contact.jsx";
import About from "./component/about.jsx";
import Products from './component/products.jsx' 
import Login from  './component/common_component/Login.jsx'
import Signup from "./component/common_component/signUp.jsx";
import Product from './component/products.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import  { Hero } from "./component/common_component/not_found_page.jsx";
// import { supabase } from "./supabaseClient";
import Wrapper from "./component/wrapper.jsx";




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home_mobile />,
      errorElement: <Hero />,
    },
    { path: "/services", element: <Services /> },
    { path: "/blog", element: <Blog /> },
    { path: "/Contact", element: <Contact /> },
    { path: "/about", element: <About /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/product", element: <Product /> },

  ]);
  return (
    <div className="first">
       <RouterProvider router={router} /> 
    </div>
  );
}

export default App;

import React from "react";
import Home_mobile from "./component/Home_mobile.jsx";
import Services from "./component/services.jsx";
import Blog from "./component/Blog.jsx";
import Contact from "./component/contact.jsx";
import About from "./component/about.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import  { Hero } from "./component/common_component/not_found_page.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home_mobile />,
      errorElement: <Hero/>
    },
    { path: "/services", element: <Services /> },
    { path: "/blog", element: <Blog /> },
    { path: "/Contact", element: <Contact /> },
    { path: "/about", element: <About /> },
  ]);
  return (
    <div className="first">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

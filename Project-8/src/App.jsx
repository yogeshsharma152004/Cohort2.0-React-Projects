import React from "react";

import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Saftey from "./pages/Saftey";
import Compney from "./pages/Compney";
import Careers from "./pages/Careers";
import Layout from "./pages/Layout";
import CareerInfo from "./pages/CareerInfo";

const App = () => {
  const allroutes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "saftey",
          element: <Saftey />,
        },
        {
          path: "compney",
          element: <Compney />,
        },
        {
          path: "careers",
          element: <Careers />,
        },
       
      ],
    },
     {
          path: "/careerinfo",
          element: <CareerInfo />,
     },
  ]);

  return <RouterProvider router={allroutes} />;
};

export default App;

import React from "react";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Collection from "./components/Collection/Collection";
import News from "./components/News/News";
import Cart from "./components/Cart/Cart";
import Favourites from "./components/Favourites/Favourites";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Routing = () => {
  let ROUTES = [
    {
      path: "/",
      element: <Home />,
      id: 1,
    },
    {
      path: "/about",
      element: <AboutUs />,
      id: 2,
    },
    {
      path: "/collection",
      element: <Collection />,
      id: 3,
    },
    {
      path: "/news",
      element: <News />,
      id: 4,
    },
    {
      path: "/cart",
      element: <Cart />,
      id: 5,
    },
    {
      path: "/favourites",
      element: <Favourites />,
      id: 6,
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map((item) => (
          <Route exact key={item.id} path={item.path} element={item.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

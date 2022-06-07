import React from "react";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Collection from "./components/Collection/Collection";
import News from "./components/News/News";
import Cart from "./components/Cart/Cart";
import Favourites from "./components/Favourites/Favourites";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Help from "./components/Help/Help";
import PublicOffer from "./components/PublicOffer/PublicOffer";
const Routing = () => {
  const ROUTES = [
    {
      path: "/",
      element: <Home />,
      id: 1,
    },
    {
      path: "/about",
      ru: "О нас",
      element: <AboutUs />,
      id: 2,
    },
    {
      path: "/Collection",
      element: <Collection />,
      id: 3,
    },
    {
      path: "/news",
      ru: "Новости",
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
    {
      path: "/help",
      element: <Help />,
      id: 7,
    },
    {
      path: "/offer",
      element: <PublicOffer />,
    },
  ];
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {ROUTES.map((item) => (
          <Route exact key={item.id} path={item.path} element={item.element} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;

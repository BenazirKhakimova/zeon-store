import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Collection from "./pages/Collection/Collection";
import News from "./pages/News/News";
import Cart from "./pages/Cart/Cart";
import Favourites from "./pages/Favourites/Favourites";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Help from "./pages/Help/Help";
import PublicOffer from "./pages/PublicOffer/PublicOffer";
import Loading from "./components/Loading/Loading";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Dresses from "./pages/OwnCollection/Dresses/Dresses";
import Skirts from "./pages/OwnCollection/Skirts/Scirts";
import Summer from "./pages/OwnCollection/Summer/Summer";
import Winter from "./pages/OwnCollection/Winter/Winter";
import GoOut from "./pages/OwnCollection/GoOut/GoOut";
import DitailsProduct from "./pages/DitailsProduct/DitailsProduct";

const Routing = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
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
      id: 8,
    },
    {
      path: "/dresses",
      element: <Dresses />,
      id: 9,
    },
    {
      path: "/skirts",
      element: <Skirts />,
      id: 10,
    },
    {
      path: "/summer",
      element: <Summer />,
      id: 11,
    },
    {
      path: "/winter",
      element: <Winter />,
      id: 11,
    },
    {
      path: "/goout",
      element: <GoOut />,
      id: 11,
    },
    {
      path: "/ditails/:id",
      element: <DitailsProduct />,
      id: 11,
    },
  ];
  return (
    <>
      {" "}
      {isLoading === true ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            {ROUTES.map((item) => (
              <Route
                exact
                key={item.id}
                path={item.path}
                element={item.element}
              />
            ))}
          </Routes>

          <Footer />
        </BrowserRouter>
      )}
    </>
  );
};

export default Routing;

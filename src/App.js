import "./App.css";
import Routing from "./Routing";
import ProductsContextProvider from "./context/productContext";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import FavouritesContextProvider from "./context/favouritesContext";
import CartContextProvider from "./context/cartContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <FavouritesContextProvider>
          <ProductsContextProvider>
            <Routing />
          </ProductsContextProvider>
        </FavouritesContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;

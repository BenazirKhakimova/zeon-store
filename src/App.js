import "./App.css";
import Routing from "./Routing";
import ProductsContextProvider from "./context/productContext";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import FavouritesContextProvider from "./context/favouritesContext";

function App() {
  return (
    <div className="App">
      <FavouritesContextProvider>
        <ProductsContextProvider>
          <Routing />
        </ProductsContextProvider>
      </FavouritesContextProvider>
    </div>
  );
}

export default App;

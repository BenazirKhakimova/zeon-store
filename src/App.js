import "./App.css";
import Routing from "./Routing";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import ProductsContextProvider from "./context/productContext";

function App() {
  return (
    <div style={{ backgroundColor: "#F8F8F8" }} className="App">
      <ProductsContextProvider>
        <Routing />
      </ProductsContextProvider>
    </div>
  );
}

export default App;

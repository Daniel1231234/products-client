import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductFilter from "./components/ProductFilter";
import ProductList from "./components/ProductList";

import { ProductContextProvider } from "./context/ProductContext";

function App() {
  return (
    <ProductContextProvider>
      <Header />
      <div className="container">
        <div className="content">
          <div className="left-column">
            <ProductFilter />
            <ProductList />
          </div>
          <ProductDetails />
        </div>
      </div>
    </ProductContextProvider>
  );
}

export default App;

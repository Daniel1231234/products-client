import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductFilter from "./components/ProductFilter";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="left-column">
          <ProductFilter />
          <ProductList />
        </div>
        <ProductDetails />
      </div>
    </>
  );
}

export default App;

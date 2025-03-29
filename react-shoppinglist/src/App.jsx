import "./App.css";
import AddProduct from "./components/AddProduct";
import ProductsTable from "./components/ProductsTable";
import { useState } from "react";
function App() {
  const markets = [
    {
      id: 1,
      name: "Migros",
    },
    {
      id: 2,
      name: "Teknosa",
    },
    {
      id: 3,
      name: "BIM",
    },
  ];

  const categories = [
    {
      id: 1,
      name: "Elektronik",
    },
    {
      id: 2,
      name: "Şarküteri",
    },
    {
      id: 3,
      name: "Oyuncak",
    },
    {
      id: 4,
      name: "Bakliyat",
    },
    {
      id: 5,
      name: "Fırın",
    },
  ];
  const [products, setProducts] = useState([]);

  const onDelete = (id) => {
    setProducts(products.filter(p => p.id !== id))};
    
  return (
    <div>
      <AddProduct
        markets={markets}
        categories={categories}
        onAdd={(product) => {
          setProducts((oldProducts) => {
            return [...oldProducts, product];
          }
        );}}
      />
      <ProductsTable markets = {markets} categories = {categories}  products = {products} onDelete={onDelete}/>
    </div>
  );
}

export default App;

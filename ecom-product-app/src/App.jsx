import { useState } from "react";
import laptop from "./assets/laptop.webp";
import phone from "./assets/phone.webp";
import headphones from "./assets/headphones.jpeg";
import watch from "./assets/watch.webp";
import ProductList from "./ProductList";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 1200,
      description: "A high-performance gaming laptop",
      category: "Electronics",
      image: laptop,
    },
    {
      id: 2,
      name: "Phone",
      price: 800,
      description: "A smartphone with great features",
      category: "Electronics",
      image: phone,
    },
    {
      id: 3,
      name: "Headphones",
      price: 200,
      description: "Noise-canceling headphones",
      category: "Accessories",
      image: headphones,
    },
    {
      id: 4,
      name: "Watch",
      price: 2000,
      description: "A luxury smartwatch with sleek design",
      category: "Accessories",
      image: watch,
    },
  ]);

  return (
    <div className="app-container">
      <h1>Product Store</h1>
      <hr />
      <ProductList products={products} />
    </div>
  );
}

export default App;

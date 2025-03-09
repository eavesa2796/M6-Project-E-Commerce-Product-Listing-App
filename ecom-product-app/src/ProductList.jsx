import { useState } from "react";
import ProductItem from "./ProductItem";
import "./ProductList.css";

function ProductList({ products }) {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const searchCategories = () => {
    setFilteredProducts(
      products.filter((product) =>
        product.category.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <input
        type="text"
        placeholder="Search by category"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={searchCategories}>Search</button>
      <ul>
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

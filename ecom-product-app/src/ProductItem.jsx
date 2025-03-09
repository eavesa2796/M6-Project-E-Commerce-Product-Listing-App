import "./ProductItem.css";

function ProductItem({ product }) {
  // console.log(product);
  return (
    <li className="product-item">
      <img src={product.image} alt={product.name} title={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <p className="category">Category: {product.category}</p>
    </li>
  );
}
export default ProductItem;

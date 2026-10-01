import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

function ProductCard({ product }) {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
  } = useApp();

  return (
    <div className="product-card">
      <button
        className="wishlist-btn"
        onClick={() => toggleWishlist(product)}
      >
        {isInWishlist(product.id) ? "❤️" : "🤍"}
      </button>

      <img src={product.image} alt={product.title} />

      <div className="product-info">
        <p className="category">{product.category}</p>

        <h3>{product.title}</h3>

        <div className="rating">
          ⭐ {product.rating.rate} ({product.rating.count})
        </div>

        <h2>${product.price}</h2>

        <div className="card-buttons">
          <Link
            to={`/products/${product.id}`}
            className="details-btn"
          >
            View Details
          </Link>

          <button
            onClick={() => addToCart(product)}
            className="cart-btn"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
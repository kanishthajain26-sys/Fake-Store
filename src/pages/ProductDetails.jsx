import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../services/api";
import { useApp } from "../context/AppContext";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
  } = useApp();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        setError("Product nahi mila.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="center-message">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="center-message">
        <h2>{error}</h2>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  return (
    <section className="details-page">
      <div className="details-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="details-content">
        <p className="category">{product.category}</p>

        <h1>{product.title}</h1>

        <div className="rating">
          ⭐ {product.rating.rate} ({product.rating.count} reviews)
        </div>

        <h2 className="details-price">
          ${product.price}
        </h2>

        <p className="description">
          {product.description}
        </p>

        <div className="details-actions">
          <button
            className="cart-btn large"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

          <button
            className="wishlist-large"
            onClick={() => toggleWishlist(product)}
          >
            {isInWishlist(product.id)
              ? "❤️ Remove Wishlist"
              : "🤍 Add Wishlist"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
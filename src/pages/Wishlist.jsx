import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

function Wishlist() {
  const { wishlist } = useApp();

  return (
    <section className="products-page">
      <div className="page-heading">
        <h1>My Wishlist</h1>
        <p>Your saved products.</p>
      </div>

      {wishlist.length === 0 ? (
        <div className="empty-page">
          <h2>Your Wishlist is Empty</h2>
          <p>Save products you like here.</p>

          <Link to="/products" className="shop-btn">
            Explore Products
          </Link>
        </div>
      ) : (
        <div className="products-grid">
          {wishlist.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Wishlist;
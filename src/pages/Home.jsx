import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-small">WELCOME TO FAKESTORE</p>

        <h1>
          Shop Smart.
          <br />
          Shop Simple.
        </h1>

        <p>
          Discover amazing products, add them to your cart
          and enjoy a simple shopping experience.
        </p>

        <Link to="/products" className="shop-btn">
          Shop Now →
        </Link>
      </div>
    </section>
  );
}

export default Home;
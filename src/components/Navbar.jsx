import { Link, NavLink } from "react-router-dom";
import { useApp } from "../context/AppContext";

function Navbar() {
  const { cartCount, wishlist, user, logout } = useApp();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        FakeStore
      </Link>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/wishlist">
          Wishlist ({wishlist.length})
        </NavLink>
        <NavLink to="/cart">
          Cart ({cartCount})
        </NavLink>

        {user ? (
          <button onClick={logout} className="nav-button">
            Logout
          </button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
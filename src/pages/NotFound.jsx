import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="empty-page">
      <h1>404</h1>
      <h2>Page Not Found</h2>

      <Link to="/" className="shop-btn">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
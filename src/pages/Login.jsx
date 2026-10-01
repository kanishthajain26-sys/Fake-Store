import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

function Login() {
  const { user, login } = useApp();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (user) {
    return <Navigate to="/products" replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert("Please fill all fields");
      return;
    }

    login(name, email);
    navigate("/products");
  };

  return (
    <section className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Welcome Back</h1>
        <p>Login to continue shopping.</p>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;
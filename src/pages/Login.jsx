import { useState } from "react";
import "../styles/login.css";

export default function Login({ onSubmit }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log(formData);
    }
  };

  return (
    <div className="form-card">
      <h2>Sign In</h2>
      <p>Welcome back! Please login to continue.</p>

      <form onSubmit={handleSubmit} className="app-form">
        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>

          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <label className="checkbox">
          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
          />
          Remember me
        </label>

        <button type="submit" className="btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

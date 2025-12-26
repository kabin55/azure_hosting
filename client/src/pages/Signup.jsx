import { useState } from "react";
import { signup } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(form);
      alert("Signup Successful");
      navigate("/login");
    } catch {
      alert("User already exists");
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>

      <input
        placeholder="Name"
        onChange={e => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })}
      />

      <button onClick={handleSubmit}>Signup</button>
    </div>
  );
}

export default Signup;

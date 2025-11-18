import { useState } from "react";
import axios from "../config/axios";
import "../styles/forms.css";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();
    
    console.log("SUBMIT FUNCTION TRIGGERED", form); // for debugging

    try {
      const res = await axios.post("/auth/register", form);
      console.log("REGISTER RESPONSE:", res.data);

      window.location.href = "/login";
    } catch (error) {
      console.error("REGISTER ERROR:", error);
      alert("Registration failed");
    }
  };

  return (
    <div className="form-card">
      <h2 className="form-title">Create Account</h2>

      <form onSubmit={submit}>
        <input
          className="form-input"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="form-input"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="form-input"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button type="submit" className="btn-dark">
          Register
        </button>
      </form>
    </div>
  );
}

import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const token = localStorage.getItem("token");

  return (
    <nav className="navbar">
      <div className="nav-left">Elevatr</div>

      <div className="nav-right">
        <Link to="/">Home</Link>

        {token ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={() => { localStorage.removeItem("token"); window.location.href = "/"; }}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

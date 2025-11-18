import { useEffect, useState } from "react";
import axios from "../config/axios";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("/auth/me").then((res) => setUser(res.data));
  }, []);

  return (
  <div className="dashboard-wrapper">
    <h1 className="dash-title">Dashboard</h1>
    {user && <p className="dash-welcome">Welcome, {user.name} 👋</p>}

    <div className="dash-cards">
      <div className="dash-card">🔥 Your Stats</div>
      <div className="dash-card">📚 Courses</div>
      <div className="dash-card">⚙️ Settings</div>
    </div>
  </div>
);

}

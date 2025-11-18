import "../styles/global.css";

export default function Home() {
  return (
    <div className="home-hero">
      <h1>Elevatr 🚀</h1>
      <p>AI powered career growth ecosystem built for students & learners.</p>

      <div className="home-buttons">
        <a href="/login" className="btn-primary">Login</a>
        <a href="/register" className="btn-outline">Register</a>
      </div>
    </div>
  );
}

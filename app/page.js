import Link from "next/link";

// home page: student info + links to every page in the project
export default function Home() {
  return (
    <div className="auth-box home-box">
      <div className="big-emoji">🎀</div>
      <h1>Auth Demo</h1>
      <p className="subtitle">Made with love on Vercel ✨</p>

      <div className="student-info">
        <p><strong>First name:</strong> Chaw </p>
        <p><strong>Last name:</strong> Theint</p>
        <p><strong>Student ID:</strong> 6807911</p>
      </div>

      <ul className="menu">
        <li><Link href="/register">💖 Register</Link></li>
        <li><Link href="/login">🌸 Login</Link></li>
        <li><Link href="/dashboard">🍓 Dashboard (members only)</Link></li>
      </ul>
    </div>
  );
}
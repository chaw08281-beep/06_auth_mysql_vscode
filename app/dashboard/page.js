"use client";

import { useState, useEffect } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState(null);

  // load the logged-in user from the API
  useEffect(() => {
    fetch("/api/me")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  // have the server delete the cookie, then go to the login page
  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    window.location.href = "/login"; // full reload clears the cached state
  };

  if (!user) {
    return (
      <div className="auth-box">
        <div className="big-emoji">⏳</div>
        <p className="subtitle">Loading your cute dashboard... 💕</p>
      </div>
    );
  }

  return (
    <div className="auth-box">
      <div className="big-emoji">🎀</div>
      <h1>My Dashboard</h1>
      <p className="subtitle">You are logged in! 🎉</p>
      <div className="student-info">
        <p><strong>Welcome,</strong> {user.fullname} 💖</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <button onClick={handleLogout}>Logout 👋</button>
    </div>
  );
}
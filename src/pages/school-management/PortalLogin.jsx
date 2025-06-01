import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Make sure this exists

const roles = ["student", "teacher", "accountant", "admin"];

const PortalLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [role, setRole] = useState("student"); // Default to student
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      await login(email, password, role);
      alert(`Logged in as ${role}`);
      navigate(`/${role}`);
    } catch (error) {
      console.error(error);
      alert("Login failed. Please check credentials.");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>
      <h2 style={{ textAlign: "center" }}>Login to EDUOS</h2>

      {/* Role Selection */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
        {roles.map((r) => (
          <button
            key={r}
            onClick={() => setRole(r)}
            style={{
              padding: "8px 12px",
              background: r === role ? "#007bff" : "#e0e0e0",
              color: r === role ? "white" : "black",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            {r.charAt(0).toUpperCase() + r.slice(1)}
          </button>
        ))}
      </div>

      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: 12 }}>
          <label>Email or Username:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: 8 }}
          />
          <div>
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="showPassword" style={{ marginLeft: 6 }}>
              Show Password
            </label>
          </div>
        </div>

        <button type="submit" style={{ width: "100%", padding: 10, backgroundColor: "#007bff", color: "white", border: "none", borderRadius: 4 }}>
          Login as {role}
        </button>
      </form>
    </div>
  );
};

export default PortalLogin;

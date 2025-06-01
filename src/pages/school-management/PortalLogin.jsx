import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PortalLogin = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("student"); // default to student
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const roles = ["student", "teacher", "accountant", "admin"];

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please enter both email and password.");
      return;
    }

    // Fake login logic — replace with actual login handler
    alert(`Logged in as ${role.toUpperCase()} with ${email}`);
    
    // Redirect logic based on role
    navigate(`/${role}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login Portal</h2>

        <div style={styles.roleContainer}>
          {roles.map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              style={{
                ...styles.roleButton,
                backgroundColor: r === role ? "#007bff" : "#f0f0f0",
                color: r === role ? "#fff" : "#000"
              }}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>

        <form onSubmit={handleLogin} style={styles.form}>
          <label style={styles.label}>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            placeholder="Enter email"
          />

          <label style={styles.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            placeholder="Enter password"
          />

          <button type="submit" style={styles.submitButton}>
            Login as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#eef1f5",
    padding: "20px"
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px"
  },
  title: {
    marginBottom: "20px",
    textAlign: "center",
    fontSize: "24px"
  },
  roleContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    gap: "5px",
    flexWrap: "wrap"
  },
  roleButton: {
    flex: 1,
    padding: "8px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    margin: "2px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  label: {
    fontSize: "14px"
  },
  input: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc"
  },
  submitButton: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

export default PortalLogin;

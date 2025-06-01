import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../routes";
import { useAuth } from "../../context/AuthContext";
import { toast } from "sonner";

const PortalLogin = () => {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      await login(email, password, role); // Assuming your login function takes role
      toast.success(`Logged in as ${role}`);
      navigate(`/${role}`);
    } catch (err) {
      toast.error("Login failed");
    }
  };

  return (
    <div className="portal-container">
      <div className="portal-card">
        <Link to={routes.schoolManagement} className="logo">
          <img src="/uibadan.jpeg" alt="Logo" width={"30%"} />
        </Link>
        <h2 className="portal-title">Sign in to your account</h2>
        <form onSubmit={handleSubmit}>
          {/* Role selection */}
          <label className="portal-label">Login As:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="portal-input"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="accountant">Accountant</option>
            <option value="admin">Admin</option>
          </select>

          <label className="portal-label">Email:</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="portal-input"
          />

          <label className="portal-label">Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="portal-input"
          />

          <div className="portal-options">
            <label>
              <input type="checkbox" className="portal-checkbox" />
              Remember Me
            </label>
            <a href="#" className="portal-forgot">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="portal-button">
            Sign Me In
          </button>
        </form>
      </div>
    </div>
  );
};

export default PortalLogin;

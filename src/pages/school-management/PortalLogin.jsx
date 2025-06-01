import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../routes";
import { useAuth } from "../../context/AuthContext";
import { toast } from "sonner";

const PortalLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getDefaultCredentials = (role) => {
    switch (role) {
      case "student":
        return { email: "anas123@gmail.com", password: "123456" };
      case "teacher":
        return { email: "teacher@example.com", password: "password" };
      case "accountant":
        return { email: "amanbhai234@gmail.com", password: "0987654" };
      case "admin":
        return { email: "stgcommunitydt@gmail.com", password: "9876543" };
      default:
        return { email: "", password: "" };
    }
  };

  useEffect(() => {
    const creds = getDefaultCredentials(role);
    setEmail(creds.email);
    setPassword(creds.password);
  }, [role]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      await login(email, password, role);
      toast.success(`Logged in as ${role}`);
      navigate(`/${role}`);
    } catch (err) {
      toast.error("Login failed. Check credentials.");
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
          <label className="portal-label">Select Role:</label>
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
            placeholder="Enter your email or username"
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

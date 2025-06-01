import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import routes from "../../routes";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserRole } from "@/types";

const PortalLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("student");
  const [isLoading, setIsLoading] = useState(false);

  const getDefaultCredentials = (role: UserRole) => {
    switch (role) {
      case "student":
        return { email: "anas123@gmail.com", password: "123456" };
      case "admin":
        return { email: "stgcommunitydt@gmail.com", password: "9876543" };
      case "teacher":
        return { email: "teacher@example.com", password: "password" };
      case "accountant":
        return { email: "amanbhai234@gmail.com", password: "0987654" };
      default:
        return { email: "", password: "" };
    }
  };

  useEffect(() => {
    const creds = getDefaultCredentials(role);
    setEmail(creds.email);
    setPassword(creds.password);
  }, [role]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter all fields");
      return;
    }

    setIsLoading(true);
    try {
      await login(email, password, role);
      toast.success(`Logged in as ${role}`);
      navigate(`/${role}`);
    } catch (error) {
      toast.error("Login failed. Check credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="portal-container">
      <div className="portal-card">
        <Link to={routes.schoolManagement} className="logo">
          <img src="/uibadan.jpeg" alt="Logo" width={"30%"} />
        </Link>
        <h2 className="portal-title">Sign in to your account</h2>

        <Tabs defaultValue="student" onValueChange={(value) => setRole(value as UserRole)}>
          <TabsList className="grid grid-cols-4 gap-2 mb-4">
            {(["student", "teacher", "accountant", "admin"] as UserRole[]).map((r) => (
              <TabsTrigger key={r} value={r} className="capitalize text-sm">
                {r}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <form onSubmit={handleSubmit}>
          <label className="portal-label">Email:</label>
          <input
            type="text"
            placeholder="Enter email"
            className="portal-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />

          <label className="portal-label">Password:</label>
          <input
            type="password"
            placeholder="Enter password"
            className="portal-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
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

          <button type="submit" className="portal-button" disabled={isLoading}>
            {isLoading ? "Signing in..." : `Sign in as ${role}`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PortalLogin;



// import { Link } from "react-router-dom";
// import routes from "../../routes";
// const PortalLogin = () => {
// 	return (
// 		<div className="portal-container">
// 			<div className="portal-card">
// 				<Link to={routes.schoolManagement} className="logo" >
// 					<img src="/uibadan.jpeg" alt="Logo" width={"30%"} />
// 				</Link>
// 				<h2 className="portal-title">Sign in to your account</h2>
// 				<form>
// 					<label className="portal-label">Admission Number:</label>
// 					<input
// 						type="text"
// 						placeholder="Enter your admission number"
// 						className="portal-input"
// 					/>

// 					<label className="portal-label">Password:</label>
// 					<input
// 						type="password"
// 						placeholder="Enter your password"
// 						className="portal-input"
// 					/>

// 					<div className="portal-options">
// 						<label>
// 							<input type="checkbox" className="portal-checkbox" />
// 							Remember Me
// 						</label>
// 						<a href="#" className="portal-forgot">
// 							Forgot Password?
// 						</a>
// 					</div>

// 					<button type="submit" className="portal-button">
// 						Sign Me In
// 					</button>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

// export default PortalLogin;

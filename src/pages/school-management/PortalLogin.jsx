import { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../routes";

const PortalLogin = () => {
	const [role, setRole] = useState("student"); // default selected role

	const getRoleLabel = () => {
		switch (role) {
			case "student":
				return "Admission Number:";
			case "teacher":
			case "accountant":
			case "admin":
				return "Staff ID:";
			default:
				return "User ID:";
		}
	};

	const getRolePlaceholder = () => {
		switch (role) {
			case "student":
				return "Enter your admission number";
			case "teacher":
				return "Enter your teacher ID";
			case "accountant":
				return "Enter your accountant ID";
			case "admin":
				return "Enter your admin ID";
			default:
				return "Enter your ID";
		}
	};

	const getTitle = () => {
		return `${role.charAt(0).toUpperCase() + role.slice(1)} Login`;
	};

	return (
		<div className="portal-container">
			<div className="portal-card">
				<Link to={routes.schoolManagement} className="logo">
					<img src="/uibadan.jpeg" alt="Logo" width={"30%"} />
				</Link>

				<h2 className="portal-title">{getTitle()}</h2>

				{/* Role Selection Buttons */}
				<div className="role-buttons" style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
					{["student", "teacher", "accountant", "admin"].map((r) => (
						<button
							key={r}
							className={`portal-button ${role === r ? "active" : ""}`}
							onClick={() => setRole(r)}
						>
							{r.charAt(0).toUpperCase() + r.slice(1)}
						</button>
					))}
				</div>

				{/* Login Form */}
				<form>
					<label className="portal-label">{getRoleLabel()}</label>
					<input
						type="text"
						placeholder={getRolePlaceholder()}
						className="portal-input"
					/>

					<label className="portal-label">Password:</label>
					<input
						type="password"
						placeholder="Enter your password"
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

import { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../routes";

const PortalLogin = () => {
	const [role, setRole] = useState(null); // null, "student", or "teacher"

	const handleRoleSelect = (selectedRole) => {
		setRole(selectedRole);
	};

	const handleBack = () => {
		setRole(null);
	};

	return (
		<div className="portal-container">
			<div className="portal-card">
				<Link to={routes.schoolManagement} className="logo">
					<img src="/uibadan.jpeg" alt="Logo" width={"30%"} />
				</Link>

				{!role ? (
					<>
						<h2 className="portal-title">Select Your Role</h2>
						<div className="role-buttons">
							<button
								className="portal-button"
								onClick={() => handleRoleSelect("student")}
							>
								Student
							</button>
							<button
								className="portal-button"
								onClick={() => handleRoleSelect("teacher")}
							>
								Teacher
							</button>
						</div>
					</>
				) : (
					<>
						<h2 className="portal-title">
							{role === "student" ? "Student Login" : "Teacher Login"}
						</h2>
						<form>
							<label className="portal-label">
								{role === "student" ? "Admission Number:" : "Staff ID:"}
							</label>
							<input
								type="text"
								placeholder={
									role === "student"
										? "Enter your admission number"
										: "Enter your staff ID"
								}
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
						<button className="portal-back-button" onClick={handleBack}>
							← Back
						</button>
					</>
				)}
			</div>
		</div>
	);
};

export default PortalLogin;

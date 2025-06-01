import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type UserRole = "student" | "teacher" | "accountant" | "admin";

const PortalLogin = () => {
	const navigate = useNavigate();
	const [role, setRole] = useState<UserRole>("student");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const defaultCredentials = {
		student: { email: "student@example.com", password: "123456" },
		teacher: { email: "teacher@example.com", password: "teacher123" },
		accountant: { email: "accountant@example.com", password: "account123" },
		admin: { email: "admin@example.com", password: "admin123" }
	};

	useEffect(() => {
		const creds = defaultCredentials[role];
		setEmail(creds.email);
		setPassword(creds.password);
	}, [role]);

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		if (!email || !password) {
			alert("Please fill in both fields.");
			return;
		}
		alert(`Logged in as ${role}`);
		navigate(`/${role}`);
	};

	return (
		<div style={styles.container}>
			<div style={styles.card}>
				<h2 style={styles.title}>Login to EDUOS</h2>

				<div style={styles.tabs}>
					{(["student", "teacher", "accountant", "admin"] as UserRole[]).map((r) => (
						<button
							key={r}
							onClick={() => setRole(r)}
							style={{
								...styles.tab,
								backgroundColor: role === r ? "#007bff" : "#eee",
								color: role === r ? "#fff" : "#000"
							}}
						>
							{r.charAt(0).toUpperCase() + r.slice(1)}
						</button>
					))}
				</div>

				<form onSubmit={handleLogin} style={styles.form}>
					<div style={styles.inputGroup}>
						<label>Email or Username</label>
						<input
							type="text"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							style={styles.input}
						/>
					</div>

					<div style={styles.inputGroup}>
						<label>Password</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							style={styles.input}
						/>
					</div>

					<button type="submit" style={styles.loginButton}>
						Login as {role}
					</button>
				</form>
			</div>
		</div>
	);
};

// Simple inline styles for demonstration
const styles = {
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		minHeight: "100vh",
		backgroundColor: "#f2f2f2"
	},
	card: {
		backgroundColor: "#fff",
		padding: "30px",
		borderRadius: "8px",
		boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
		width: "100%",
		maxWidth: "400px"
	},
	title: {
		textAlign: "center",
		marginBottom: "20px"
	},
	tabs: {
		display: "flex",
		justifyContent: "space-between",
		marginBottom: "20px"
	},
	tab: {
		flex: 1,
		margin: "0 5px",
		padding: "10px",
		border: "none",
		cursor: "pointer",
		borderRadius: "4px"
	},
	form: {
		display: "flex",
		flexDirection: "column",
		gap: "15px"
	},
	inputGroup: {
		display: "flex",
		flexDirection: "column"
	},
	input: {
		padding: "8px",
		borderRadius: "4px",
		border: "1px solid #ccc"
	},
	loginButton: {
		padding: "10px",
		backgroundColor: "#007bff",
		color: "#fff",
		border: "none",
		borderRadius: "4px",
		cursor: "pointer"
	}
};

export default PortalLogin;

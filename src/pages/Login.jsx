import "../css/Authform.css";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
	return (
		<div className="Auth-form">
			<form action="">
				<center>
					{" "}
					<img src="/EDUOSlogo.png" alt="" />
				</center>

				<div className="title">Login</div>
				<div className="input-boxes">
					<div className="input-box">
						<FaEnvelope />
						<input type="text" placeholder="Enter your email" required />
					</div>
					<div className="input-box">
						<FaLock />
						<input type="password" placeholder="Enter your password" required />
					</div>
					<div className="text">
						<a href="#">Forgot password?</a>
					</div>
					<div className="form-button input-box">
						<input type="submit" value="Log in" />
					</div>
					<div className="text sign-up-text">
						Don&apos;t have an account? <Link to="/register" htmlFor="flip">Signup now</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Login;

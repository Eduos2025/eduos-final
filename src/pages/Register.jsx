import "../css/Authform.css";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<div className="Auth-form">
			<form action="" className="signup-form">
				<center>
					{" "}
					<img src="/EDUOSlogo.png" alt="" />
				</center>

				<div className="title">Signup</div>
				<div className="input-boxes">
					<div className="flex">
						<div className="input-box">
							<FaUser />
							<input type="text" placeholder="Enter your First Name" required />
						</div>
						<div className="input-box">
							<FaUser />
							<input type="text" placeholder="Enter your Last Name" required />
						</div>
					</div>
					<div className="input-box">
						<FaEnvelope />
						<input type="text" placeholder="Enter your email" required />
					</div>
					<div className="flex">
						<div className="input-box">
							<FaLock />
							<input
								type="password"
								placeholder="Enter your password"
								required
							/>
						</div>
						<div className="input-box">
							<FaLock />
							<input type="password" placeholder="Confirm password" required />
						</div>
					</div>
					<div className="form-button input-box">
						<input type="submit" value="Sign Up" />
					</div>
					<div className="text sign-up-text">
						Already have an account?{" "}
						<Link to="/login" htmlFor="flip">
							Login now
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Register;

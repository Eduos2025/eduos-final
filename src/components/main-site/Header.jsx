import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";

import "../../css/header.css";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("home");
	const location = useLocation();
	const navigate = useNavigate();

	// Function to navigate to a new page
	const getStarted = () => {
		navigate("/register"); // Replace "/new-page" with your desired route
	};

	const isActive = (path) => location.pathname === path;

	useEffect(() => {
		const path = location.pathname;

		// Update `activeSection` for sections on the same page
		if (path !== "/") {
			setActiveSection(""); // Reset for non-scrollable routes
		}
	}, [location.pathname]);


	const toggleMenu = () => setMenuOpen(!menuOpen);

	useEffect(() => {
		if (menuOpen) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}

		return () => {
			document.body.classList.remove("no-scroll");
		};
	}, [menuOpen]);

	useEffect(() => {
		// Add scroll event listener
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Cleanup listener on component unmount
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// const scrollToSection = (id) => {
	// 	const element = document.getElementById(id);
	// 	if (element) {
	// 		element.scrollIntoView({ behavior: "smooth" });
	// 		setMenuOpen(false);
	// 	}
	// };

	const toggleDropdown = (dropdownName) => {
		setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
	};
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // Optional: smooth scrolling
		});
		setMenuOpen(false);
	};


	return (
		<header className={`header ${isScrolled ? "scrolled" : "transparent"}`}>
			<Link to="/" className="logo">
				<img src="/EDUOSlogo.png" alt="EDUOS logo" />
			</Link>
			<nav>
				<Link
					to="/"
					className={`nav-link ${
						location.pathname === "/" ? "active" : ""
					}`}
					
				>
					Home
				</Link>
				<Link
					to="/about"
					className={`nav-link ${
						location.pathname === "/about" ? "active" : ""
					}`}
				>
					About
				</Link>
				<Link
					to="/contact"
					className={`nav-link ${
						location.pathname === "/contact" ? "active" : ""
					}`}
				>
					Contact
				</Link>
				<Link
					to="/blog"
					className={`nav-link ${isActive("/blog") ? "active" : ""}`}
				>
					Blog
				</Link>

				<div className="dropdown">
					<a href="#services" className="nav-link">
						Live Demo <MdKeyboardArrowDown />
					</a>
					<div className="dropdown-menu">
						<div className="demo">
							<h4>Login Details</h4>
							<Link
								to="/demo"
								className={`nav-link ${isActive("/demo") ? "active" : ""}`}
							>
								Demo Admin
							</Link>
							<div className="login-detail">
								<p>
									<span>Username:</span> demo
								</p>
								<p>
									<span>Password:</span> 996939
								</p>
							</div>
						</div>

						<Link
							to="/services/entertainment"
							className={`nav-link ${
								isActive("/services/entertainment") ? "active" : ""
							}`}
						>
							Demo Home Page
						</Link>
					</div>
				</div>

				<div className="dropdown">
					<a href="#guides" className="nav-link">
						Product Guides <MdKeyboardArrowDown />
					</a>
					<div className="dropdown-menu product">
						<Link
							to="#"
							className={`nav-link ${isActive("#") ? "active" : ""}`}
						>
							How to install Akara Insight
						</Link>
						<Link
							to="#"
							className={`nav-link ${isActive("#") ? "active" : ""}`}
						>
							How to use Akara Insight
						</Link>
					</div>
				</div>
			</nav>

			<div className="auth">
				<Link to={"/login"}>Login</Link>
				<button className="getbtn" onClick={getStarted}>
					{" "}
					Get Started
				</button>
			</div>

			<div className="menu-button" onClick={toggleMenu}>
				{menuOpen ? <CgClose /> : <CgMenuRight />}
			</div>

			<div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
				<Link
					to="/"
					className={`nav-link ${
						activeSection === "home" ? "mobileactive" : ""
					}`}
					onClick={scrollToTop}
				>
					Home
				</Link>
				<Link
					to="/about"
					className={`nav-link ${
						location.pathname === "/about" ? "mobileactive" : ""
					}`}
				>
					About
				</Link>
				<Link
					to="/contact"
					className={`nav-link ${
						location.pathname === "/contact" ? "mobileactive" : ""
					}`}
				>
					Contact
				</Link>
				<Link
					to="/blog"
					className={`nav-link ${isActive("/blog") ? "mobileactive" : ""}`}
				>
					Blog
				</Link>

				<div className="mobile-dropdown">
					<a
						href="#"
						className="nav-link"
						onClick={() => toggleDropdown("mobileLiveDemo")}
					>
						Live Demo <MdKeyboardArrowDown />
					</a>
					<div
						className={`mobile-dropdown-menu ${
							openDropdown === "mobileLiveDemo" ? "show" : ""
						}`}
					>
						<div className="mobiledemo">
							<h4>Login Details</h4>
							<Link
								to="/demo"
								className={`nav-link ${
									isActive("/demo") ? "mobileactive" : ""
								}`}
							>
								Demo Admin
							</Link>
							<div className="login-detail">
								<p>
									<span>Username:</span> demo
								</p>
								<p>
									<span>Password:</span> 996939
								</p>
							</div>
						</div>
						<Link
							to="/services/entertainment"
							className={`nav-link ${
								isActive("/services/entertainment") ? "mobileactive" : ""
							}`}
						>
							Demo Home Page
						</Link>
					</div>
				</div>

				<div className="mobile-dropdown">
					<a
						href="#"
						className="nav-link"
						onClick={() => toggleDropdown("mobileProductGuides")}
					>
						Product Guides <MdKeyboardArrowDown />
					</a>
					<div
						className={`mobile-dropdown-menu ${
							openDropdown === "mobileProductGuides" ? "show" : ""
						}`}
					>
						<Link
							to="/guides/tutorials"
							className={`nav-link ${
								isActive("/guides/tutorials") ? "mobileactive" : ""
							}`}
						>
							How to install Akara Insight
						</Link>
						<Link
							to="/guides/resources"
							className={`nav-link ${
								isActive("/guides/resources") ? "mobileactive" : ""
							}`}
						>
							How to use Akara Insight
						</Link>
					</div>
				</div>
				<div className="mobile-auth">
					<Link to={"/login"} className="loginbtn">
						Login
					</Link>
					<button className="mobile-getbtn" onClick={getStarted}>
						{" "}
						Get Started
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;

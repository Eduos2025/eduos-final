import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/main-site/Home";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/main-site/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/main-site/About";
import Blog from "./pages/main-site/Blog";
import BlogPost from "./pages/main-site/BlogPost";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import Newpage from "./pages/dashboard/Newpage";
import UserDashboardLayout from "./layouts/UserDashboardLayout";
import UserDashboard from "./pages/user-dashboard/Dashboard";
import BuyProduct from "./pages/user-dashboard/BuyProduct";

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/about" element={<About />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog/:title" element={<BlogPost />} />
				{/* Dashboard Routes */}
				<Route
					path="/dashboard"
					element={
						<DashboardLayout>
							<Dashboard />
						</DashboardLayout>
					}
				/>
				<Route
					path="/new"
					element={
						<DashboardLayout>
							<Newpage />
						</DashboardLayout>
					}
				/>

				{/* user dashboard  */}
				<Route
					path="/user/dashboard"
					element={
						<UserDashboardLayout>
							<UserDashboard />
						</UserDashboardLayout>
					}
				/>
				<Route
					path="/user/buy-product"
					element={
						<UserDashboardLayout>
							<BuyProduct />
						</UserDashboardLayout>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;

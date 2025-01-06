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
import routes from "./routes";

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route path={routes.home} element={<Home />} />
				<Route path={routes.contact} element={<Contact />} />
				<Route path={routes.login} element={<Login />} />
				<Route path={routes.register} element={<Register />} />
				<Route path={routes.about} element={<About />} />
				<Route path={routes.blog} element={<Blog />} />
				<Route path={routes.blogPost(":title")} element={<BlogPost />} />
				{/* Dashboard Routes */}
				<Route
					path={routes.dashboard}
					element={
						<DashboardLayout>
							<Dashboard />
						</DashboardLayout>
					}
				/>
				<Route
					path={routes.newPage}
					element={
						<DashboardLayout>
							<Newpage />
						</DashboardLayout>
					}
				/>
				{/* User Dashboard Routes */}
				<Route
					path={routes.userDashboard}
					element={
						<UserDashboardLayout>
							<UserDashboard />
						</UserDashboardLayout>
					}
				/>
				<Route
					path={routes.buyProduct}
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

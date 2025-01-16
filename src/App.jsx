import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import routes from "./routes";
import ScrollToTop from "./components/ScrollToTop";

// Main Site Pages
import Home from "./pages/main-site/Home";
import Contact from "./pages/main-site/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/main-site/About";
import Blog from "./pages/main-site/Blog";
import BlogPost from "./pages/main-site/BlogPost";

// Dashboard Pages
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Newpage from "./pages/dashboard/Newpage";

// User Dashboard Pages
import UserDashboardLayout from "./layouts/UserDashboardLayout";
import UserDashboard from "./pages/user-dashboard/Dashboard";
import BuyProduct from "./pages/user-dashboard/BuyProduct";
import ViewProduct from "./pages/user-dashboard/ViewProduct";
import OrderSummary from "./pages/user-dashboard/OrderSummary";
import PaymentSuccess from "./pages/user-dashboard/PaymentSuccess";
import Congrats from "./components/user-dashboard/Congrats";
import Notification from "./pages/user-dashboard/Notification";
import MyAccount from "./pages/user-dashboard/MyAccount";
import ResetPassword from "./pages/user-dashboard/ResetPassword";
import OurFeatures from "./pages/user-dashboard/OurFeatures";
import PricePlan from "./pages/user-dashboard/PricePlan";
import ProductHistory from "./pages/user-dashboard/ProductHistory";
import ManageRegProduct from "./pages/user-dashboard/ManageRegProduct";

const App = () => {
	const renderRoutesWithLayout = (Layout, routes) =>
		routes.map(({ path, element }, index) => (
			<Route key={index} path={path} element={<Layout>{element}</Layout>} />
		));

	return (
		<Router>
			<ScrollToTop />
			<Routes>
				{/* Main Site Routes */}
				<Route path={routes.home} element={<Home />} />
				<Route path={routes.contact} element={<Contact />} />
				<Route path={routes.login} element={<Login />} />
				<Route path={routes.register} element={<Register />} />
				<Route path={routes.about} element={<About />} />
				<Route path={routes.blog} element={<Blog />} />
				<Route path={routes.blogPost(":title")} element={<BlogPost />} />

				{/* Dashboard Routes */}
				{renderRoutesWithLayout(DashboardLayout, [
					{ path: routes.dashboard, element: <Dashboard /> },
					{ path: routes.newPage, element: <Newpage /> },
				])}

				{/* User Dashboard Routes */}
				{renderRoutesWithLayout(UserDashboardLayout, [
					{ path: routes.userDashboard, element: <UserDashboard /> },
					{ path: routes.buyProduct, element: <BuyProduct /> },
					{ path: routes.viewProduct, element: <ViewProduct /> },
					{ path: routes.orderSummary, element: <OrderSummary /> },
					{ path: routes.paymentSuccess, element: <PaymentSuccess /> },
					{ path: routes.Congrats, element: <Congrats /> },
					{ path: routes.userNotification, element: <Notification /> },
					{ path: routes.userMyAccount, element: <MyAccount /> },
					{ path: routes.userResetPassword, element: <ResetPassword /> },
					{ path: routes.ourFeatures, element: <OurFeatures /> },
					{ path: routes.pricePlan, element: <PricePlan /> },
					{ path: routes.productHistory, element: <ProductHistory /> },
					{ path: routes.ManageRegisteredProduct, element: <ManageRegProduct /> },
				])}
			</Routes>
		</Router>
	);
};

export default App;

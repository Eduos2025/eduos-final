// import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Button from "@mui/material/Button";
import routes from "../../routes";
import BreadcrumbCard from "../../components/user-dashboard/BreadcrumbCard";
import ProductGallery from "../../components/user-dashboard/ProductGallery";
const ViewProduct = () => {
   const breadcrumbLinks = [
			{ to: routes.userDashboard, icon: <FaHome />, label: "Dashboard" },
			{ to: routes.buyProduct, label: "Buy Product" },
			{ to: routes.viewProduct, label: "View Product" },
		];
	return (
		<div className="right-content w-100">
			<BreadcrumbCard title="View Product" breadcrumbLinks={breadcrumbLinks} />
			<div className="d-flex gap-3 main-container view-product">
				<ProductGallery />
				<div className="full-product-review">
					<h1>Complete School Management System</h1>
					<p>
						<span>product code:</span> #003222
					</p>
					<p>
						<span>Brand:</span> EDUOS
					</p>
					<p>
						<span>Secure with:</span> 90%
					</p>
					<div className="note">
						Buy our Multi-functional, self-installable and Effortlessly easy
						Educational portal, specially crafted for schools that are commited
						to progress
					</div>
					<Button variant="contained">Continue Order</Button>
				</div>
			</div>
		</div>
	);
};

export default ViewProduct;

// import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import routes from "../../routes";
import BreadcrumbCard from "../../components/user-dashboard/BreadcrumbCard";
const ViewProduct = () => {
   const breadcrumbLinks = [
			{ to: routes.userDashboard, icon: <FaHome />, label: "Dashboard" },
			{ to: routes.buyProduct, label: "Buy Product" },
			{ to: routes.viewProduct, label: "View Product" },
		];
	return (
		<div className="right-content w-100">
			<BreadcrumbCard title="View Product" breadcrumbLinks={breadcrumbLinks} />
		</div>
	);
};

export default ViewProduct;

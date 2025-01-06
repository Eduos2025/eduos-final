import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Button from "@mui/material/Button";
import routes from "../../routes";
const BuyProduct = () => {
	return (
		<div className="right-content w-100">
			<div className="card shadow border-0 w-100 p-3 justify-content-between">
				<h5>Buy Our Product</h5>
				<div className="bread-crumb">
					<div className="bread-crumb-links">
						<Link to={routes.userDashboard}>
							<FaHome /> Dashboard
						</Link>
						<span>/</span>
						<Link to={routes.buyProduct}>Buy Product</Link>
					</div>
				</div>
			</div>

			<div className="display-product w-100 shadow">
				<Link to={routes.veiwProduct}>
					<div className="product shadow">
						<img src="/sms.jpg" alt="school Management systwm" />
						<div className="product-detail">
							<h1>School Management System</h1>
							<p>
								Buy our multi-functional, self installable and ready to use
								school management system
							</p>
							<Button variant="contained">Buy Now</Button>
						</div>
					</div>
				</Link>

				{/* <div className="product shadow">
					<img src="/sms.jpg" alt="school Management systwm" />
					<div className="product-detail">
						<h1>School Management System</h1>
						<p>
							Buy our multi-functional, self installable and ready to use school
							management system
						</p>
						<Button variant="contained">Buy Now</Button>
					</div>
				</div>
				<div className="product shadow">
					<img src="/sms.jpg" alt="school Management systwm" />
					<div className="product-detail">
						<h1>School Management System</h1>
						<p>
							Buy our multi-functional, self installable and ready to use school
							management system
						</p>
						<Button variant="contained">Buy Now</Button>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default BuyProduct;

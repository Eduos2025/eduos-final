import { useState } from "react";
import BreadcrumbCard from "../../components/user-dashboard/BreadcrumbCard";
import routes from "../../routes";
import { FaHome } from "react-icons/fa";
import { Typography, TextField, Button } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { deepOrange} from '@mui/material/colors';

const MyAccount = () => {
	const [profilePic, setProfilePic] = useState(null);

	const handleProfilePicChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setProfilePic(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	const breadcrumbLinks = [
		{ to: routes.userDashboard, icon: <FaHome />, label: "Dashboard" },
		{ to: routes.userMyAccount, label: "My Account" },
	];

	return (
		<div className="right-content w-100">
			<BreadcrumbCard title="My Account" breadcrumbLinks={breadcrumbLinks} />
			<div className="main-container">
				<Typography variant="h6">Account Details</Typography>
				<form className="myAccountPage-form">
					<div className="myAccountPage-profilePic">
						<label className="myAccountPage-profilePicLabel">
							{profilePic ? (
								<img src={profilePic} alt="Profile Preview" />
							) : (
								<Avatar className="Profile-avatar" sx={{ bgcolor: deepOrange[500] }}>QE</Avatar>
							)}
							<input
								type="file"
								accept="image/*"
								className="myAccountPage-profilePicInput"
								onChange={handleProfilePicChange}
							/>
						</label>
						<Typography className="myAccountPage-profilePic-text">
							Click to upload a profile picture
						</Typography>
					</div>
					<TextField
						label="First Name"
						defaultValue="Queen"
						variant="outlined"
						fullWidth
						margin="normal"
                        className="input-field"
					/>
					<TextField
						label="Last Name"
						defaultValue="Ella"
						variant="outlined"
						fullWidth
						margin="normal"
                        className="input-field"
					/>
					<TextField
						label="Email Address"
						defaultValue="quennie@example.com"
						variant="outlined"
						fullWidth
						margin="normal"
                        className="input-field"
					/>
					<Button
						variant="contained"
						color="primary"
						className="myAccountPage-saveButton"
					>
						Save Changes
					</Button>
				</form>
			</div>
		</div>
	);
};

export default MyAccount;

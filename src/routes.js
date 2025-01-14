const routes = {
	home: "/",
	contact: "/contact",
	login: "/login",
	register: "/register",
	about: "/about",
	blog: "/blog",
	blogPost: (title) => `/blog/${title}`,
	dashboard: "/dashboard",
	newPage: "/new",
	userDashboard: "/user/dashboard",
	buyProduct: "/user/buy-product",
	viewProduct: "/user/view-product",
	orderSummary: "/user/payment-summary",
	paymentSuccess: "/user/payment-success",
	Congrats: "/user/congrats",
	userNotification: "/user/notification",
	userMyAccount: "/user/my-account",
	userResetPassword: "/user/reset-password",
	ourFeatures: "/user/our-features",
	pricePlan: "/user/price-plan",
};

export default routes;

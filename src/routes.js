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
    veiwProduct: "user/view-product",
};

export default routes;

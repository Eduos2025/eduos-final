import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GraduationCap, BookOpen, Landmark, UserRound } from "lucide-react";
import { toast } from "sonner";

type UserRole = "student" | "teacher" | "accountant" | "admin";

const PortalLogin = () => {
	const navigate = useNavigate();
	const [role, setRole] = useState<UserRole>("student");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// Default credentials for convenience/demo
	const defaultCredentials = {
		student: { email: "anas123@gmail.com", password: "123456" },
		teacher: { email: "teacher@example.com", password: "password" },
		accountant: { email: "amanbhai234@gmail.com", password: "0987654" },
		admin: { email: "stgcommunitydt@gmail.com", password: "9876543" }
	};

	useEffect(() => {
		const creds = defaultCredentials[role];
		setEmail(creds.email);
		setPassword(creds.password);
	}, [role]);

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		if (!email || !password) {
			toast.error("Please enter both email and password");
			return;
		}
		// Simulate login
		toast.success(`Logged in as ${role}`);
		navigate(`/${role}`);
	};

	const roleIcon = {
		student: <GraduationCap className="h-5 w-5" />,
		teacher: <BookOpen className="h-5 w-5" />,
		accountant: <Landmark className="h-5 w-5" />,
		admin: <UserRound className="h-5 w-5" />
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
			<div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
				<h2 className="text-center text-2xl font-semibold mb-6">Login to EDUOS</h2>
				<Tabs defaultValue="student" onValueChange={(val) => setRole(val as UserRole)}>
					<TabsList className="grid grid-cols-4 mb-4">
						{(["student", "teacher", "accountant", "admin"] as UserRole[]).map((r) => (
							<TabsTrigger key={r} value={r} className="flex flex-col items-center text-xs">
								{roleIcon[r]}
								<span className="capitalize mt-1">{r}</span>
							</TabsTrigger>
						))}
					</TabsList>

					<TabsContent value={role}>
						<form onSubmit={handleLogin} className="space-y-4">
							<div>
								<Label htmlFor="email">Email or Username</Label>
								<Input
									id="email"
									type="text"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Enter your email or username"
								/>
							</div>
							<div>
								<Label htmlFor="password">Password</Label>
								<Input
									id="password"
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									placeholder="Enter your password"
								/>
							</div>
							<Button type="submit" className="w-full">
								Login as {role.charAt(0).toUpperCase() + role.slice(1)}
							</Button>
						</form>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
};

export default PortalLogin;

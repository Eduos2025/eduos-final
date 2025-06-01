import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff, Lock, User, UserRound, BookOpen, Landmark, GraduationCap, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';

const PortalLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeRole, setActiveRole] = useState('student');

  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [isSubmittingReset, setIsSubmittingReset] = useState(false);

  const isSchoolPortal = location.pathname.includes('/school-management/portal');

  const getDefaultCredentials = (role) => {
    switch (role) {
      case 'student':
        return { email: 'anas123@gmail.com', password: '123456' };
      case 'admin':
        return { email: 'stgcommunitydt@gmail.com', password: '9876543' };
      case 'teacher':
        return { email: 'teacher@example.com', password: 'password' };
      case 'accountant':
        return { email: 'amanbhai234@gmail.com', password: '0987654' };
      default:
        return { email: '', password: '' };
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error('Please enter your email or username');
      return;
    }

    if (!password.trim()) {
      toast.error('Please enter your password');
      return;
    }

    setIsLoading(true);
    try {
      await login(email, password, activeRole);
      toast.success(`Logged in successfully as ${activeRole}`);
      navigate(`/${activeRole}`);
    } catch (error) {
      console.error('Login failed:', error);
      toast.error('Invalid credentials. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();

    if (!forgotEmail.trim()) {
      toast.error('Please enter your email address');
      return;
    }

    setIsSubmittingReset(true);
    try {
      setTimeout(() => {
        toast.success('Password reset email sent', {
          description: 'If an account exists with this email, you will receive instructions.',
        });
        setShowForgotPassword(false);
        setForgotEmail('');
      }, 1500);
    } catch (error) {
      toast.error('Failed to send reset email. Please try again.');
    } finally {
      setIsSubmittingReset(false);
    }
  };

  useEffect(() => {
    const defaultCreds = getDefaultCredentials(activeRole);
    setEmail(defaultCreds.email);
    setPassword(defaultCreds.password);
  }, [activeRole]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case 'student':
        return <GraduationCap className="h-5 w-5" />;
      case 'teacher':
        return <BookOpen className="h-5 w-5" />;
      case 'accountant':
        return <Landmark className="h-5 w-5" />;
      case 'admin':
        return <UserRound className="h-5 w-5" />;
      default:
        return <User className="h-5 w-5" />;
    }
  };

  const renderForgotPasswordForm = () => (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full max-w-md"
    >
      <Card className="shadow-lg border-gray-100">
        <CardHeader className="space-y-1">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={() => setShowForgotPassword(false)}>
              <ArrowLeft size={18} />
            </Button>
            <CardTitle className="text-2xl">Reset Password</CardTitle>
          </div>
          <CardDescription>
            Enter your email address and we'll send a reset link.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
            <motion.div className="space-y-2" variants={itemVariants}>
              <Label htmlFor="forgotEmail">Email</Label>
              <div className="relative">
                <Input
                  id="forgotEmail"
                  type="email"
                  placeholder="Enter your email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  disabled={isSubmittingReset}
                  className="pl-10"
                />
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button type="submit" className="w-full" disabled={isSubmittingReset}>
                {isSubmittingReset ? 'Sending...' : 'Send Reset Link'}
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );

  const renderLoginForm = () => (
    <form onSubmit={handleLogin} className="space-y-4">
      <motion.div className="space-y-2" variants={itemVariants}>
        <Label htmlFor="email">Email or Username</Label>
        <div className="relative">
          <Input
            id="email"
            type="text"
            placeholder="Enter your email or username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="pl-10"
          />
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
        </div>
      </motion.div>

      <motion.div className="space-y-2" variants={itemVariants}>
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            className="pl-10 pr-10"
          />
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Logging in...' : `Login as ${activeRole}`}
        </Button>
      </motion.div>

      <motion.div className="text-center mt-4" variants={itemVariants}>
        <button
          type="button"
          onClick={() => setShowForgotPassword(true)}
          className="text-sm text-blue-600 hover:underline"
        >
          Forgot Password?
        </button>
      </motion.div>
    </form>
  );

  if (showForgotPassword) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white p-4">
        {renderForgotPasswordForm()}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-md"
      >
        <Card className="shadow-lg border-gray-100">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl text-center">Portal Login</CardTitle>
            <CardDescription className="text-center">
              Access your {activeRole} portal
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="student" onValueChange={setActiveRole} className="w-full">
              <TabsList className="grid grid-cols-4">
                {['student', 'teacher', 'accountant', 'admin'].map((role) => (
                  <TabsTrigger key={role} value={role}>
                    {getRoleIcon(role)}
                  </TabsTrigger>
                ))}
              </TabsList>
              {['student', 'teacher', 'accountant', 'admin'].map((role) => (
                <TabsContent key={role} value={role}>
                  {renderLoginForm()}
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
          <CardFooter className="text-center text-xs text-muted-foreground justify-center">
            &copy; {new Date().getFullYear()} All rights reserved.
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default PortalLogin;

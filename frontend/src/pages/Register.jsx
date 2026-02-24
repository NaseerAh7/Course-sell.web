import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Lock, Eye, EyeOff, User, ArrowRight, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import { toast } from 'sonner';

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    terms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register attempt:', formData);
    toast.success('Registration functionality is for demo purposes only');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const passwordStrength = () => {
    const password = formData.password;
    if (password.length === 0) return { level: 0, text: '', color: '' };
    if (password.length < 6) return { level: 1, text: 'Weak', color: 'bg-red-500' };
    if (password.length < 10) return { level: 2, text: 'Medium', color: 'bg-amber-500' };
    return { level: 3, text: 'Strong', color: 'bg-green-500' };
  };

  const strength = passwordStrength();

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4 py-24" data-testid="register-page">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1746470427577-3520a681deab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBmdXR1cmUlMjBibHVlJTIwcHVycGxlfGVufDB8fHx8MTc3MTk2MDUwNHww&ixlib=rb-4.1.0&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-zinc-950/80" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
      </div>

      {/* Register Card */}
      <div className="relative w-full max-w-md">
        <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center gap-2 mb-8">
            <div className="p-2 rounded-xl bg-purple-600/20">
              <BookOpen className="h-6 w-6 text-purple-400" />
            </div>
            <span className="font-heading text-2xl font-bold text-white">
              Course<span className="text-purple-400">Hub</span>
            </span>
          </Link>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-heading text-2xl font-bold text-white mb-2" data-testid="register-title">
              Create Your Account
            </h1>
            <p className="text-zinc-400">Start your learning journey today</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-zinc-300">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-10 bg-zinc-900/50 border-zinc-800 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 text-white placeholder:text-zinc-600 h-12"
                  data-testid="register-name-input"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-zinc-300">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10 bg-zinc-900/50 border-zinc-800 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 text-white placeholder:text-zinc-600 h-12"
                  data-testid="register-email-input"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-zinc-300">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  className="pl-10 pr-10 bg-zinc-900/50 border-zinc-800 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 text-white placeholder:text-zinc-600 h-12"
                  data-testid="register-password-input"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {/* Password Strength */}
              {formData.password && (
                <div className="space-y-2">
                  <div className="flex gap-1">
                    {[1, 2, 3].map((level) => (
                      <div 
                        key={level}
                        className={`h-1 flex-1 rounded-full transition-colors ${
                          level <= strength.level ? strength.color : 'bg-zinc-800'
                        }`}
                      />
                    ))}
                  </div>
                  <p className={`text-xs ${
                    strength.level === 1 ? 'text-red-400' :
                    strength.level === 2 ? 'text-amber-400' :
                    'text-green-400'
                  }`}>
                    Password strength: {strength.text}
                  </p>
                </div>
              )}
            </div>

            {/* Terms */}
            <div className="flex items-start space-x-2">
              <Checkbox 
                id="terms"
                checked={formData.terms}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, terms: checked }))}
                className="border-zinc-700 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600 mt-0.5"
                data-testid="register-terms-checkbox"
              />
              <label 
                htmlFor="terms" 
                className="text-sm text-zinc-400 cursor-pointer leading-tight"
              >
                I agree to the{' '}
                <a href="#" className="text-purple-400 hover:text-purple-300">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-purple-400 hover:text-purple-300">Privacy Policy</a>
              </label>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_-5px_rgba(139,92,246,0.5)] hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.6)] transition-all hover:scale-[1.02] active:scale-[0.98] h-12 text-base"
              data-testid="register-submit-btn"
            >
              Create Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>

          {/* Features */}
          <div className="mt-8 pt-6 border-t border-zinc-800">
            <p className="text-zinc-500 text-sm mb-4">What you'll get:</p>
            <div className="space-y-3">
              {[
                'Access to 200+ expert-led courses',
                'Certificates upon completion',
                'Community access & support'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-purple-600/20 flex items-center justify-center">
                    <Check className="h-3 w-3 text-purple-400" />
                  </div>
                  <span className="text-zinc-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Login Link */}
          <p className="text-center text-zinc-400 mt-8">
            Already have an account?{' '}
            <Link to="/login" className="text-purple-400 hover:text-purple-300 font-medium" data-testid="register-login-link">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

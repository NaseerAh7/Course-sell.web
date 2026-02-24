import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/courses', label: 'Courses' },
    { path: '/dashboard', label: 'Dashboard' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-white/10"
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
            data-testid="navbar-logo"
          >
            <div className="p-2 rounded-xl bg-purple-600/20 group-hover:bg-purple-600/30 transition-colors">
              <BookOpen className="h-5 w-5 text-purple-400" />
            </div>
            <span className="font-heading text-xl font-bold text-white">
              Course<span className="text-purple-400">Hub</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'text-white bg-white/10'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login" data-testid="nav-login-btn">
              <Button variant="ghost" className="text-zinc-300 hover:text-white hover:bg-zinc-800">
                Login
              </Button>
            </Link>
            <Link to="/register" data-testid="nav-register-btn">
              <Button className="bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_15px_-3px_rgba(139,92,246,0.4)]">
                Get Started
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-zinc-300"
                  data-testid="mobile-menu-toggle"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[280px] bg-zinc-950 border-zinc-800 p-0"
              >
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-zinc-800">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-purple-600/20">
                        <BookOpen className="h-5 w-5 text-purple-400" />
                      </div>
                      <span className="font-heading text-xl font-bold text-white">
                        Course<span className="text-purple-400">Hub</span>
                      </span>
                    </div>
                  </div>

                  <nav className="flex-1 p-4">
                    <div className="space-y-1">
                      {navLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                          className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all ${
                            isActive(link.path)
                              ? 'text-white bg-purple-600/20 border border-purple-500/30'
                              : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </nav>

                  <div className="p-4 border-t border-zinc-800 space-y-3">
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <Button 
                        variant="outline" 
                        className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                        data-testid="mobile-login-btn"
                      >
                        Login
                      </Button>
                    </Link>
                    <Link to="/register" onClick={() => setIsOpen(false)}>
                      <Button 
                        className="w-full bg-purple-600 hover:bg-purple-500 text-white"
                        data-testid="mobile-register-btn"
                      >
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

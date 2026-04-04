import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Home } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Search', href: '/search' },
    { name: 'Sell', href: '/sell' },
    { name: 'Neighborhoods', href: '/neighborhoods' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-brand-600 p-2 rounded-lg group-hover:bg-brand-700 transition-colors">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-xl font-display font-bold leading-none tracking-tight",
                isScrolled ? "text-slate-900" : "text-white"
              )}>
                Best Move
              </span>
              <span className={cn(
                "text-[10px] font-medium uppercase tracking-[0.2em]",
                isScrolled ? "text-brand-600" : "text-brand-200"
              )}>
                Lifetime Realty
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-brand-500',
                  isScrolled ? 'text-slate-600' : 'text-white/90',
                  location.pathname === link.href && 'text-brand-600 font-bold'
                )}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:718-555-0123" className="flex items-center space-x-2">
              <Button variant={isScrolled ? "primary" : "outline"} size="sm" className={cn(!isScrolled && "text-white border-white hover:bg-white/10")}>
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md",
                isScrolled ? "text-slate-900" : "text-white"
              )}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium',
                  location.pathname === link.href
                    ? 'bg-brand-50 text-brand-600'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-brand-600'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-slate-100">
              <a href="tel:718-555-0123" className="block px-3 py-2">
                <Button className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  718-555-0123
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

import { Link } from 'react-router-dom';
import { Home, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-brand-600 p-2 rounded-lg">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-white leading-none tracking-tight">
                  Best Move
                </span>
                <span className="text-[10px] font-medium text-brand-400 uppercase tracking-[0.2em]">
                  Lifetime Realty
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Your lifetime partners in Bronx real estate. Dedicated to providing expert guidance, 
              local knowledge, and personalized service to every client.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-400 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/search" className="hover:text-brand-400 transition-colors">Search Listings</Link></li>
              <li><Link to="/sell" className="hover:text-brand-400 transition-colors">Sell Your Home</Link></li>
              <li><Link to="/neighborhoods" className="hover:text-brand-400 transition-colors">Neighborhood Guides</Link></li>
              <li><Link to="/about" className="hover:text-brand-400 transition-colors">About Lloyd & Beverley</Link></li>
              <li><Link to="/contact" className="hover:text-brand-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-display font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-500 shrink-0" />
                <span>3532 Paulding Avenue<br />Bronx, NY 10469</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                <a href="tel:718-555-0123" className="hover:text-brand-400 transition-colors">718-555-0123</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                <a href="mailto:info@bestmovelifetime.com" className="hover:text-brand-400 transition-colors">info@bestmovelifetime.com</a>
              </li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h3 className="text-white font-display font-semibold mb-6">NYS Compliance</h3>
            <div className="space-y-4 text-xs">
              <p>Lloyd Ferguson: Licensed Tradename Broker</p>
              <p>Beverley Ferguson: Licensed Real Estate Salesperson</p>
              <div className="pt-2 space-y-2">
                <a href="#" className="block hover:text-brand-400 underline transition-colors">NYS Standard Operating Procedure (SOP)</a>
                <a href="#" className="block hover:text-brand-400 underline transition-colors">Fair Housing Notice</a>
                <a href="#" className="block hover:text-brand-400 underline transition-colors">Agency Disclosure</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs">
          <p>© 2026 Best Move Lifetime Realty. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

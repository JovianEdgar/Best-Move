import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1920"
          alt="Bronx Real Estate"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.1]">
              Your Lifetime Partners in <br />
              <span className="text-brand-400">Bronx Real Estate</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-medium">
              Expert guidance, local expertise, and a commitment to your future. 
              Find your perfect home in the Bronx today.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-2">
            <div className="flex-1 flex items-center px-4 w-full">
              <Search className="w-5 h-5 text-slate-400 mr-3" />
              <input
                type="text"
                placeholder="Search by neighborhood, zip, or address..."
                className="w-full py-3 text-slate-900 focus:outline-none font-medium"
              />
            </div>
            <div className="h-10 w-px bg-slate-100 hidden md:block" />
            <div className="flex items-center px-4 w-full md:w-auto">
              <Home className="w-5 h-5 text-slate-400 mr-3" />
              <select className="bg-transparent py-3 text-slate-900 focus:outline-none font-medium appearance-none cursor-pointer pr-8">
                <option>All Types</option>
                <option>Single Family</option>
                <option>Multi Family</option>
                <option>Condo/Co-op</option>
              </select>
            </div>
            <Button className="w-full md:w-auto px-8 py-4 rounded-xl">
              Search Now
            </Button>
          </div>

          {/* Quick Stats/Trust Signals */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8">
            {[
              { label: 'Active Listings', value: '150+' },
              { label: 'Years Experience', value: '25+' },
              { label: 'Homes Sold', value: '500+' },
              { label: 'Happy Clients', value: '100%' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="text-white"
              >
                <div className="text-2xl md:text-3xl font-display font-bold">{stat.value}</div>
                <div className="text-xs md:text-sm text-slate-300 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

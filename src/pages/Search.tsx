import { useState, useEffect } from 'react';
import { MOCK_LISTINGS } from '../constants';
import { Search as SearchIcon, Filter, Map as MapIcon, List, ChevronDown, X, Mail } from 'lucide-react';
import { Button } from '../components/ui/Button';
import FeaturedListings from '../components/home/FeaturedListings';
import MortgageCalculator from '../components/shared/MortgageCalculator';
import { motion, AnimatePresence } from 'motion/react';

export default function Search() {
  const [view, setView] = useState<'list' | 'map'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCalculator, setShowCalculator] = useState(false);
  const [showLeadModal, setShowLeadModal] = useState(false);

  useEffect(() => {
    // Simulate forced registration after 5 seconds
    const timer = setTimeout(() => {
      setShowLeadModal(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="pt-24 min-h-screen bg-slate-50">
      {/* Lead Capture Modal */}
      <AnimatePresence>
        {showLeadModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLeadModal(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[2.5rem] shadow-2xl max-w-lg w-full overflow-hidden"
            >
              <button 
                onClick={() => setShowLeadModal(false)}
                className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-slate-400" />
              </button>
              
              <div className="p-10 space-y-8">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 mb-2">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-slate-900">Save Your Search</h3>
                  <p className="text-slate-600">
                    Get instant alerts when new homes in the Bronx hit the market. 
                    Don't miss out on your lifetime home!
                  </p>
                </div>

                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all font-medium"
                  />
                  <Button className="w-full py-4 rounded-2xl text-lg shadow-lg shadow-brand-500/20">
                    Get Market Alerts
                  </Button>
                </form>

                <p className="text-center text-xs text-slate-400">
                  By signing up, you agree to our Terms of Service and Privacy Policy. 
                  We respect your privacy and will never spam you.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Search Header */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Neighborhood, Zip, or Address..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2 w-full lg:w-auto">
              <Button 
                variant={showCalculator ? "primary" : "outline"} 
                size="sm" 
                onClick={() => setShowCalculator(!showCalculator)}
                className="flex-1 lg:flex-none"
              >
                Mortgage Calc
              </Button>
              <Button variant="outline" size="sm" className="flex-1 lg:flex-none">
                Price <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="sm" className="flex-1 lg:flex-none">
                Beds/Baths <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="secondary" size="sm" className="flex-1 lg:flex-none">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>

            <div className="flex bg-slate-100 p-1 rounded-xl w-full lg:w-auto">
              <button
                onClick={() => setView('list')}
                className={`flex-1 lg:flex-none flex items-center justify-center px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  view === 'list' ? 'bg-white text-brand-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <List className="w-4 h-4 mr-2" />
                List
              </button>
              <button
                onClick={() => setView('map')}
                className={`flex-1 lg:flex-none flex items-center justify-center px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  view === 'map' ? 'bg-white text-brand-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <MapIcon className="w-4 h-4 mr-2" />
                Map
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className={showCalculator ? "lg:col-span-8" : "lg:col-span-12"}>
            {view === 'list' ? (
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-display font-bold text-slate-900">
                    {MOCK_LISTINGS.length} Properties Found in the Bronx
                  </h2>
                  <div className="flex items-center text-sm text-slate-500">
                    Sort by: 
                    <select className="bg-transparent font-bold text-slate-900 ml-2 focus:outline-none cursor-pointer">
                      <option>Newest First</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                    </select>
                  </div>
                </div>
                <FeaturedListings listings={MOCK_LISTINGS} />
              </div>
            ) : (
              <div className="h-[600px] bg-slate-200 rounded-3xl overflow-hidden relative border border-slate-300 shadow-inner">
                <div className="absolute inset-0 flex items-center justify-center text-slate-500 flex-col space-y-4">
                  <MapIcon className="w-12 h-12 opacity-20" />
                  <p className="font-medium">Interactive Map View Loading...</p>
                  <p className="text-xs max-w-xs text-center opacity-60">
                    In a production environment, this would integrate with Google Maps or Mapbox 
                    to show real-time Bronx property locations.
                  </p>
                </div>
                {/* Mock Markers */}
                <div className="absolute top-1/4 left-1/3 bg-brand-600 text-white px-3 py-1.5 rounded-full font-bold text-sm shadow-lg cursor-pointer hover:scale-110 transition-transform">
                  $649K
                </div>
                <div className="absolute top-1/2 left-1/2 bg-brand-600 text-white px-3 py-1.5 rounded-full font-bold text-sm shadow-lg cursor-pointer hover:scale-110 transition-transform">
                  $825K
                </div>
                <div className="absolute bottom-1/3 right-1/4 bg-brand-600 text-white px-3 py-1.5 rounded-full font-bold text-sm shadow-lg cursor-pointer hover:scale-110 transition-transform">
                  $599K
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Calculator */}
          {showCalculator && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-4"
            >
              <div className="sticky top-44">
                <MortgageCalculator />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}


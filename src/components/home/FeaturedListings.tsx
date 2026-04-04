import { Listing } from '@/src/types/listing';
import { Bed, Bath, Square, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface FeaturedListingsProps {
  listings: Listing[];
}

export default function FeaturedListings({ listings }: FeaturedListingsProps) {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 space-y-4 md:space-y-0">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              Featured Bronx Listings
            </h2>
            <p className="text-slate-600 max-w-xl">
              Hand-picked properties in the most desirable Bronx neighborhoods. 
              Explore our current inventory of premium homes.
            </p>
          </div>
          <Link to="/search">
            <Button variant="outline" className="group">
              View All Listings
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing, index) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={listing.imageUrl}
                  alt={listing.address}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {listing.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {listing.type}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/80 to-transparent p-6">
                  <p className="text-2xl font-display font-bold text-white">
                    ${listing.price.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {listing.address}
                  </h3>
                  <div className="flex items-center text-slate-500 text-sm">
                    <MapPin className="w-4 h-4 mr-1 text-brand-500" />
                    {listing.neighborhood}, Bronx
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-50">
                  <div className="flex flex-col items-center">
                    <Bed className="w-5 h-5 text-slate-400 mb-1" />
                    <span className="text-sm font-bold text-slate-900">{listing.beds} Beds</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Bath className="w-5 h-5 text-slate-400 mb-1" />
                    <span className="text-sm font-bold text-slate-900">{listing.baths} Baths</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Square className="w-5 h-5 text-slate-400 mb-1" />
                    <span className="text-sm font-bold text-slate-900">{listing.sqft} SqFt</span>
                  </div>
                </div>

                <Button className="w-full rounded-xl">View Details</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

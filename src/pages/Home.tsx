import Hero from '../components/home/Hero';
import FeaturedListings from '../components/home/FeaturedListings';
import Testimonials from '../components/home/Testimonials';
import LeadForm from '../components/shared/LeadForm';
import { MOCK_LISTINGS } from '../constants';
import { motion } from 'motion/react';
import { Shield, Users, Map, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <Hero />
      
      <FeaturedListings listings={MOCK_LISTINGS} />

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                  Experience the Difference of <br />
                  <span className="text-brand-600">Local Bronx Expertise</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Lloyd and Beverley Ferguson aren't just real estate agents; they are your 
                  neighbors and lifetime partners in building wealth through real estate in the Bronx.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: 'Licensed Experts', desc: 'NYS Licensed Broker & Salesperson with decades of experience.' },
                  { icon: Users, title: 'Personalized Service', desc: 'We treat every client like family, ensuring your goals are met.' },
                  { icon: Map, title: 'Neighborhood Pros', desc: 'Deep knowledge of Williamsbridge, Pelham Gardens, and more.' },
                  { icon: TrendingUp, title: 'Market Strategy', desc: 'Data-driven marketing to get you the best price for your home.' },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex space-x-4"
                  >
                    <div className="bg-brand-50 p-3 rounded-xl h-fit">
                      <item.icon className="w-6 h-6 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
                  alt="Modern Bronx Home"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-600 text-white p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-4xl font-display font-bold mb-1">25+</p>
                <p className="text-sm font-medium uppercase tracking-widest text-brand-100">Years in the Bronx</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Contact CTA Section */}
      <section className="py-24 bg-brand-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-400 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-white">
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
                Ready to find your <br />
                <span className="text-brand-400">lifetime home?</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                Whether you're buying, selling, or just curious about the Bronx market, 
                we're here to help. Reach out today for a free consultation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-brand-800 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-brand-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Office Location</p>
                    <p className="text-lg font-medium">3532 Paulding Avenue, Bronx, NY</p>
                  </div>
                </div>
              </div>
            </div>

            <LeadForm />
          </div>
        </div>
      </section>
    </main>
  );
}

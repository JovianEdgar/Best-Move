import { MapPin, ArrowRight, Info, Home, School, ShoppingBag } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion } from 'motion/react';

const neighborhoods = [
  {
    name: 'Williamsbridge',
    desc: 'A vibrant community with a mix of residential charm and urban convenience. Home to our main office.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    stats: { price: '$550K+', type: 'Single/Multi Family', vibe: 'Residential' }
  },
  {
    name: 'Pelham Gardens',
    desc: 'Known for its quiet streets, well-maintained lawns, and strong sense of community.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    stats: { price: '$700K+', type: 'Single Family', vibe: 'Suburban' }
  },
  {
    name: 'Morris Park',
    desc: 'A historic neighborhood famous for its Italian heritage and proximity to major hospitals.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
    stats: { price: '$600K+', type: 'Single/Multi Family', vibe: 'Historic' }
  },
  {
    name: 'City Island',
    desc: 'A unique nautical community that feels like a New England fishing village in the Bronx.',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=800',
    stats: { price: '$850K+', type: 'Waterfront', vibe: 'Nautical' }
  },
];

export default function Neighborhoods() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="bg-brand-950 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
            Bronx Neighborhood <span className="text-brand-400">Guides</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discover the unique character, market trends, and hidden gems of the neighborhoods we serve. 
            Find the area that fits your lifestyle.
          </p>
        </div>
      </section>

      {/* Neighborhood Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {neighborhoods.map((area, i) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 shadow-lg">
                  <img
                    src={area.image}
                    alt={area.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-display font-bold text-white">{area.name}</h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">{area.desc}</p>
                  <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-100">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Avg Price</p>
                      <p className="font-bold text-slate-900">{area.stats.price}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Home Type</p>
                      <p className="font-bold text-slate-900">{area.stats.type}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Vibe</p>
                      <p className="font-bold text-slate-900">{area.stats.vibe}</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="group/btn p-0 hover:bg-transparent hover:text-brand-600">
                    Explore {area.name}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Insights Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 leading-tight">
                  Why We Love <br />
                  <span className="text-brand-600">The Bronx</span>
                </h2>
                <div className="space-y-6">
                  {[
                    { icon: School, title: 'Top-Tier Education', desc: 'Home to prestigious institutions like Fordham University and the Bronx High School of Science.' },
                    { icon: ShoppingBag, title: 'Cultural Hubs', desc: 'From the world-famous Bronx Zoo to the historic Arthur Avenue, there is always something to explore.' },
                    { icon: Home, title: 'Diverse Housing', desc: 'Whether you want a modern condo or a historic Victorian, the Bronx has it all.' },
                  ].map((item) => (
                    <div key={item.title} className="flex space-x-4">
                      <div className="bg-brand-50 p-3 rounded-xl h-fit">
                        <item.icon className="w-6 h-6 text-brand-600" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-slate-900">{item.title}</h4>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1000"
                    alt="Bronx Culture"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import { DollarSign, Home, TrendingUp, Search, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import LeadForm from '../components/shared/LeadForm';
import { motion } from 'motion/react';

export default function Sell() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1920"
            alt="Real Estate Selling"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-white">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
                  Maximize Your <br />
                  <span className="text-brand-400">Home's Value</span>
                </h1>
                <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
                  Selling your Bronx home is a major financial decision. Lloyd and Beverley 
                  provide the expert marketing and local insight needed to get you the highest price.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-xl">
                  What's My Home Worth?
                </Button>
                <Button variant="outline" size="lg" className="rounded-xl text-white border-white hover:bg-white/10">
                  Our Marketing Plan
                </Button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-display font-bold text-white mb-6">Instant Valuation Request</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Property Address"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-brand-400 transition-all"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Beds"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-brand-400 transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Baths"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-brand-400 transition-all"
                  />
                </div>
                <Button className="w-full py-4 rounded-xl">Get My Free Report</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Selling Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              Our 4-Step Selling Strategy
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We combine traditional expertise with modern digital marketing to ensure your home 
              stands out in the Bronx market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Valuation', desc: 'Detailed market analysis to price your home correctly from day one.' },
              { step: '02', title: 'Staging', desc: 'Professional staging tips and photography to make your home shine.' },
              { step: '03', title: 'Marketing', desc: 'Targeted social media ads and premium MLS placement.' },
              { step: '04', title: 'Closing', desc: 'Expert negotiation and guidance through the entire closing process.' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-brand-200 transition-colors group"
              >
                <span className="text-4xl font-display font-bold text-brand-100 group-hover:text-brand-200 transition-colors">
                  {item.step}
                </span>
                <h4 className="text-xl font-display font-bold text-slate-900 mt-4 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 leading-tight">
                Ready to see what your <br />
                <span className="text-brand-600">home is worth?</span>
              </h2>
              <ul className="space-y-4">
                {[
                  'Free Professional Market Analysis',
                  'Custom Marketing Strategy Session',
                  'Staging & Curb Appeal Consultation',
                  'No Obligation, Just Expert Advice',
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-600" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>
    </main>
  );
}

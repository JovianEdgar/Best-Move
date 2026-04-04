import { Shield, Award, Users, Heart, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-tight">
                  Meet Lloyd & <br />
                  <span className="text-brand-600">Beverley Ferguson</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                  With over 25 years of combined experience in the Bronx real estate market, 
                  we've built our reputation on trust, integrity, and exceptional results.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="space-y-1">
                  <p className="text-2xl font-display font-bold text-slate-900">Lloyd Ferguson</p>
                  <p className="text-sm font-bold text-brand-600 uppercase tracking-widest">Tradename Broker</p>
                  <p className="text-xs text-slate-500">NYS License #1049120XXXX</p>
                </div>
                <div className="h-12 w-px bg-slate-200 hidden sm:block" />
                <div className="space-y-1">
                  <p className="text-2xl font-display font-bold text-slate-900">Beverley Ferguson</p>
                  <p className="text-sm font-bold text-brand-600 uppercase tracking-widest">Licensed Salesperson</p>
                  <p className="text-xs text-slate-500">NYS License #1040120XXXX</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000"
                  alt="Lloyd and Beverley Ferguson"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-brand-50 p-3 rounded-xl">
                    <Award className="w-8 h-8 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-slate-900">Top Producers</p>
                    <p className="text-sm text-slate-500">Bronx Real Estate Board</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              "To empower Bronx families through real estate ownership, providing expert guidance 
              that turns a house into a lifetime home and a property into a legacy."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: 'Integrity First', desc: 'We operate with complete transparency and honesty in every transaction.' },
              { icon: Heart, title: 'Community Focused', desc: 'We live and work in the Bronx, and we are deeply invested in its growth.' },
              { icon: Users, title: 'Lifetime Partners', desc: 'Our relationship doesn\'t end at closing; we are your real estate partners for life.' },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 mb-2">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1449156001935-d2863fb22690?auto=format&fit=crop&q=80&w=1000"
                  alt="Bronx Neighborhood"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight">
                A Legacy of Service <br />
                <span className="text-brand-400">on Paulding Avenue</span>
              </h2>
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                  Best Move Lifetime Realty was founded on the principle that real estate is 
                  about more than just buildings—it's about people and their futures. 
                  Our office at 3532 Paulding Avenue has been a staple of the community for years.
                </p>
                <p>
                  Lloyd Ferguson, as a Tradename Broker, brings a wealth of knowledge in 
                  property valuation and market trends. Beverley Ferguson, a Licensed 
                  Salesperson, is known for her tireless dedication to her clients' needs 
                   and her sharp eye for detail.
                </p>
              </div>
              <ul className="space-y-3">
                {['NYS Licensed Professionals', 'Bronx Real Estate Board Members', 'Community Advocates', 'Expert Negotiators'].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-400" />
                    <span className="font-medium text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/Button';
import LeadForm from '../components/shared/LeadForm';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-tight">
                  Let's Talk <br />
                  <span className="text-brand-600">Real Estate</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                  Have a question about a listing? Want to know what your home is worth? 
                  We're just a call or message away.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-brand-600">
                    <Phone className="w-5 h-5" />
                    <span className="font-bold uppercase tracking-widest text-xs">Call Us</span>
                  </div>
                  <p className="text-2xl font-display font-bold text-slate-900">718-555-0123</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-brand-600">
                    <Mail className="w-5 h-5" />
                    <span className="font-bold uppercase tracking-widest text-xs">Email Us</span>
                  </div>
                  <p className="text-2xl font-display font-bold text-slate-900">info@bestmove.com</p>
                </div>
              </div>

              <div className="p-8 bg-white rounded-3xl border border-slate-200 space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-brand-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-display font-bold text-slate-900">Our Office</p>
                    <p className="text-slate-600">3532 Paulding Avenue, Bronx, NY 10469</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-brand-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-display font-bold text-slate-900">Business Hours</p>
                    <p className="text-slate-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-600">Sat: 10:00 AM - 4:00 PM</p>
                    <p className="text-slate-600">Sun: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            <LeadForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[500px] bg-slate-100 rounded-[3rem] overflow-hidden relative border border-slate-200 shadow-inner">
            {/* Mock Map Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-40 grayscale" />
            
            {/* Map Overlay/Marker */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 15 }}
                className="relative"
              >
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 bg-white px-6 py-4 rounded-2xl shadow-2xl border border-slate-100 w-64 text-center">
                  <p className="font-display font-bold text-slate-900">Best Move Lifetime Realty</p>
                  <p className="text-xs text-slate-500 mt-1">3532 Paulding Avenue</p>
                  <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-slate-100" />
                </div>
                <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white animate-bounce">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            </div>

            {/* Map Controls Mock */}
            <div className="absolute bottom-8 right-8 flex flex-col space-y-2">
              <div className="bg-white p-2 rounded-lg shadow-lg border border-slate-200">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-lg border-b border-slate-100">+</div>
                <div className="w-8 h-8 flex items-center justify-center font-bold text-lg">-</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-24 bg-brand-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <MessageSquare className="w-12 h-12 mx-auto opacity-50" />
          <h2 className="text-3xl md:text-4xl font-display font-bold">Have more questions?</h2>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto">
            We've helped hundreds of families navigate the Bronx real estate market. 
            No question is too small.
          </p>
          <Button variant="secondary" size="lg" className="rounded-xl">
            View Our FAQ
          </Button>
        </div>
      </section>
    </main>
  );
}

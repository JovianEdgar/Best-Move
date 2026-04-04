import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    text: 'Lloyd and Beverley were incredible. They helped us find our dream home in Pelham Gardens and negotiated a price we never thought possible.',
    rating: 5,
    location: 'Pelham Gardens',
  },
  {
    id: '2',
    name: 'Michael Rivera',
    text: 'Selling our family home was emotional, but Best Move Lifetime Realty made it seamless. Their marketing plan was top-notch.',
    rating: 5,
    location: 'Williamsbridge',
  },
  {
    id: '3',
    name: 'The Thompson Family',
    text: 'True professionals who know the Bronx like the back of their hand. We highly recommend them to anyone looking to buy or sell.',
    rating: 5,
    location: 'Morris Park',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
            What Our Clients Say
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Real stories from real families we've helped find their lifetime homes in the Bronx.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-3xl relative border border-slate-100"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-brand-100" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>
              <div className="flex flex-col">
                <span className="font-display font-bold text-slate-900">{testimonial.name}</span>
                <span className="text-xs text-brand-600 font-bold uppercase tracking-wider">
                  {testimonial.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, ShieldCheck, Home, ArrowRight, Check } from 'lucide-react';

const infoItems = [
  {
    title: 'Quick Quotes, No Hassle',
    icon: CheckCircle2,
    text:
      'Fast, transparent estimates for pressure washing, soft washing, fencing, haul off, concrete sealing, and more.',
    points: ['Same day responses', 'Clear line item pricing', 'No pushy upsells'],
  },
  {
    title: 'Trusted by Our Community',
    icon: Users,
    text:
      'Locally owned and Texas proud. Homeowners and small businesses choose us for fair pricing and consistent results.',
    points: ['5 star mindset', 'Respect for your time', 'Repeat and referral clients'],
  },
  {
    title: 'Reliable by Default',
    icon: ShieldCheck,
    text:
      'Professional gear, safe techniques, and trained techs. We show up ready and finish the job right the first time.',
    points: ['On time arrivals', 'Pro grade equipment', 'Eco friendly options'],
  },
  {
    title: 'We Treat Your Property Right',
    icon: Home,
    text:
      'Careful prep, clean work areas, and attention to detail like it is our own place. That is the standard you deserve.',
    points: ['Protected surfaces', 'Detailed cleanup', 'Satisfaction guaranteed'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07 },
  }),
};

export default function LandingInfo() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-lg font-semibold tracking-widest text-red-600 uppercase">
            Why Choose Lone Star
          </p>
          <h2 className="mt-2 text-4xl font-bold text-blue-900">
            Reliable service. Clear pricing. Texas proud.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {infoItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="group relative rounded-2xl bg-white ring-1 ring-gray-300 shadow-lg
                           transition hover:ring-gray-400 hover:shadow-xl overflow-hidden"
              >
                {/* woodgrain texture (tweak opacity below) */}
                <img
                  src="/img/woodgrain.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover pointer-events-none opacity-90"
                  // style={{ opacity: 0.20 }} // ← adjust between 0.08 and 0.25 to taste
                />

                {/* inner gradient + content */}
                <div className="relative z-10 rounded-2xl bg-gradient-to-b from-white/55 to-white/90 p-6 lg:p-8">
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 rounded-xl p-3 bg-red-50 ring-1 ring-red-200 text-red-700">
                      <Icon className="w-6 h-6" />
                    </span>
                    <div>
                      <h3 className="text-2xl font-semibold text-blue-800">{item.title}</h3>
                      <p className="mt-2 text-gray-800 leading-relaxed max-w-prose">
                        {item.text}
                      </p>
                    </div>
                  </div>

                  {item.points?.length > 0 && (
                    <ul className="mt-4 space-y-2 text-gray-800">
                      {item.points.map((p, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-0.5 text-blue-700" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-blue-700 font-medium hover:text-blue-800"
                      aria-label={`Contact Lone Star about ${item.title}`}
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* brand accent */}
                <span className="pointer-events-none absolute inset-x-0 top-0 h-1.5 rounded-t-2xl
                                 bg-gradient-to-r from-red-600 via-blue-700 to-gray-500" />
              </motion.article>
            );
          })}
        </div>

        {/* Primary CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700
                       text-white font-semibold px-6 py-3 shadow-md"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

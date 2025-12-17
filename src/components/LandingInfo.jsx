import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Users,
  ShieldCheck,
  Home,
  ArrowRight,
  Check,
  PhoneCall,
} from "lucide-react";

const infoItems = [
  {
    title: "Fast Quotes, No Hassle",
    icon: CheckCircle2,
    text:
      "Get quick, transparent estimates for pressure washing, soft washing, fencing, haul-off, concrete sealing, and ongoing property maintenance in Fort Worth and the DFW area.",
    points: ["Same-day response when available", "Clear, honest pricing", "No pushy upsells"],
  },
  {
    title: "Local & Texas Proud",
    icon: Users,
    text:
      "We’re a locally owned team serving Fort Worth, DFW, and nearby communities. Homeowners and small businesses call us for fair pricing and consistent results.",
    points: ["Respect for your time", "Reliable communication", "Repeat & referral customers"],
  },
  {
    title: "Reliable From Start to Finish",
    icon: ShieldCheck,
    text:
      "We use professional equipment, safe techniques, and proven processes to deliver quality work — and we show up ready to get it done right.",
    points: ["On-time arrivals", "Pro-grade equipment", "Eco-friendly options when needed"],
  },
  {
    title: "We Treat Your Property Like Our Own",
    icon: Home,
    text:
      "Clean work areas, careful prep, and attention to detail. Whether it’s a home, rental, or business property, we protect surfaces and leave things better than we found them.",
    points: ["Protected surfaces", "Detailed cleanup", "Satisfaction-focused service"],
  },
];

const faqs = [
  {
    q: "What areas do you serve around Fort Worth and DFW?",
    a:
      "We’re based in Fort Worth and serve the greater DFW area and surrounding communities. If you’re unsure whether you’re in our service area, reach out - we’ll confirm quickly.",
  },
  {
    q: "Can I bundle services like pressure washing, fencing, and haul-off?",
    a:
      "Yes. Many customers bundle services to save time and keep their property consistent. Tell us what you need and we’ll recommend the most efficient plan and provide a clear quote.",
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

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function LandingInfo() {
  return (
    <section className="bg-white py-16" aria-labelledby="why-choose-lonestar">
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

          <h2 id="why-choose-lonestar" className="mt-2 text-4xl font-bold text-blue-900">
            Property Maintenance in Fort Worth & DFW you can count on
          </h2>

          <p className="mt-4 text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
            From exterior cleaning to ongoing upkeep, we help homeowners and businesses keep properties clean,
            protected, and looking their best — with clear pricing and dependable service.
          </p>
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
                {/* woodgrain texture */}
                <img
                  src="/img/woodgrain.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover pointer-events-none"
                  style={{ opacity: 0.12 }}
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
                      onClick={() => window.scrollTo(0, 0)}
                      className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800"
                      aria-label={`Get a free quote from Lone Star for ${item.title}`}
                    >
                      Get a Free Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* brand accent */}
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-1.5 rounded-t-2xl
                             bg-gradient-to-r from-red-600 via-blue-700 to-gray-500"
                />
              </motion.article>
            );
          })}
        </div>

        {/* Mini FAQ (SEO booster) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-14"
        >
          <div className="rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 bg-white">
            <p className="text-sm font-semibold tracking-widest text-red-600 uppercase">
              FAQs
            </p>
            <h3 className="mt-2 text-3xl font-extrabold text-blue-900">
              Quick answers before you request a quote
            </h3>

            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-gray-200 p-5"
                >
                  <summary className="cursor-pointer list-none text-lg font-semibold text-blue-900 flex items-center justify-between">
                    {faq.q}
                    <span className="ml-4 text-blue-900 group-open:rotate-90 transition-transform">
                      <ArrowRight size={18} />
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-800 text-lg leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700
                           text-white text-lg font-semibold px-6 py-3 shadow-md"
              >
                Get a Free Quote <ArrowRight className="ml-2" size={18} />
              </Link>

              <a
                href="tel:18178793087"
                className="inline-flex items-center justify-center rounded-full bg-white text-blue-700
                           border-2 border-blue-700 hover:bg-blue-700 hover:text-white
                           text-lg font-semibold px-6 py-3 transition"
              >
                <PhoneCall className="mr-2" size={18} />
                Call (817) 879-3087
              </a>
            </div>
          </div>
        </motion.div>

        {/* Primary CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700
                       text-white font-semibold px-6 py-3 shadow-md"
            aria-label="Get a free quote for property maintenance services in Fort Worth and DFW"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

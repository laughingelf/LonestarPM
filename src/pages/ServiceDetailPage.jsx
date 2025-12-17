import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import { getServiceBySlug, servicesData } from "../data/serviceData";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-900">Service Not Found</h1>
          <p className="mt-4 text-gray-700">
            The service page you’re looking for doesn’t exist. Check out all services below.
          </p>
          <div className="mt-8">
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full bg-blue-900 text-white text-lg font-semibold px-6 py-3"
            >
              View All Services <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const contactLink = `/contact?service=${encodeURIComponent(service.ctaServiceLabel || service.title)}`;

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.img}
            alt={`${service.title}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative px-6 py-20 md:py-24">
          <div className="max-w-6xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-3xl">
              <p className="text-sm md:text-base font-semibold tracking-widest text-white/90 uppercase">
                Lone Star Property Management
              </p>

              <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-white leading-tight">
                {service.heroTitle}
              </h1>

              <p className="mt-4 text-white/90 text-lg md:text-xl">
                {service.heroSubtitle}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to={contactLink}
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700
                             text-white text-lg font-semibold px-6 py-3 shadow-md"
                >
                  Get a Free Quote <ArrowRight className="ml-2" size={18} />
                </Link>

                <a
                  href="tel:18178793087"
                  className="inline-flex items-center justify-center rounded-full bg-white/95 text-blue-900
                             border-2 border-white hover:bg-white text-lg font-semibold px-6 py-3 shadow-sm transition"
                >
                  <PhoneCall className="mr-2" size={18} />
                  Call (817) 879-3087
                </a>
              </div>

              <div className="mt-6">
                <Link to="/services" className="text-white/90 underline underline-offset-4">
                  ← Back to all services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-3">
          {/* Main */}
          <div className="lg:col-span-2">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
              <h2 className="text-3xl font-extrabold text-blue-900">What to Expect</h2>
              <p className="mt-4 text-gray-800 text-lg leading-relaxed">
                {service.intro}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-10"
            >
              <h3 className="text-2xl font-bold text-blue-900">Benefits</h3>
              <ul className="mt-4 space-y-3">
                {service.benefits?.map((b) => (
                  <li key={b} className="flex gap-3 text-gray-800 text-lg">
                    <CheckCircle2 className="text-green-600 mt-1" size={20} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-10"
            >
              <h3 className="text-2xl font-bold text-blue-900">Common Projects</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.commonProjects?.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gray-300 px-4 py-2 text-gray-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold text-blue-900">FAQs</h3>

              <div className="mt-5 space-y-4">
                {service.faqs?.map((faq) => (
                  <details
                    key={faq.q}
                    className="group rounded-2xl border border-gray-200 p-5 shadow-sm"
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
            </motion.div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-gray-200 shadow-sm p-6">
              <p className="text-sm font-semibold tracking-widest text-red-600 uppercase">
                Ready to get started?
              </p>
              <h3 className="mt-2 text-2xl font-extrabold text-blue-900">
                Request a Free Quote
              </h3>
              <p className="mt-3 text-gray-700">
                Tell us about your property and what you need — we’ll get back to you quickly.
              </p>

              <div className="mt-6 space-y-3">
                <Link
                  to={contactLink}
                  onClick={() => window.scrollTo(0, 0)}
                  className="w-full inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700
                             text-white text-lg font-semibold px-6 py-3 shadow-md"
                >
                  Get Quote <ArrowRight className="ml-2" size={18} />
                </Link>

                <a
                  href="tel:18178793087"
                  className="w-full inline-flex items-center justify-center rounded-full bg-white text-blue-700
                             border-2 border-blue-700 hover:bg-blue-700 hover:text-white
                             text-lg font-semibold px-6 py-3 transition"
                >
                  Call Now
                </a>
              </div>

              <div className="mt-8">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-widest">
                  Explore other services
                </p>
                <ul className="mt-3 space-y-2">
                  {servicesData
                    .filter((s) => s.slug !== service.slug)
                    .slice(0, 6)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/services/${s.slug}`}
                          onClick={() => window.scrollTo(0, 0)}
                          className="text-blue-800 hover:underline underline-offset-4"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetailPage;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Tag, Phone, CalendarDays, CheckCircle2, Sparkles } from "lucide-react";

export default function PromoSaleSection() {
  const smsUrl = `sms:+18178793087?&body=${encodeURIComponent(
    "Hi Lone Star — I’d like to book the seasonal special."
  )}`;

  return (
    <section id="sale" className="bg-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl bg-white ring-1 ring-gray-300 shadow-lg overflow-hidden"
        >
          {/* brand accent */}
          <span className="pointer-events-none absolute inset-x-0 top-0 h-1.5 rounded-t-2xl
                           bg-gradient-to-r from-red-600 via-blue-700 to-gray-500" />
          {/* subtle woodgrain */}
          <img
            src="/img/woodgrain.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover pointer-events-none"
            style={{ opacity: 0.18 }}
          />

          <div className="relative z-10 p-6 md:p-10">
            {/* Eyebrow + Title */}
            <div className="flex items-center gap-2 text-red-600 text-lg font-semibold tracking-widest uppercase">
              <Sparkles className="w-5 h-5" /> Limited Time Offers
            </div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-blue-900">
              Seasonal Savings — Book Now & Save
            </h2>
            <p className="mt-2 text-gray-800 text-lg">
              Hauling, fence repair & stain, yard makeovers—get your property looking its best.
            </p>

            {/* Offers */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "20% OFF Fence & Cleanup Combo",
                "15% OFF Your First Service",
                "Seasonal Special: Save 20% when you book now!",
              ].map((offer) => (
                <div
                  key={offer}
                  className="flex items-start gap-3 rounded-xl bg-white/80 ring-1 ring-gray-200 p-4"
                >
                  <Tag className="w-5 h-5 text-blue-700 mt-0.5" />
                  <span className="text-gray-900 font-semibold">{offer}</span>
                </div>
              ))}
            </div>

            {/* Support blurb */}
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3 text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-blue-700 mt-0.5" />
                <p>
                  Haul away that pile in the corner, repair & stain your fence, or give your yard a fresh
                  look — we’ve got you covered.
                </p>
              </div>
              <div className="flex items-start gap-3 text-gray-800">
                <CalendarDays className="w-5 h-5 text-blue-700 mt-0.5" />
                <p>Spots fill fast. Discounts won’t last — lock in your date today.</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:18178793087"
                className="inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700
                           text-white font-semibold px-6 py-3 shadow-md"
                aria-label="Call Lone Star Property Maintenance"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (817) 879-3087
              </a>
              <a
                href={smsUrl}
                className="inline-flex items-center justify-center rounded-full bg-white text-blue-700
                           border-2 border-blue-700 hover:bg-blue-700 hover:text-white font-semibold px-6 py-3 shadow-sm transition"
                aria-label="Text Lone Star Property Maintenance"
              >
                Text Us
              </a>
              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center justify-center rounded-full bg-white text-blue-700
                           border-2 border-blue-700 hover:bg-blue-700 hover:text-white font-semibold px-6 py-3 shadow-sm transition"
              >
                Get My Quote
              </Link>
            </div>

            {/* Service area + fine print */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <p className="text-sm text-gray-600">
                📍 Serving Fort Worth and surrounding areas
              </p>
              <p className="text-xs text-gray-500">
                *One promo per job. Limited time. Some exclusions may apply.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

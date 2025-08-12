import React from "react";
import { motion } from "framer-motion";
import { Truck, Calculator, CheckCircle2, ChevronDown } from "lucide-react";


const currency = (n) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });

const baseMaterials = [
  { name: "Common Fill", price: 3.5 },
  { name: "Top Soil", price: 18 },
  { name: "Screened Asphalt Sand", price: 12 },
  { name: 'Flex Base 3/8"', price: 10 },
  { name: "Native Tree Mulch", price: 26 },
  { name: "Premium Soil Mix", price: 31 },
];

// 30% markup (10+ yards pricing)
const materials = baseMaterials.map((m) => ({
  ...m,
  unitPrice: +(m.price * 1.3).toFixed(2),
}));

// Hauling brackets with +$10 added to each (non-overlapping ranges)
const haulingBrackets = [
  { min: 1,  max: 5,  price: 90 },
  { min: 6,  max: 10, price: 105 },
  { min: 11, max: 15, price: 125 },
  { min: 16, max: 20, price: 130 },
  { min: 21, max: 25, price: 135 },
  { min: 26, max: 30, price: 140 },
  { min: 31, max: 35, price: 150 },
  { min: 36, max: 40, price: 170 },
  { min: 41, max: 45, price: 195 },
  { min: 46, max: 50, price: 210 },
];

// 51+ miles
const longHaul = { perMile: 7.5, tripFee: 10 };

function getHaulCost(miles) {
  if (!miles || miles <= 0) return 0;
  if (miles > 50) return longHaul.tripFee + miles * longHaul.perMile;
  const b = haulingBrackets.find((x) => miles >= x.min && miles <= x.max);
  return b ? b.price : 0;
}

export default function BulkMaterialsPricing() {
  const [selectedMaterial, setSelectedMaterial] = React.useState(materials[0].name);
  const [yards, setYards] = React.useState(10);
  const [miles, setMiles] = React.useState(5);

  const activeMaterial = materials.find((m) => m.name === selectedMaterial);
  const billableYards = Math.max(10, Number(yards) || 0);
  const materialSubtotal = activeMaterial ? activeMaterial.unitPrice * billableYards : 0;
  const haulingCost = getHaulCost(Number(miles) || 0);
  const total = materialSubtotal + haulingCost;

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-800">Bulk Materials & Delivery</h2>
          <p className="text-gray-700 mt-3">
            Transparent pricing for <span className="font-semibold">10+ yards</span>.
            Under 10 yards, material pricing is higher.
          </p>
          <span className="inline-block mt-4 border-b-4 border-red-600 w-24" />
        </motion.div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { icon: <CheckCircle2 className="w-6 h-6" />, title: "Quality Materials", text: "From soil to base, we source dependable materials." },
            { icon: <Truck className="w-6 h-6" />, title: "Reliable Delivery", text: "Clear rates by distance so there are no surprises." },
            { icon: <Calculator className="w-6 h-6" />, title: "Instant Estimate", text: "Use the quick quote to see your total today." },
          ].map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl shadow p-5 flex items-start gap-3"
            >
              <div className="text-blue-700">{b.icon}</div>
              <div>
                <div className="font-semibold text-gray-900">{b.title}</div>
                <div className="text-gray-600 text-sm">{b.text}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Materials */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow"
          >
            <div className="p-6 border-b">
              <h3 className="text-2xl font-bold text-blue-800">Materials (10+ yards)</h3>
              <p className="text-sm text-gray-600 mt-1">
                Prices shown include a <span className="font-semibold text-blue-700">30% </span>materials markup.
              </p>
            </div>
            <div className="p-6">
              <ul className="divide-y">
                {materials.map((m) => (
                  <li key={m.name} className="py-4 flex items-center justify-between">
                    <span className="text-gray-900">{m.name}</span>
                    <span className="font-semibold text-red-600">{currency(m.unitPrice)}/yd³</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Hauling */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="bg-white rounded-2xl shadow"
          >
            <div className="p-6 border-b">
              <h3 className="text-2xl font-bold text-blue-800">Hauling Rates</h3>
              <p className="text-sm text-gray-600 mt-1">
                Includes a <span className="font-semibold text-blue-700">$10</span> delivery surcharge on each bracket.
              </p>
            </div>
            <div className="p-6">
              <ul className="divide-y">
                {haulingBrackets.map((b, i) => (
                  <li key={i} className="py-4 flex items-center justify-between">
                    <span className="text-gray-900">
                      {b.min}-{b.max} miles
                    </span>
                    <span className="font-semibold text-red-600">{currency(b.price)}</span>
                  </li>
                ))}
                <li className="py-4 flex items-center justify-between">
                  <span className="text-gray-900">51+ miles</span>
                  <span className="font-semibold text-red-600">
                    {currency(longHaul.perMile)}/mi + {currency(longHaul.tripFee)} trip fee
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Quick Quote Calculator */}
        <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.12 }}
        className="bg-white rounded-2xl shadow mt-8 p-6"
        >
        <div className="flex items-center gap-2 mb-4">
            <Calculator className="w-5 h-5 text-blue-700" />
            <h4 className="text-xl font-bold text-gray-900">Quick Quote</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Material */}
            <div className="relative">
            <label className="block text-sm text-gray-700 mb-1">Material</label>
            <select
                value={selectedMaterial}
                onChange={(e) => setSelectedMaterial(e.target.value)}
                className="ls-select w-full appearance-none pr-10 bg-white text-gray-900 placeholder-gray-400
                        border-2 border-gray-300 rounded-lg shadow-sm h-11
                        focus:border-blue-600 focus:ring-4 focus:ring-blue-600/20"
            >
                {materials.map((m) => (
                <option key={m.name} value={m.name} className="text-gray-900 bg-white">
                    {m.name} — {currency(m.unitPrice)}/yd³
                </option>
                ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-[38px] w-5 h-5 text-gray-500" />
            </div>

            {/* Yards */}
            <div>
            <label className="block text-sm text-gray-700 mb-1">Yards (min 10)</label>
            <input
                type="number"
                min={1}
                value={yards}
                onChange={(e) => setYards(Number(e.target.value))}
                className="w-full bg-white text-gray-900 placeholder-gray-400 h-11
                        border-2 border-gray-300 rounded-lg shadow-sm
                        focus:border-blue-600 focus:ring-4 focus:ring-blue-600/20"
                placeholder="10"
            />
            <p className="text-xs text-gray-500 mt-1">
                Pricing shown assumes 10+ yards. Under 10 yards, material pricing is higher.
            </p>
            </div>

            {/* Miles */}
            <div>
            <label className="block text-sm text-gray-700 mb-1">Distance (miles)</label>
            <input
                type="number"
                min={1}
                value={miles}
                onChange={(e) => setMiles(Number(e.target.value))}
                className="w-full bg-white text-gray-900 placeholder-gray-400 h-11
                        border-2 border-gray-300 rounded-lg shadow-sm
                        focus:border-blue-600 focus:ring-4 focus:ring-blue-600/20"
                placeholder="5"
            />
            </div>
        </div>

        {/* Totals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-sm text-gray-600">Material Subtotal</div>
            <div className="text-2xl font-bold text-gray-900">{currency(materialSubtotal)}</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-sm text-gray-600">Hauling</div>
            <div className="text-2xl font-bold text-gray-900">{currency(haulingCost)}</div>
            </div>
            <div className="bg-blue-600 text-white rounded-xl p-4">
            <div className="text-sm opacity-90">Estimated Total</div>
            <div className="text-2xl font-extrabold">{currency(total)}</div>
            </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-sm text-gray-600">
            Final price may vary based on exact distance, access, and material availability.
            </p>
            <a
            href="tel:18178793087"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full shadow transition"
            >
            Call to Schedule: (817) 879-3087
            </a>
        </div>

        {/* force dark text for native dropdown options (fixes white-on-white) */}
        <style>{`
            .ls-select, .ls-select option {
            color: #111827;        /* gray-900 */
            background: #ffffff;   /* white */
            }
        `}</style>
        </motion.div>

      </div>
    </section>
  );
}

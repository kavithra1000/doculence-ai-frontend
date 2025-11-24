import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    badge: "Basic",
    features: [
      "Summarize up to 3 webpages/day",
      "Basic content extraction",
      "Limited AI chat (5 questions/day)",
    ],
    unavailable: [
      "Full-length article storage",
      "Priority AI responses",
      "Custom export to PDF/CSV",
    ],
    highlight: false,
  },
  {
    name: "Premium",
    price: "$29/mo",
    badge: "Most Popular",
    features: [
      "Unlimited smart summaries",
      "Full webpage content extraction",
      "Unlimited AI interactions",
      "Export as PDF or CSV",
      "Priority support & faster processing",
    ],
    unavailable: [],
    highlight: true,
  },
];

const Prices = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4 sm:px-8">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
        Simple & Transparent Pricing
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 justify-center items-stretch">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`flex-1 rounded-2xl border shadow-md ${
              plan.highlight
                ? "border-indigo-500 bg-gradient-to-tr from-indigo-50 to-white"
                : "border-gray-200 bg-white"
            } p-8 transition-transform hover:-translate-y-1`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
              {plan.badge && (
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    plan.highlight
                      ? "bg-indigo-100 text-indigo-600"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {plan.badge}
                </span>
              )}
            </div>

            <p className="text-3xl font-bold text-gray-800 mb-6">{plan.price}</p>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}

              {plan.unavailable.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center text-sm text-gray-400 line-through"
                >
                  <Check className="w-4 h-4 text-gray-300 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2 px-4 rounded-lg text-white font-medium transition duration-200 ${
                plan.highlight
                  ? "bg-gradient-to-r from-indigo-600 to-sky-500 hover:opacity-90"
                  : "bg-gray-500 hover:bg-gray-600"
              }`}
            >
              {plan.price === "$0" ? "Get Started Free" : "Subscribe Now"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prices;

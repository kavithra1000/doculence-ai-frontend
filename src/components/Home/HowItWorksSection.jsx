import { Globe, AlignCenterVertical, Bot } from "lucide-react";

const steps = [
  {
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    title: "Extract Clean Content",
    description:
      "Paste any website URL and get distraction-free content, stripped of ads, popups, and clutter.",
  },
  {
    icon: <AlignCenterVertical className="w-6 h-6 text-blue-600" />,
    title: "Smart Summarization",
    description:
      "Our AI reads the content and creates a concise summary — helping you understand the core message instantly.",
  },
  {
    icon: <Bot className="w-6 h-6 text-blue-600" />,
    title: "AI Chat Assistant",
    description:
      "Ask anything about the content — our AI responds instantly with accurate, helpful answers.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="max-w-full mx-auto py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
        How It Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition"
          >
            <div className="flex items-center gap-3 mb-3">
              {step.icon}
              <h3 className="text-lg font-semibold text-gray-800">
                {step.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;

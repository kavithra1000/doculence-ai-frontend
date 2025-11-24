import { Zap, MessageCircle, Clock, Brain, FileText, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-blue-600" />,
    title: "Instant, Accurate Summaries",
    description: "Transform long articles, research papers, and web pages into digestible summaries in seconds. Get the core message without the fluff.",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-blue-600" />,
    title: "Chat & Ask Anything",
    description: "Engage in a natural conversation with our AI. Ask specific questions about the summarized content and receive instant, relevant answers.",
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-600" />,
    title: "Save Hours of Reading",
    description: "Drastically cut down on reading time. Focus on what matters and boost your productivity, whether for work, study, or personal interest.",
  },
  {
    icon: <Brain className="w-6 h-6 text-blue-600" />,
    title: "Gain Deeper Insights",
    description: "Go beyond surface-level understanding. Our AI helps you explore complex topics and connect ideas effortlessly.",
  },
  {
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    title: "Supports Various Formats",
    description: "Summarize content from diverse sources, including news articles, blog posts, academic papers, and more.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-blue-600" />,
    title: "Intuitive & Easy to Use",
    description: "A clean, simple interface ensures a seamless experience, allowing you to get answers without any hassle.",
  },
];

const FeatureSection = () => {
  return (
    <section className="max-w-full mx-auto py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
        Powerful Features Designed for You
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3">
              {feature.icon}
              <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;

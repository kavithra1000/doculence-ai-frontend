import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Jessica Lee",
    role: "Content Strategist",
    quote:
      "WebContent AI transformed how I do research! Extracting clean articles and summaries saves me hours every week.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mark Thompson",
    role: "Freelance Writer",
    quote:
      "The AI chat assistant is fantastic. I get quick answers to deep questions about articles without leaving the page.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Sara Johnson",
    role: "Product Manager",
    quote:
      "Clean UI, reliable extraction, and smart summaries. This tool is a game changer for busy professionals.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Alex Rivera",
    role: "UX Designer",
    quote:
      "A perfect research companion. Beautiful interface and powerful tools — love using this every day.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Priya Nair",
    role: "Tech Analyst",
    quote:
      "Super useful for breaking down long reports. The AI is surprisingly accurate and helpful.",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
  },
];

const TestimonialCarousel = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    let animationFrameId;
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (!container || isHovered) return;

      container.scrollLeft += scrollSpeed;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <section className="bg-white py-15 max-w-full">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
        What Our Users Say
      </h2>

      <div className="relative overflow-hidden">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Container */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="overflow-x-auto no-scrollbar whitespace-nowrap px-4 sm:px-10 scroll-smooth"
        >
          <div className="flex gap-6 w-max py-4">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow min-w-[300px] max-w-xs flex-shrink-0 hover:shadow-lg transition duration-300 overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic break-words whitespace-normal">
                  "{t.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

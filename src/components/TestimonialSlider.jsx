import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useTheme } from "../contexts/ThemeContext";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialSlider() {
  // Use global theme context
  const { darkMode: isDarkMode } = useTheme();

  const glassPanelClass = isDarkMode
    ? 'bg-white/5 border border-white/10'
    : 'bg-white/80 border border-gray-200';
  const textColorClass = isDarkMode ? 'text-gray-200' : 'text-gray-800';
  const lightTextColorClass = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const darkTextColorClass = isDarkMode ? 'text-white' : 'text-gray-900';

  const testimonials = [
    {
      id: 1,
      name: "DSI Samson Group",
      role: "Factory Partner",
      text: "SenseGrid's real-time monitoring gave us actionable insights and peace of mind. It's a game-changer.",
      image: "/assets/images/dsi.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "DHL Sri Lanka",
      role: "Logistics Operations",
      text: "The accuracy and ease of deployment impressed us from day one. We rely on SenseGrid across multiple sites.",
      image: "/assets/images/dhl.png",
      rating: 5,
    },
    {
      id: 3,
      name: "Mobitel",
      role: "Technology Partner",
      text: "Mobitel’s integration with SenseGrid helped us enhance our industrial automation strategy significantly.",
      image: "/assets/images/mobitel.jpg",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-5xl font-bold ${darkTextColorClass} mb-4`}>
            What Our Clients Say
          </h2>
          <p className={`text-lg ${lightTextColorClass} max-w-2xl mx-auto`}>
            Trusted by industry leaders for reliable, real-time monitoring solutions.
          </p>
        </motion.div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          speed={800}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          navigation={{
            nextEl: ".slider-next",
            prevEl: ".slider-prev",
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`${glassPanelClass} backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all h-full`}
              >
                {/* Star Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className={`${textColorClass} text-base mb-6 leading-relaxed italic`}>
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className={`${darkTextColorClass} font-semibold text-lg`}>
                      {testimonial.name}
                    </h4>
                    <p className={`${lightTextColorClass} text-sm`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <div className="flex justify-center space-x-4 mt-0">
          <button
            className={`slider-prev px-6 py-3 rounded-full ${glassPanelClass} backdrop-blur-sm hover:scale-105 active:scale-95 transition-all text-xl`}
            aria-label="Previous slide"
          >
            ◀
          </button>
          <button
            className={`slider-next px-6 py-3 rounded-full ${glassPanelClass} backdrop-blur-sm hover:scale-105 active:scale-95 transition-all text-xl`}
            aria-label="Next slide"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}

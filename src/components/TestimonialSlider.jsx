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

  // Custom styles for smaller navigation arrows
  const customStyles = `
    .testimonial-swiper .swiper-button-next,
    .testimonial-swiper .swiper-button-prev {
      width: 32px;
      height: 32px;
      background: ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
      border-radius: 50%;
      backdrop-filter: blur(8px);
    }
    
    .testimonial-swiper .swiper-button-next:after,
    .testimonial-swiper .swiper-button-prev:after {
      font-size: 14px;
      font-weight: bold;
      color: ${isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.6)'};
    }
    
    .testimonial-swiper .swiper-button-next:hover,
    .testimonial-swiper .swiper-button-prev:hover {
      background: ${isDarkMode ? 'rgba(14, 165, 234, 0.3)' : 'rgba(14, 165, 234, 0.2)'};
    }
  `;

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Operations Manager, ABC Manufacturing",
      text: "SenseGrid transformed our factory monitoring. Real-time alerts helped us prevent costly downtime.",
      rating: 5,
    },
    {
      id: 2,
      name: "Saman Perera",
      role: "Facility Head, XYZ Warehousing",
      text: "Temperature tracking is now effortless. We've reduced spoilage by 40% since implementing SenseGrid.",
      rating: 5,
    },
    {
      id: 3,
      name: "Nimal Fernando",
      role: "Plant Engineer, DEF Industries",
      text: "The dashboard is intuitive and the alerts are instant. Highly recommend for industrial monitoring.",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-6">
      <style>{customStyles}</style>
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
          spaceBetween={30}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-swiper"
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
                <p className={`${textColorClass} text-base mb-6 leading-relaxed italic text-center`}>
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="mt-auto">
                  <h4 className={`${darkTextColorClass} font-semibold text-lg`}>
                    {testimonial.name}
                  </h4>
                  <p className={`${lightTextColorClass} text-sm`}>
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

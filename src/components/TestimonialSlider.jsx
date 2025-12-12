
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialSlider({ isDarkMode = false }) {
  const glassPanelClass = isDarkMode
    ? 'bg-white/5 border border-white/10'
    : 'bg-white/80 border border-gray-200';
  const textColorClass = isDarkMode ? 'text-gray-200' : 'text-gray-800';
  const lightTextColorClass = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const darkTextColorClass = isDarkMode ? 'text-white' : 'text-gray-900';

  const testimonials = [
    {
      id: 1,
      name: "DSI",
      role: "Factory Partner",
      text: "SenseGrid's real-time monitoring gave us actionable insights and peace of mind. It's a game-changer.",
      image: "/assets/images/dsi.jpg",
    },
    {
      id: 2,
      name: "DHL",
      role: "Logistics Operations",
      text: "The accuracy and ease of deployment impressed us from day one. We rely on SenseGrid across multiple sites.",
      image: "/assets/images/dhl.png",
    },
    {
      id: 3,
      name: "Mobitel",
      role: "Technology Partner",
      text: "Mobitel's integration with SenseGrid helped us enhance our industrial automation strategy significantly.",
      image: "/assets/images/mobitel.jpg",
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
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold ${darkTextColorClass} mb-4`}>
            What Our Clients Say
          </h2>
          <p className={`text-xl ${lightTextColorClass} max-w-2xl mx-auto`}>
            Explore stories from our partners who rely on SenseGrid to elevate
            their operational visibility and performance.
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
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`p-6 ${glassPanelClass} backdrop-blur-sm rounded-2xl shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className={`font-semibold ${darkTextColorClass}`}>
                      {t.name}
                    </h4>
                    <p className={`${lightTextColorClass} text-sm`}>
                      {t.role}
                    </p>
                  </div>
                </div>
                <p className={`${textColorClass} italic`}>
                  "{t.text}"
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <div className="flex justify-center space-x-4 mt-0">
          <button className={`slider-prev px-4 py-2 rounded-full ${glassPanelClass} backdrop-blur-sm hover:scale-110 transition-all`}>
            ◀
          </button>
          <button className={`slider-next px-4 py-2 rounded-full ${glassPanelClass} backdrop-blur-sm hover:scale-110 transition-all`}>
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}

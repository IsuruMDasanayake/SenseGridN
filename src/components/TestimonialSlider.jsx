"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialSlider() {
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
      text: "The accuracy and ease of deployment impressed us from day one. We rely on Monitor One across multiple sites.",
      image: "/assets/images/dhl.png",
    },
    {
      id: 3,
      name: "Mobitel",
      role: "Technology Partner",
      text: "Mobitel’s integration with SenseGrid helped us enhance our industrial automation strategy significantly.",
      image: "/assets/images/mobitel.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
          slidesPerView={1} // default for small screens
          breakpoints={{
            768: { slidesPerView: 2 }, // 2 cards on desktop (1024px and up)
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
                className="p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-md hover:shadow-xl h-full flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t.name}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {t.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "{t.text}"
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <div className="flex justify-center space-x-4 mt-0">
          <button className="slider-prev px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500">
            ◀
          </button>
          <button className="slider-next px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500">
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}

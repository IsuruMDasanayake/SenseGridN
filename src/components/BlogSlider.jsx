import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

import blogArticles from "../data/blogData";

import "swiper/css";
import "swiper/css/navigation";

const BlogSlider = () => {
  // Use global theme context
  const { darkMode: isDarkMode } = useTheme();

  const glassPanelClass = isDarkMode
    ? 'bg-white/5 border border-white/10'
    : 'bg-white/80 border border-gray-200';
  const textColorClass = isDarkMode ? 'text-gray-200' : 'text-gray-800';
  const lightTextColorClass = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const darkTextColorClass = isDarkMode ? 'text-white' : 'text-gray-900';

  return (
    <motion.div
      className="flex justify-center my-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className={`w-[90%] ${glassPanelClass} backdrop-blur-sm rounded-2xl shadow-2xl p-8 flex flex-col lg:flex-row`}>
        {/* Left section */}
        <div className="lg:w-1/4 w-full mb-6 lg:mb-0 pr-6 flex flex-col justify-between">
          <div>
            <h1 className={`mb-3 ${darkTextColorClass} text-2xl font-bold`}>
              Latest Articles
            </h1>
            <p className={`${lightTextColorClass} text-base leading-relaxed`}>
              Explore our latest insights on IoT, Energy, and Smart Solutions.
            </p>
          </div>
        </div>

        {/* Right section - Slider */}
        <div className="lg:w-3/4 w-full">
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
          >
            {blogArticles.map((article) => (
              <SwiperSlide key={article.id}>
                <motion.div
                  className={`group overflow-hidden rounded-xl ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} shadow-lg hover:shadow-2xl transition-all`}
                  whileHover={{ scale: 1.02 }}
                >
                  <a
                    href={`/blog/${article.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h6 className="text-white text-base font-semibold">
                          {article.title}
                        </h6>
                      </div>
                    </div>
                  </a>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogSlider;

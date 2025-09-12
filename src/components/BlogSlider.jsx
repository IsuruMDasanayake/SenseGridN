import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import blogArticles from "../data/blogData"; // ✅ pull from data file

import "swiper/css";
import "swiper/css/navigation";

const BlogSlider = () => {
  return (
    <motion.div
      className="flex justify-center my-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="w-[90%] bg-white dark:bg-gray-800 border dark:border-gray-600 rounded-2xl shadow-xl p-8 flex flex-col lg:flex-row">
        {/* Left section */}
        <div className="lg:w-1/4 w-full mb-6 lg:mb-0 pr-6 flex flex-col justify-between">
          <div>
            <h1 className="mb-3 text-gray-900 dark:text-white text-2xl font-bold">
              Latest Articles
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
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
                  className="group overflow-hidden rounded-xl bg-gray-900 shadow-lg hover:shadow-xl transition-all"
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

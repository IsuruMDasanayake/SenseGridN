import React from "react";
import { motion } from "framer-motion";
import { User, Calendar } from "lucide-react";
import blogArticles from "../data/blogData";

const BlogListing = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-4xl md:text-6xl font-bold mb-6 
               leading-tight md:leading-[1.3] 
               bg-gradient-to-r from-sky-500 via-teal-400 to-sky-500 
               bg-clip-text text-transparent"
            >
              Our Blog Articles
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              Explore the latest insights on IoT, smart solutions, and energy
              innovations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blogArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden 
                     hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                      {article.title}
                    </h2>

                    <div className="flex items-center space-x-4 mb-4">
                      {/* Author Image */}
                      <img
                        src={article.authorImage}
                        alt={article.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="flex items-center text-gray-500 dark:text-gray-400">
                        <User className="h-4 w-4 mr-1" /> {article.author}
                      </span>
                      <span className="flex items-center text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" /> {article.date}
                      </span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 line-clamp-3 mb-4">
                      {/* Optional short excerpt */}
                    </p>

                    {/* Read More Button Only Clickable */}
                    <div className="group">
                      <a
                        href={`/blog/${article.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-sky-500 via-teal-400 to-sky-500
                             bg-[length:200%_100%] bg-[position:var(--x,0)_0]
                             text-white font-semibold py-2 px-8 rounded-lg
                             transition-all duration-500
                             group-hover:[--x:100%]"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogListing;

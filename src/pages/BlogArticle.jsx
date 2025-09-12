import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import blogArticles from "../data/blogData";

const BlogArticle = () => {
  const { slug } = useParams();

  // Find article by slug
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="pt-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Article not found
        </h1>
        <Link to="/blogs" className="text-sky-500 hover:underline">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Title Section */}
      <section className=" bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link to="/blogs" className="hover:underline">
              Blogs
            </Link>{" "}
            /{" "}
            <Link
              to={`/blog/category/${article.category}`}
              className="text-sky-600 hover:underline"
            >
              {article.category}
            </Link>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              text-4xl md:text-6xl font-bold mb-6
              bg-gradient-to-r from-sky-500 via-teal-400 to-sky-500
              bg-clip-text text-transparent
              "
          >
            {article.title}
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {article.excerpt}
          </motion.p>
        </div>
      </section>

      {/* Hero Image */}
      <motion.div
        className="max-w-5xl mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-[400px] object-cover rounded-2xl shadow-lg mb-6"
        />

        {/* Meta Info */}
        <div className="flex flex-wrap items-center justify-between text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 pb-4 mb-8">
          <span>📅 {article.date}</span>
          <span>✍️ {article.author}</span>
          <span className="px-3 py-1 rounded-full bg-sky-100 dark:bg-gray-700 text-sky-600 dark:text-sky-300 text-xs font-semibold">
            {article.category}
          </span>
        </div>

        {/* Article Content */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 mb-12">
          <article
            className="
              max-w-4xl mx-auto
            text-gray-700 dark:text-gray-300 leading-relaxed
    
              [&>p]:text-lg [&>p]:mb-8
              [&>p:first-of-type]:text-xl [&>p:first-of-type]:font-light
    
              [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-gray-900 dark:[&>h2]:text-white [&>h2]:mt-16 [&>h2]:mb-8
              [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:text-gray-900 dark:[&>h3]:text-white [&>h3]:mt-12 [&>h3]:mb-6
              [&>h4]:text-xl [&>h4]:font-semibold [&>h4]:mt-10 [&>h4]:mb-4
    
            [&>blockquote]:bg-gray-100 dark:[&>blockquote]:bg-gray-800 [&>blockquote]:border-l-4 [&>blockquote]:border-sky-500 [&>blockquote]:p-6 [&>blockquote]:italic [&>blockquote]:rounded-xl [&>blockquote]:my-10
    
              [&>img]:rounded-2xl [&>img]:my-10 [&>img]:shadow-md
    
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2
              [&>ol]:list-decimal [&>ol]:pl-6 [&>ol>li]:mb-2
    
            [&>a]:text-sky-600 dark:[&>a]:text-sky-400 hover:[&>a]:underline
          "
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </motion.div>

      {/* Tags Section */}
      <div className="max-w-5xl mx-auto px-4 py-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap gap-3">
          {["IoT", "Smart Cities", "Innovation", "Technology"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm cursor-pointer hover:bg-sky-100 hover:text-sky-600"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Comments Section */}
      {/* <div className="max-w-5xl mx-auto px-4 py-10 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Comments
        </h3>
        <div className="space-y-6">
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <p className="text-gray-700 dark:text-gray-300">
              💬 <strong>Alex Johnson:</strong> This is a fantastic overview! I
              especially liked the section on sustainability—Barcelona’s
              irrigation system is a great example.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <p className="text-gray-700 dark:text-gray-300">
              💬 <strong>Maria Lopez:</strong> While IoT offers many
              opportunities, I think the article could go deeper on privacy
              challenges. Citizens need stronger guarantees.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <p className="text-gray-700 dark:text-gray-300">
              💬 <strong>Chen Wei:</strong> Great piece! The real-time
              transportation insights remind me of systems we already see in
              Singapore. Exciting to think where this is headed.
            </p>
          </div>
        </div>

        <form className="mt-8">
          <textarea
            rows="4"
            className="w-full p-3 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            placeholder="Write a comment..."
          />
          <div className="mt-4 inline-block group">
            <button
              type="submit"
              className="px-6 py-2
                 bg-gradient-to-r from-sky-500 via-teal-400 to-sky-500
                 bg-[length:200%_100%] bg-[position:var(--x,0)_0]
                 text-white font-semibold
                 rounded-lg
                 transition-all duration-500
                 group-hover:[--x:100%]"
            >
              Post Comment
            </button>
          </div>
        </form>
      </div> */}
    </div>
  );
};

export default BlogArticle;

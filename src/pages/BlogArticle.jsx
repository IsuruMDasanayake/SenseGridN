import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import blogArticles from "../data/blogData";

const BlogArticle = () => {
  const { slug } = useParams();

  // Use global theme context
  const { darkMode: isDarkMode } = useTheme();

  // Custom Styles
  const customStyles = `
    .tech-bg-dark {
      background-color: #0b1120;
      background-image: 
        radial-gradient(at 0% 0%, rgba(14, 165, 234, 0.15) 0px, transparent 50%),
        radial-gradient(at 100% 100%, rgba(11, 209, 209, 0.1) 0px, transparent 50%);
      background-attachment: fixed;
    }
    .tech-bg-light {
      background-color: #f0f4f8;
      background-image: 
        radial-gradient(at 0% 0%, rgba(14, 165, 234, 0.05) 0px, transparent 50%),
        radial-gradient(at 100% 100%, rgba(11, 209, 209, 0.05) 0px, transparent 50%);
      background-attachment: fixed;
    }
    
    .glass-panel-dark {
      background: rgba(17, 25, 40, 0.6);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.25);
    }
    .glass-panel-light {
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(0, 0, 0, 0.08);
        box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
    }

    .brand-gradient-text {
      background: linear-gradient(90deg, rgb(14,165,234), rgb(11,209,209));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .glow-blob {
      position: absolute;
      filter: blur(80px);
      z-index: 0;
      opacity: 0.3;
      border-radius: 50%;
    }

    .tech-grid-overlay {
      background-size: 40px 40px;
      background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
    }
  `;

  // Dynamic Class Names
  const techBgClass = isDarkMode ? 'tech-bg-dark' : 'tech-bg-light';
  const glassPanelClass = isDarkMode ? 'glass-panel-dark' : 'glass-panel-light';
  const textColorClass = isDarkMode ? 'text-gray-200' : 'text-gray-800';
  const lightTextColorClass = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const darkTextColorClass = isDarkMode ? 'text-white' : 'text-gray-900';

  // Find article by slug
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className={`${techBgClass} min-h-screen pt-16 text-center flex items-center justify-center`}>
        <div>
          <h1 className={`text-2xl font-bold ${darkTextColorClass} mb-4`}>
            Article not found
          </h1>
          <Link to="/blogs" className="text-[rgb(14,165,234)] hover:underline">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`${techBgClass} min-h-screen ${textColorClass} font-sans selection:bg-[rgb(14,165,234)] selection:text-white overflow-x-hidden`}>
      <style>{customStyles}</style>

      {/* Background Elements */}
      {isDarkMode && (
        <>
          <div className="fixed inset-0 tech-grid-overlay pointer-events-none" />
          <div className="glow-blob top-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-[rgb(14,165,234)]" />
          <div className="glow-blob bottom-0 right-0 w-64 h-64 md:w-[500px] md:h-[500px] bg-[rgb(11,209,209)]" />
        </>
      )}

      {/* Title Section */}
      <section className="relative pt-24 pb-10">
        <div className="max-w-5xl mx-auto px-4 py-10 relative z-10">
          <div className={`text-sm ${lightTextColorClass} mb-4`}>
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
              className="text-[rgb(14,165,234)] hover:underline"
            >
              {article.category}
            </Link>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="brand-gradient-text drop-shadow-[0_0_15px_rgba(14,165,234,0.3)]">
              {article.title}
            </span>
          </motion.h1>

          <motion.p
            className={`text-lg ${lightTextColorClass} max-w-2xl`}
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
        className="max-w-5xl mx-auto px-4 py-8 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative">
          {isDarkMode && (
            <div className="absolute -inset-1 bg-gradient-to-r from-[rgb(14,165,234)] to-[rgb(11,209,209)] rounded-2xl blur-lg opacity-30"></div>
          )}
          <img
            src={article.image}
            alt={article.title}
            className="relative w-full h-[400px] object-cover rounded-2xl shadow-2xl mb-6"
          />
        </div>

        {/* Meta Info */}
        <div className={`flex flex-wrap items-center justify-between text-sm ${lightTextColorClass} border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} pb-4 mb-8`}>
          <span>📅 {article.date}</span>
          <span>✍️ {article.author}</span>
          <span className={`px-3 py-1 rounded-full ${isDarkMode ? 'bg-[rgb(14,165,234)]/10 border border-[rgb(14,165,234)]/20' : 'bg-blue-100'} text-[rgb(14,165,234)] text-xs font-semibold`}>
            {article.category}
          </span>
        </div>

        {/* Article Content */}
        <div className={`${glassPanelClass} shadow-2xl rounded-2xl p-8 mb-12`}>
          <article
            className={`
              max-w-4xl mx-auto
            ${textColorClass} leading-relaxed
    
              [&>p]:text-lg [&>p]:mb-8
              [&>p:first-of-type]:text-xl [&>p:first-of-type]:font-light
    
              [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:${darkTextColorClass} [&>h2]:mt-16 [&>h2]:mb-8
              [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:${darkTextColorClass} [&>h3]:mt-12 [&>h3]:mb-6
              [&>h4]:text-xl [&>h4]:font-semibold [&>h4]:mt-10 [&>h4]:mb-4
    
            [&>blockquote]:${glassPanelClass} [&>blockquote]:border-l-4 [&>blockquote]:border-[rgb(14,165,234)] [&>blockquote]:p-6 [&>blockquote]:italic [&>blockquote]:rounded-xl [&>blockquote]:my-10
    
              [&>img]:rounded-2xl [&>img]:my-10 [&>img]:shadow-md
    
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2
              [&>ol]:list-decimal [&>ol]:pl-6 [&>ol>li]:mb-2
    
            [&>a]:text-[rgb(14,165,234)] hover:[&>a]:underline
          `}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </motion.div>

      {/* Tags Section */}
      <div className="max-w-5xl mx-auto px-4 py-6 border-t border-gray-200 dark:border-gray-700 relative z-10">
        <div className="flex flex-wrap gap-3">
          {["IoT", "Smart Cities", "Innovation", "Technology"].map((tag) => (
            <span
              key={tag}
              className={`px-4 py-1 rounded-full ${glassPanelClass} ${textColorClass} text-sm cursor-pointer hover:scale-105 transition-transform`}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;

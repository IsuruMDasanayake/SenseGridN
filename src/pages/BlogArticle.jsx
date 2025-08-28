import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const BlogArticle = () => {
  const { slug } = useParams();

  // 🔹 Expanded professional article
  const article = {
    title: "IoT in Smart Cities: Building the Future",
    excerpt:
      "Discover how IoT is shaping tomorrow’s smart cities with connected infrastructure, sustainable practices, and citizen-focused innovations.",
    date: "August 28, 2025",
    author: "SenseGrid Team",
    category: "IoT & Innovation",
    image: "/assets/images/blog/iot-smartcity.jpeg",
    content: `
      <p>
        Over the past decade, the concept of smart cities has moved from ambitious vision to real-world implementation. 
        At the core of this transformation is the Internet of Things (IoT): a network of connected devices, sensors, and platforms 
        that enable cities to collect, process, and act on data in real time.
      </p>

      <h2>🔹 What Makes a City ‘Smart’?</h2>
      <p>
        A smart city leverages digital technologies to improve quality of life, optimize resources, and 
        ensure sustainability. From managing traffic congestion to enhancing public safety, IoT-powered systems are 
        transforming how urban environments function.
      </p>

      <h2>🔹 Practical Applications of IoT in Urban Life</h2>
      <ul>
        <li><strong>Traffic & Mobility:</strong> Smart traffic lights adapt to traffic flow, reducing commute times and emissions.</li>
        <li><strong>Energy Efficiency:</strong> Smart grids balance demand and supply, while adaptive street lighting saves millions in electricity costs.</li>
        <li><strong>Public Safety:</strong> IoT surveillance and environmental sensors detect accidents, hazards, or unusual activities instantly.</li>
        <li><strong>Waste Management:</strong> Connected bins notify city services when full, optimizing collection routes and reducing operational costs.</li>
        <li><strong>Citizen Engagement:</strong> Mobile apps give residents real-time access to public transport, local services, and emergency alerts.</li>
      </ul>

      <h2>🔹 Case Studies: IoT in Action</h2>
      <p>
        <strong>Barcelona, Spain</strong> has become a global model for smart city adoption. With IoT-enabled lighting, parking, and water management, 
        the city saves over €75 million annually while reducing carbon emissions. 
      </p>
      <p>
        Similarly, <strong>Singapore</strong> has implemented a nationwide network of IoT sensors to monitor air quality, predict floods, 
        and optimize energy consumption. Citizens benefit directly through cleaner air, smoother commutes, and safer living conditions.
      </p>

      <h2>🔹 Benefits for Citizens and Governments</h2>
      <ul>
        <li>Reduced pollution and improved public health through data-driven policies</li>
        <li>Cost savings for municipalities via efficient resource management</li>
        <li>Increased convenience for citizens through connected services</li>
        <li>Stronger disaster preparedness with predictive analytics</li>
      </ul>

      <h2>🔹 Challenges to Overcome</h2>
      <p>
        Despite its promise, IoT adoption in cities faces challenges:
      </p>
      <ul>
        <li><strong>Data Privacy:</strong> Protecting citizen data from misuse is a top priority.</li>
        <li><strong>Cybersecurity:</strong> As more systems connect online, they become vulnerable to attacks.</li>
        <li><strong>Infrastructure Costs:</strong> Deploying sensors and smart systems requires significant investment.</li>
        <li><strong>Interoperability:</strong> Different IoT systems must communicate seamlessly to avoid inefficiencies.</li>
      </ul>

      <h2>🔹 The Road Ahead</h2>
      <p>
        By 2030, it’s estimated that over 60% of the global population will live in urban areas. 
        IoT-powered smart cities will play a vital role in ensuring these environments are sustainable, resilient, 
        and citizen-friendly.
      </p>
      <p>
        Governments, businesses, and technology providers must collaborate to build inclusive ecosystems where 
        IoT drives not only efficiency but also equity and accessibility for all.
      </p>

      <blockquote>
        "Smart cities are not just about technology—they’re about people. IoT is the enabler that helps cities 
        serve their citizens better, today and tomorrow."
      </blockquote>
    `,
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-4xl md:text-6xl font-bold mb-6 
              bg-gradient-to-r from-sky-500 via-teal-400 to-sky-500 
              bg-clip-text text-transparent leading-tight"
            >
              {article.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {article.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Meta */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
          {/* Article Image */}
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-80 object-cover rounded-xl mb-6"
          />

          {/* Meta Info */}
          <div className="flex flex-wrap items-center justify-between mb-6 text-sm text-gray-500 dark:text-gray-400 gap-3">
            <span className="flex items-center gap-1">📅 {article.date}</span>
            <span className="flex items-center gap-1">✍️ {article.author}</span>
            <span className="px-3 py-1 rounded-full bg-sky-100 dark:bg-gray-700 text-sky-600 dark:text-sky-300 text-xs font-semibold">
              {article.category}
            </span>
          </div>

          {/* Article Title */}
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {article.title}
          </h1>

          {/* Article Content */}
          <article
            className="prose prose-lg max-w-none
                 text-gray-800 dark:text-gray-100
                 prose-headings:text-gray-900 dark:prose-headings:text-white
                 prose-p:text-gray-700 dark:prose-p:text-gray-300
                 prose-li:text-gray-700 dark:prose-li:text-gray-300
                 prose-a:text-sky-600 dark:prose-a:text-sky-400"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;

import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";

const BlogArticle = () => {
  const { slug } = useParams();

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
    Over the past decade, the Internet of Things (IoT) has evolved from a futuristic concept into
    a driving force behind real-world innovation. Nowhere is this more evident than in the
    development of <strong>smart cities</strong>. These urban ecosystems leverage IoT technologies to
    improve transportation, energy, sustainability, and the overall quality of life for citizens.
  </p>

  <h2>🔹 What Makes a City ‘Smart’?</h2>
  <p>
    A smart city leverages IoT sensors, data analytics, and automation to address challenges such
    as traffic congestion, energy waste, and pollution. These technologies provide real-time
    insights that city planners, governments, and even citizens can act upon.
  </p>
  <ul>
    <li><strong>Connected Infrastructure:</strong> Sensors embedded in roads, bridges, and
    utilities help predict failures before they occur.</li>
    <li><strong>Energy Efficiency:</strong> Smart grids and connected lighting reduce power
    consumption dramatically.</li>
    <li><strong>Public Safety:</strong> Cameras and sensors detect incidents faster, improving
    emergency response times.</li>
  </ul>

  <blockquote>
    "Smart cities are not just about technology—they’re about people. Technology is simply the
    enabler for safer, more sustainable, and more inclusive communities."
  </blockquote>

  <h2>🌍 IoT and Sustainability</h2>
  <p>
    One of the biggest promises of IoT in urban development is sustainability. Cities account for
    over 70% of global carbon emissions. With IoT-powered smart grids, renewable energy
    integration, and optimized transportation systems, cities can reduce their environmental
    footprint.
  </p>
  <p>
    For instance, <em>Barcelona</em> implemented IoT-enabled irrigation systems that monitor soil
    moisture, saving millions of gallons of water annually. Similarly, <em>Singapore</em> uses
    smart traffic lights to reduce idling times, lowering emissions significantly.
  </p>
  <img src="/assets/images/blog/sensgrid-industries.jpg" alt="Smart City Infrastructure" />

  <h2>🚦 Smarter Transportation Networks</h2>
  <p>
    Urban mobility is one of the most pressing challenges. IoT brings solutions like intelligent
    traffic lights, connected public transport, and autonomous vehicles. These systems ensure
    smoother traffic flow and reduce commute times.
  </p>
  <p>
    For example, London’s connected bus network provides real-time updates for passengers while
    dynamically adjusting routes during peak hours or unexpected congestion. Such innovations
    highlight how IoT transforms not only infrastructure but also daily life.
  </p>

  <h3>Benefits of IoT-Powered Transportation</h3>
  <ol>
    <li>Reduced traffic congestion.</li>
    <li>Lower carbon emissions from idle vehicles.</li>
    <li>Enhanced commuter safety through predictive analytics.</li>
  </ol>

  <h2>💡 Smart Energy Grids</h2>
  <p>
    IoT-based smart grids allow cities to better manage supply and demand for electricity.
    Instead of relying on static distribution, grids can adapt dynamically, redirecting power
    where it is needed most. This prevents blackouts and makes it easier to integrate renewable
    sources like solar and wind.
  </p>
  <p>
    According to a recent study, cities that adopt smart grids can reduce energy consumption by
    up to 30% within a decade—a significant step toward climate resilience.
  </p>
  <img src="/assets/images/blog/sensgrid-industries.jpg" alt="Smart Energy IoT" />

  <h2>👥 Citizen-Centric Applications</h2>
  <p>
    Smart cities are not only about infrastructure. IoT also empowers citizens directly.
    Smartphone apps can connect residents to city services—whether it’s reporting a pothole,
    paying utility bills, or finding real-time parking availability.
  </p>
  <p>
    A well-designed smart city platform bridges the gap between governments and communities,
    enabling transparency and engagement.
  </p>

  <blockquote>
    "The ultimate goal of IoT in smart cities is not efficiency alone—it’s inclusivity and
    empowerment of every citizen."
  </blockquote>

  <h2>🚀 Challenges to Overcome</h2>
  <p>
    While IoT offers immense potential, implementing smart city technologies comes with hurdles.
    Cybersecurity, data privacy, and high infrastructure costs are among the top challenges.
  </p>
  <p>
    Governments and technology providers must ensure that IoT systems are <strong>secure,
    interoperable, and accessible</strong> to all residents, not just a privileged few.
  </p>
  <ul>
    <li><strong>Privacy Concerns:</strong> Citizens must have control over how their data is used.</li>
    <li><strong>Standardization:</strong> Interoperability across devices and vendors is critical.</li>
    <li><strong>Affordability:</strong> Smart city projects must remain inclusive and not widen the
    digital divide.</li>
  </ul>

  <h2>🔮 The Future of Smart Cities</h2>
  <p>
    By 2035, experts predict that more than two-thirds of the world’s population will live in
    urban areas. IoT will be at the heart of managing this growth. Cities that successfully
    embrace IoT will be more resilient, sustainable, and livable.
  </p>
  <p>
    Imagine walking through a city where air quality sensors adjust traffic flow to reduce
    pollution, streetlights brighten only when pedestrians are present, and waste bins alert
    collection trucks when full. This is not science fiction—it’s already happening in pioneering
    cities worldwide.
  </p>

  <h2>✅ Conclusion</h2>
  <p>
    IoT in smart cities represents a paradigm shift in how we design and live in urban
    environments. While challenges remain, the opportunities for efficiency, sustainability, and
    inclusivity are too significant to ignore. By keeping people—not just technology—at the
    center, we can build cities that truly serve their citizens and future generations.
  </p>
`,
  };

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

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-4 py-8">
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
      </div>

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
      <div className="max-w-5xl mx-auto px-4 py-10 border-t border-gray-200 dark:border-gray-700">
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
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700"
          >
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogArticle;

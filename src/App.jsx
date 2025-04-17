"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaPinterest,
  FaGoogle,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSpotify,
  FaTiktok,
  FaPlay,
} from "react-icons/fa";
import { SiAirbnb } from "react-icons/si";
import {
  MdOutlineAnalytics,
  MdOutlineEmail,
  MdOutlineSearch,
  MdOutlineTrendingUp,
} from "react-icons/md";

// Add the ServiceCard component definition
function ServiceCard({ icon: Icon, title, description, delay }) {
  return (
    <motion.div
      className="bg-gradient-to-br from-indigo-900/50 to-indigo-800/30 p-8 rounded-2xl border border-indigo-500/20 shadow-lg shadow-indigo-900/10 hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="bg-gradient-to-br from-indigo-600 to-blue-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform"
        whileHover={{ rotate: 5 }}
      >
        <Icon className="text-white text-2xl" />
      </motion.div>
      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-300 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
        {description}
      </p>
    </motion.div>
  );
}

// Add the StatCard component definition
function StatCard({ icon, number, text, delay }) {
  return (
    <motion.div
      className="bg-indigo-900/30 border border-indigo-500/20 rounded-2xl p-8 text-center hover:bg-indigo-800/30 transition-colors duration-300 shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="bg-gradient-to-br from-indigo-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/30"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <span className="text-2xl font-bold text-white">{icon}</span>
      </motion.div>
      <motion.h3
        className="text-4xl font-bold mb-2 text-white"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {number}
      </motion.h3>
      <p className="text-indigo-200">{text}</p>
    </motion.div>
  );
}

export default function MarketingWebsite() {
  const [scrolled, setScrolled] = useState(false);

  // Handle navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll();
  const heroImageY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.2], [0, 50]);

  return (
    <div className="bg-[#0F172A] text-gray-200 min-h-screen overflow-hidden">
      {/* Navigation */}
      <motion.nav
        className={`sticky top-0 z-50 w-full backdrop-blur-md border-b transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#0F172A]/90 border-indigo-900/30 shadow-lg"
            : "py-4 bg-[#0F172A]/80 border-indigo-900/20"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-20 flex items-center justify-between">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
              N
            </div>
            <span className="ml-2 font-bold text-white text-xl">Nexus</span>
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Services", "Portfolio", "Pricing"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-gray-300 hover:text-indigo-400 transition-colors"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </div>
          <div className="flex items-center space-x-4">
            <motion.a
              href="#"
              className="text-gray-300 hover:text-indigo-400 transition-colors hidden md:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              Login
            </motion.a>
            <motion.button
              className="bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-500 hover:to-blue-400 text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-lg shadow-indigo-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="container mx-auto px-20 py-16 md:py-24 relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-transparent rounded-3xl max-w-6xl mx-auto"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
        <div className="grid md:grid-cols-2 gap-8 items-center relative">
          <motion.div
            className="relative z-10 -mt-8 md:-mt-12"
            style={{ y: heroTextY }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              className="inline-block px-3 py-1 rounded-full bg-indigo-900/50 text-indigo-300 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Digital Marketing Agency
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">
                Boost
              </span>{" "}
              Your Brand with Innovative{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">
                Digital Marketing
              </span>
            </motion.h1>
            <motion.p
              className="text-gray-300 text-lg mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Drive engagement and conversions with advanced digital marketing
              strategies tailored for your business.
            </motion.p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                className="bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-500 hover:to-blue-400 text-white px-8 py-3.5 rounded-lg font-medium transition-all shadow-lg shadow-indigo-500/20 text-sm md:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Today
              </motion.button>
              <motion.button
                className="bg-white/10 hover:bg-white/20 text-white border border-indigo-500/30 px-8 py-3.5 rounded-lg font-medium transition-all flex items-center gap-2 text-sm md:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-indigo-500 rounded-full h-5 w-5 flex items-center justify-center">
                  <FaPlay className="h-2 w-2" />
                </div>
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            style={{ y: heroImageY }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-br from-indigo-600/30 to-blue-500/20 rounded-full blur-3xl opacity-60"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            ></motion.div>
            <motion.div
              className="relative bg-gradient-to-br from-indigo-500/80 to-blue-600/80 rounded-3xl overflow-hidden p-2 shadow-2xl shadow-indigo-500/30 max-w-md mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/hero.png"
                alt="Digital Marketing Expert"
                className="w-full h-auto rounded-2xl"
              />
              <motion.div
                className="absolute top-4 right-4 h-10 w-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <div className="h-5 w-5 bg-indigo-500 rounded-full"></div>
              </motion.div>
              <motion.div
                className="absolute bottom-6 left-6"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <div className="h-3 w-3 bg-blue-400 rounded-full animate-pulse"></div>
              </motion.div>
              <motion.div
                className="absolute top-1/4 -right-6"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <div className="h-24 w-24 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full blur-xl opacity-40"></div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-gradient-to-r from-indigo-900/50 to-blue-900/50 pt-10 pb-12">
        <div className="container mx-auto px-4">
          <motion.p
            className="text-center text-indigo-200 mb-8 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Trusted by thousands of companies worldwide
          </motion.p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {[
              FaPinterest,
              FaGoogle,
              FaTwitter,
              FaInstagram,
              FaYoutube,
              FaSpotify,
              FaTiktok,
              SiAirbnb,
            ].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.2, color: "#fff" }}
              >
                <Icon className="text-gray-400 hover:text-white transition-colors text-3xl md:text-4xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-20 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            className="inline-block px-3 py-1 rounded-full bg-indigo-900/50 text-indigo-300 text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive Digital Solutions
          </motion.h2>
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Strategic services designed to elevate your business through
            comprehensive digital approaches.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              icon: MdOutlineSearch,
              title: "SEO Marketing",
              description:
                "Boost your visibility with our data-driven search engine optimization strategies.",
            },
            {
              icon: MdOutlineAnalytics,
              title: "Market Research",
              description:
                "Data-driven insights to understand your audience and market opportunities.",
            },
            {
              icon: MdOutlineEmail,
              title: "Email Marketing",
              description:
                "Targeted campaigns that drive engagement and convert leads into customers.",
            },
            {
              icon: MdOutlineTrendingUp,
              title: "Growth Strategy",
              description:
                "Comprehensive plans to scale your business and maximize ROI.",
            },
          ].map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-b from-[#0F172A] to-[#0F1A2A] px-11 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex items-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-900/50 text-indigo-300 text-sm font-medium">
              Why Choose Us
            </div>
            <div className="h-px bg-gradient-to-r from-indigo-500/20 to-transparent flex-grow"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 mb-20 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-tr from-indigo-600/20 to-blue-500/10 rounded-3xl blur-2xl opacity-70"
                animate={{
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              ></motion.div>
              <img
                src="1.png"
                alt="Business Meeting"
                className="rounded-2xl relative z-10 w-full shadow-xl shadow-indigo-900/20"
              />
              <motion.div
                className="absolute -bottom-5 -right-5 w-24 h-24 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full blur-xl opacity-60"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              ></motion.div>
            </motion.div>
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Solutions Tailored Specifically to Your Business Needs
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                We understand that every business is unique. Our team works
                closely with you to develop customized strategies that align
                with your goals and drive measurable results.
              </p>
              <motion.button
                className="bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-500 hover:to-blue-400 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg shadow-indigo-500/20 w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-20 items-center">
            <motion.div
              className="flex flex-col justify-center order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Creative Excellence Elevates Every Project
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Our award-winning creative team brings innovation and expertise
                to every project, ensuring your brand stands out in today's
                competitive digital landscape.
              </p>
              <motion.button
                className="bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-500 hover:to-blue-400 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg shadow-indigo-500/20 w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
            <motion.div
              className="relative order-1 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-bl from-indigo-600/20 to-blue-500/10 rounded-3xl blur-2xl opacity-70"
                animate={{
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              ></motion.div>
              <img
                src="2.png"
                alt="Creative Team"
                className="rounded-2xl relative z-10 w-full shadow-xl shadow-indigo-900/20"
              />
              <motion.div
                className="absolute -top-5 -left-5 w-24 h-24 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full blur-xl opacity-60"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-indigo-900/50 to-blue-900/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div
              className="inline-block px-3 py-1 rounded-full bg-indigo-800/70 text-indigo-300 text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              Our Impact
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Driving Results That Matter
            </motion.h2>
            <motion.p
              className="text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our track record speaks for itself with proven results across
              industries.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <StatCard
              icon="🎯"
              number="10,000+"
              text="Happy Clients Worldwide"
              delay={0}
            />
            <StatCard
              icon="🚀"
              number="20,000+"
              text="Successful Campaigns"
              delay={0.2}
            />
            <StatCard
              icon="⏱️"
              number="10+"
              text="Years of Excellence"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20 overflow-hidden">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            className="inline-block px-3 py-1 rounded-full bg-indigo-900/50 text-indigo-300 text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Testimonials
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Don't just take our word for it - hear what our clients have to say
            about our work.
          </motion.p>
        </div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-indigo-900/40 to-indigo-800/20 p-8 md:p-10 rounded-3xl border border-indigo-500/20 shadow-xl shadow-indigo/10 relative overflow-hidden">
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            ></motion.div>

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <motion.div
                className="shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <img
                  src="avatar.png"
                  alt="Client"
                  className="rounded-full h-20 w-20 md:h-24 md:w-24 border-2 border-indigo-500/30"
                />
              </motion.div>
              <div>
                <motion.div
                  className="flex mb-4 text-yellow-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  ))}
                </motion.div>
                <motion.p
                  className="text-gray-300 mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  "Working with this agency has been a game-changer for our
                  business. Their strategic approach and creative solutions have
                  significantly boosted our online presence and driven
                  remarkable results."
                </motion.p>
                <motion.p
                  className="text-indigo-300 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Jane Doe, CEO of Tech Innovations
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      {/* CTA Section */}
      <section className="container mx-auto px-20 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-10"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-50"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-indigo-100 text-lg mb-8">
              Join thousands of businesses that have elevated their online
              presence with our expert digital marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3.5 rounded-lg font-medium transition-all shadow-lg shadow-indigo-500/20 text-sm md:text-base">
                Schedule a Consultation
              </button>
              <button className="bg-indigo-700/50 hover:bg-indigo-700/70 text-white border border-indigo-400/30 px-8 py-3.5 rounded-lg font-medium transition-all text-sm md:text-base">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1022] pt-16 px-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand Info */}
            <div>
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                  N
                </div>
                <span className="ml-2 font-bold text-white text-xl">Nexus</span>
              </div>
              <p className="text-gray-400 mb-6">
                Nexus is a leading digital marketing agency dedicated to driving
                business growth online. With expertise in SEO, social media,
                email marketing, and PPC, we deliver tailored services that get
                results.
              </p>
              <div className="flex space-x-4">
                {/* Social Icons */}
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  {/* Facebook */}
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  {/* Twitter */}
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>

                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  {/* Instagram */}
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">
                Our Services
              </h4>
              <ul className="space-y-3 text-gray-400">
                {[
                  "SEO Marketing",
                  "Social Media",
                  "Email Marketing",
                  "PPC Advertising",
                  "Content Strategy",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="hover:text-indigo-400 transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
              <ul className="space-y-3 text-gray-400">
                {[
                  "About Us",
                  "Case Studies",
                  "Resources",
                  "Blog",
                  "Privacy Policy",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-indigo-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">
                Contact Us
              </h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-400 mr-3 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                  <span>123 Nexus Street, Casablanca, Morocco</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

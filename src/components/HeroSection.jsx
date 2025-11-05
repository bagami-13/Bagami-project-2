import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 text-white py-24 rounded-3xl shadow-lg mb-10">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Bitxbase Events Hub
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto"
        >
          Discover, create, and join amazing campus events. Stay connected and
          never miss out on what’s happening around you!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex justify-center gap-4"
        >
          <Link
            to="/add"
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition"
          >
            Add Event
          </Link>
          <a
            href="#events"
            className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white/20 transition"
          >
            Browse Events
          </a>
        </motion.div>
      </div>
    </section>
  );
}

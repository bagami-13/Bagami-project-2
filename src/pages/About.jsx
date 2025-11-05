import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12 flex flex-col items-center">
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Bitxbase Events Hub
      </motion.h1>

      {/* Project Description */}
      <motion.p
        className="max-w-3xl text-center mb-10 text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Bitxbase Events Hub is a simple campus event listing platform that allows
        students to view and share campus activities. It’s a digital notice board
        designed to make event discovery effortless and engaging.
      </motion.p>

      {/* Developer Card */}
      <motion.div
        className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 w-full max-w-md text-center border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <img
          src="bagami.jpg"
          alt="Bagami"
          className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-md"
        />
        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
          Bagami
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Frontend Developer · Passionate about creating interactive web
          applications and crafting smooth user experiences.
        </p>

        {/* Animated Social Icons (GitHub & Email with Neon Glow) */}
        <motion.div
          className="mt-6 flex justify-center gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {/* GitHub Icon */}
          <motion.a
            href="https://github.com/bagami-13"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group text-gray-600 dark:text-gray-300 transition"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            title="GitHub"
          >
            <div className="absolute inset-0 blur-md opacity-0 group-hover:opacity-80 transition duration-300 bg-blue-500/50 rounded-full"></div>
            <Github className="w-8 h-8 relative z-10 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300" />
          </motion.a>

          {/* Email Icon */}
          <motion.a
            href="mailto:certified61134@gmail.com"
            className="relative group text-gray-600 dark:text-gray-300 transition"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            title="Email"
          >
            <div className="absolute inset-0 blur-md opacity-0 group-hover:opacity-80 transition duration-300 bg-blue-500/50 rounded-full"></div>
            <Mail className="w-8 h-8 relative z-10 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Credits */}
      <motion.p
        className="mt-10 text-sm text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        Developed by <span className="font-medium text-blue-600">Bagami</span> ·
        In collaboration with <strong>Bitxbase Academy</strong>
      </motion.p>
    </div>
  );
}

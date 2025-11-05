import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function EventCard({ event }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="card p-4 border border-slate-200 dark:border-slate-700 rounded-2xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition"
    >
      <h3 className="text-lg font-semibold mb-1 text-blue-600 dark:text-blue-400">
        {event.title}
      </h3>

      <div className="text-sm text-slate-500 dark:text-slate-300">
        📅 {event.date} • 🕒 {event.time} • 📍 {event.venue}
      </div>

      <p className="mt-3 text-sm text-slate-700 dark:text-slate-200 line-clamp-2">
        {event.description?.slice(0, 120)}
        {event.description && event.description.length > 120 ? '...' : ''}
      </p>

      <div className="mt-3">
        <Link
          to={`/events/${event.id}`}
          className="inline-block mt-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition"
        >
          View Details →
        </Link>
      </div>
    </motion.div>
  )
}

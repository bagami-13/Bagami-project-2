import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function EventDetails({ events }) {
  const { id } = useParams()
  const ev = events.find(e => e.id === id)

  if (!ev) {
    return (
      <div className="max-w-2xl mx-auto text-center mt-10 p-6 bg-white dark:bg-slate-800 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-2 text-red-500">Event not found</h3>
        <Link to="/" className="text-blue-600 hover:underline dark:text-blue-400">← Back to Events</Link>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto mt-10 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md"
    >
      <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{ev.title}</h2>
      <div className="text-sm text-slate-500 dark:text-slate-300 mb-4">
        📅 {ev.date} • 🕒 {ev.time} • 📍 {ev.venue}
      </div>

      <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
        {ev.description || 'No description provided.'}
      </p>

      <div>
        <Link
          to="/"
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition"
        >
          ← Back to Events
        </Link>
      </div>
    </motion.div>
  )
}

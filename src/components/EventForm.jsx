import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function EventForm({onSubmit}){

  const [form, setForm] = useState({
    title:'', date:'', time:'', venue:'', description:''
  })
  const [error, setError] = useState('')

  const handle = (e) => {
    const {name, value} = e.target
    setForm(f => ({...f, [name]: value}))
  }

  const submit = (e) => {
    e.preventDefault()
    if(!form.title || !form.date || !form.time || !form.venue){
      setError('Please fill in title, date, time and venue.')
      return
    }
    onSubmit(form)
    setForm({title:'', date:'', time:'', venue:'', description:''})
    setError('')
  }

  return (
    <motion.form onSubmit={submit} initial={{opacity:0}} animate={{opacity:1}} className="card space-y-3">
      <div>
        <label className="block text-sm font-medium mb-1">Event Title</label>
        <input name="title" value={form.title} onChange={handle} className="input" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input type="date" name="date" value={form.date} onChange={handle} className="input" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Time</label>
          <input type="time" name="time" value={form.time} onChange={handle} className="input" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Venue</label>
        <input name="venue" value={form.venue} onChange={handle} className="input" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Description (optional)</label>
        <textarea name="description" rows="4" value={form.description} onChange={handle} className="textarea"></textarea>
      </div>
      {error && <div className="text-sm text-red-500">{error}</div>}
      <div className="flex justify-end">
        <button className="bg-brand-500 text-white px-4 py-2 rounded-md">Add Event</button>
      </div>
    </motion.form>
  )
}

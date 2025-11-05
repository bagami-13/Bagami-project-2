import React from 'react'
import { useNavigate } from 'react-router-dom'
import EventForm from '../components/EventForm'

export default function AddEvent({addEvent}){
  const navigate = useNavigate()

  const handle = (form) => {
    addEvent(form)
    navigate('/')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-3">Add New Event</h2>
      <EventForm onSubmit={handle} />
    </div>
  )
}

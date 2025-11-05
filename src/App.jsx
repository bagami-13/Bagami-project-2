import React, { useEffect, useState } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import AddEvent from "./pages/AddEvent"
import EventDetails from "./pages/EventDetails"
import About from "./pages/About"
import sampleEvents from "./data/sampleEvents"

const STORAGE_KEY = "bitxbase_events_v2"

export default function App() {
  const [events, setEvents] = useState([])
  const location = useLocation()

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      try {
        setEvents(JSON.parse(raw))
      } catch (e) {
        setEvents(sampleEvents)
      }
    } else {
      setEvents(sampleEvents)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events))
  }, [events])

  const addEvent = (ev) => {
    setEvents((prev) => [{ id: Date.now().toString(), ...ev }, ...prev])
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="container flex-1 py-6">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home events={events} />} />
            <Route path="/add" element={<AddEvent addEvent={addEvent} />} />
            <Route path="/events/:id" element={<EventDetails events={events} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}

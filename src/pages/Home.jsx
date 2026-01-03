import React, { useMemo, useState } from "react";
import HeroSection from "../components/HeroSection";
import EventCard from "../components/EventCard";

export default function Home({ events }) {
  const [q, setQ] = useState("");
  const [venue, setVenue] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  // Extract all unique venues
  const venues = useMemo(() => {
    const s = new Set(events.map((e) => e.venue));
    return Array.from(s);
  }, [events]);

  // Filter events
  const filtered = events.filter((ev) => {
    const qLower = q.trim().toLowerCase();
    if (qLower) {
      const inText = (ev.title + " " + (ev.description || ""))
        .toLowerCase()
        .includes(qLower);
      if (!inText) return false;
    }
    if (venue && ev.venue !== venue) return false;
    if (from && ev.date < from) return false;
    if (to && ev.date > to) return false;
    return true;
  });

  return (
    <div className="min-h-screen">
      {/* Cover Section */}
      <HeroSection />

      <div id="events" className="container mx-auto px-4 mt-10">
        <div className="mb-4 text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Upcoming Events
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Browse campus activities or add new ones via the Add Event page.
          </p>
        </div>

        {/* Filters */}
        <div className="card mb-6 p-4 shadow-md bg-white dark:bg-slate-800 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <input
              placeholder="Search title or description..."
              className="input border border-gray-300 dark:border-slate-600 rounded-md p-2"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <select
              className="select border border-gray-300 dark:border-slate-600 rounded-md p-2"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
            >
              <option value="">All venues</option>
              {venues.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="date"
                className="input border border-gray-300 dark:border-slate-600 rounded-md p-2"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
              <input
                type="date"
                className="input border border-gray-300 dark:border-slate-600 rounded-md p-2"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3">
            <button
              onClick={() => {
                setQ("");
                setVenue("");
                setFrom("");
                setTo("");
              }}
              className="px-3 py-1 bg-indigo-100 dark:bg-slate-700 text-indigo-700 dark:text-white rounded hover:bg-indigo-200 transition"
            >
              Clear Filters
            </button>
            <div className="text-sm text-slate-500 dark:text-slate-400 ml-auto">
              {filtered.length} result(s)
            </div>
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.length === 0 && (
            <div className="card text-center p-6 bg-slate-100 dark:bg-slate-800 rounded-lg shadow">
              No events found matching filters.
            </div>
          )}
          {filtered.map((ev) => (
            <EventCard key={ev.id} event={ev} />
          ))}
        </div>
      </div>

      {/* Floating Add Button */}
      <a
        href="/add"
        className="fab fixed bottom-6 right-6 bg-indigo-600 text-white text-3xl w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-indigo-700 transition"
        title="Add Event"
      >
        +
      </a>
    </div>
  );
}

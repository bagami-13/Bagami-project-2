import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Calendar, MapPin, Clock } from 'lucide-react';

export default function Home({ events = [] }) {
  // Safety check to prevent crashing if events are missing
  const safeEvents = events || [];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="text-center py-12 px-4 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Discover Amazing Events</h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          Join the community and explore local gatherings, workshops, and celebrations.
        </p>
      </section>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {safeEvents.length > 0 ? (
          safeEvents.map((event) => (
            <div key={event.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{event.title}</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-blue-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-blue-500" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <Link 
                  to={`/event/${event.id}`}
                  className="mt-4 block text-center py-2 px-4 rounded-xl bg-gray-100 dark:bg-gray-700 dark:text-white font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center bg-gray-50 dark:bg-gray-800/50 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 text-lg">No events found. Be the first to add one!</p>
          </div>
        )}
      </div>

      {/* Floating Plus Button - Fixed Route */}
      <Link 
        to="/add-event" 
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-5 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 z-50 flex items-center justify-center"
        title="Add New Event"
      >
        <Plus size={28} strokeWidth={2.5} />
      </Link>
    </div>
  );
}
import React from 'react';

export default function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome Back, Bagami</h1>
      <p className="text-gray-600">Your app is back online.</p>
      
      <div className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-100">
        <p>The app is now running in "Safe Mode" to stop the black screen.</p>
      </div>
    </div>
  );
}
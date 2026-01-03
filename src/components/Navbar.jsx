import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { SunIcon, MoonIcon, PlusIcon } from './Icons'

export default function Navbar(){
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('bb_theme') || 'light' } catch(e){ return 'light' }
  })
  const navigate = useNavigate()

  useEffect(()=>{
    try{
      localStorage.setItem('bb_theme', theme)
      if(theme === 'dark') document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')
    }catch(e){}
  },[theme])

  return (
    <div className="w-full flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <Link to="/" className="brand">Bitxbase Events Hub</Link>
        <nav className="hidden md:flex gap-4 text-sm text-slate-600 dark:text-slate-300">
          <NavLink to="/" end className={({isActive}) => isActive ? 'font-semibold' : ''}>Home</NavLink>
          <NavLink to="/add" className={({isActive}) => isActive ? 'font-semibold' : ''}>Add Event</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'font-semibold' : ''}>About</NavLink>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <button
          aria-label="toggle theme"
          onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
        >
          {theme === 'dark' ? <SunIcon/> : <MoonIcon/>}
        </button>

        <button
          onClick={() => navigate('/add')}
          className="hidden md:inline-flex items-center gap-2 bg-brand-500 text-white px-3 py-2 rounded-md shadow"
        >
          <PlusIcon /> Add Event
        </button>
      </div>
    </div>
  )
}

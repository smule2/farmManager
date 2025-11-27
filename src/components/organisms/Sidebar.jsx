// src/components/organisms/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-56 h-screen bg-white dark:bg-slate-800 shadow p-4">
      <NavLink to="/" className="py-2 text-sm">Dashboard</NavLink>
      <NavLink to="/animals" className="py-2 text-sm">Animals</NavLink>
      <NavLink to="/tasks" className="py-2 text-sm">Tasks</NavLink>
    </aside>
  );
}

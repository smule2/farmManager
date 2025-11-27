// src/components/layout/Layout.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden flex justify-around py-2">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-sm ${isActive ? 'font-semibold' : ''}`
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/animals"
        className={({ isActive }) =>
          `text-sm ${isActive ? 'font-semibold' : ''}`
        }
      >
        Animals
      </NavLink>

      <NavLink
        to="/tasks"
        className={({ isActive }) =>
          `text-sm ${isActive ? 'font-semibold' : ''}`
        }
      >
        Tasks
      </NavLink>
    </nav>
  );
}

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-bg dark:bg-slate-900 text-slate-900 dark:text-white">
      <header className="bg-white dark:bg-slate-800 shadow p-4 flex justify-between items-center">
        <div className="font-semibold text-lg">Checkit Farms</div>

        <div className="flex items-center gap-3">
          <button className="text-sm">Owner</button>
        </div>
      </header>

      <main className="p-4 pb-24 md:pb-6">{children}</main>

      <BottomNav />
    </div>
  );
}

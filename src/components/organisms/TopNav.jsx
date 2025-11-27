// src/components/organisms/TopNav.jsx
import React from 'react';

export default function TopNav() {
  return (
    <header className="bg-white dark:bg-slate-800 shadow p-4 flex justify-between items-center">
      <div className="font-semibold text-lg">Checkit Farms</div>

      <div className="flex items-center gap-3">
        <button className="text-sm">Owner</button>
      </div>
    </header>
  );
}

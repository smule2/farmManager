// src/components/atoms/StatusPill.jsx
import React from 'react';

export default function StatusPill({ status }) {
  const map = {
    healthy: 'bg-green-100 text-green-800',
    pregnant: 'bg-yellow-100 text-yellow-800',
    sick: 'bg-red-100 text-red-800',
    treatment: 'bg-indigo-100 text-indigo-800'
  };

  return (
    <span
      className={`px-2 py-0.5 rounded-full text-sm ${
        map[status] || 'bg-gray-100 text-gray-800'
      }`}
    >
      {status}
    </span>
  );
}

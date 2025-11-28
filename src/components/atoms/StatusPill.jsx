// src/components/atoms/StatusPill.jsx
import React from "react";

export default function StatusPill({ status }) {
  const map = {
    healthy: "bg-green-100 text-green-800",
    pregnant: "bg-yellow-100 text-yellow-800",
    sick: "bg-red-100 text-red-800",
    treatment: "bg-indigo-100 text-indigo-800",
    upcoming: "bg-blue-100 text-blue-800",
    completed: "bg-green-200 text-green-900",
  };

  return (
    <span
      className={`px-2 py-0.5 rounded-full text-sm capitalize ${
        map[status] || "bg-gray-100 text-gray-800"
      }`}
    >
      {status}
    </span>
  );
}

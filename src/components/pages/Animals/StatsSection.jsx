import React from "react";

export default function StatsSection() {
  const stats = [
    { label: "Health Score", value: 94 },
    { label: "Vaccination Coverage", value: 87 },
    { label: "Feed Efficiency", value: 91 },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h2 className="font-semibold text-gray-800 mb-3">Quick Stats</h2>

      <div className="space-y-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="flex justify-between text-sm font-medium">
              <span>{s.label}</span>
              <span>{s.value}%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                className="h-2 bg-indigo-600 rounded-full"
                style={{ width: `${s.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

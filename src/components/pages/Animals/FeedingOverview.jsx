import React from "react";

export default function FeedingOverview() {
  const overview = [
    { label: "Daily Feed (kg)", value: "12.5" },
    { label: "Weekly Total (kg)", value: "87.3" },
    { label: "Feed Type", value: "Hay + Concentrates" },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h2 className="font-semibold text-gray-800 mb-3">Feeding Overview</h2>

      <div className="space-y-2">
        {overview.map((item) => (
          <div className="flex justify-between text-sm" key={item.label}>
            <span>{item.label}</span>
            <span className="font-semibold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

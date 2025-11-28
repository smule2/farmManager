import React from "react";
import StatusPill from "../../atoms/StatusPill";

export default function TreatmentHistory() {
  const history = [
    {
      date: "2025-01-01",
      treatment: "Antibiotic Shot",
      performedBy: "Dr. Kamau",
      status: "completed",
    },
    {
      date: "2025-02-10",
      treatment: "Deworming",
      performedBy: "Dr. Achieng",
      status: "completed",
    },
    {
      date: "2025-03-15",
      treatment: "Vitamin Boost",
      performedBy: "Dr. Hassan",
      status: "upcoming",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h2 className="font-semibold text-gray-800 mb-3">Treatment History</h2>

      <div className="space-y-3">
        {history.map((item, i) => (
          <div key={i} className="border-b pb-2">
            <div className="flex justify-between">
              <span className="font-medium">{item.treatment}</span>
              <StatusPill status={item.status} />
            </div>
            <p className="text-xs text-gray-500">{item.date}</p>
            <p className="text-xs text-gray-600">
              Performed by: <span className="font-semibold">{item.performedBy}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

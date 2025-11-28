import React from "react";
import StatusPill from "../atoms/StatusPill";

export default function VaccinationTimeline() {
  const data = [
    { date: "2025-01-10", vaccine: "FMD Dose 1", status: "completed" },
    { date: "2025-02-05", vaccine: "Deworming", status: "completed" },
    { date: "2025-03-02", vaccine: "FMD Booster", status: "upcoming" },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h2 className="font-semibold text-gray-800 mb-3">
        Vaccination & Treatment Timeline
      </h2>

      <div className="space-y-3">
        {data.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <p className="font-medium">{item.vaccine}</p>
              <p className="text-xs text-gray-500">{item.date}</p>
            </div>

            <StatusPill status={item.status} />
          </div>
        ))}
      </div>
    </div>
  );
}

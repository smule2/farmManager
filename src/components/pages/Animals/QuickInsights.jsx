import React from "react";
import AlertCard from "../../atoms/Alert";

export default function QuickInsights() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm space-y-3">
      <h2 className="font-semibold text-gray-800">Insights</h2>

      <AlertCard type="info" message="Feed usage increased 15% this week" />

      <AlertCard type="warning" message="3 goats due for pregnancy check" />

      <AlertCard
        type="danger"
        message="Vaccination campaign due in 2 weeks"
      />

      <AlertCard type="success" message="Average weight gain on track" />
    </div>
  );
}

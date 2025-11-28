import React from "react";

export default function FinancialSummary() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h2 className="font-semibold text-gray-800 mb-3">Financial Summary</h2>

      <div className="space-y-2 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Total Investment</span>
          <span className="font-semibold">$12,450</span>
        </div>

        <div className="flex justify-between">
          <span>Expected Revenue</span>
          <span className="font-semibold text-green-600">$28,200</span>
        </div>

        <div className="flex justify-between">
          <span>Projected Profit</span>
          <span className="font-semibold text-indigo-600">$15,750</span>
        </div>
      </div>
    </div>
  );
}

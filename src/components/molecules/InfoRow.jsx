// src/components/molecules/InfoRow.jsx
import React from 'react';

export default function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between py-2 border-b">
      <span className="text-slate-500 text-sm">{label}</span>
      <span className="text-slate-900 font-medium">{value}</span>
    </div>
  );
}

import React from 'react';
import SummaryCard from '../molecules/SummaryCard';
import Heading from '../atoms/Heading';

export default function DashboardPage() {
  // use placeholder numbers for now
  const goats = { total: 40, pregnant: 12, sick: 3, treatment: 2 };
  const cows = { total: 20, pregnant: 5, sick: 1 };
  const pigs = { total: 30, pregnant: 6, sick: 2 };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Heading level={1} className='text-red-500'>Farm Overview</Heading>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard title="Goats" value={goats.total} subtitle={`Pregnant: ${goats.pregnant} • Sick: ${goats.sick}`} />
        <SummaryCard title="Cows" value={cows.total} subtitle={`Pregnant: ${cows.pregnant} • Sick: ${cows.sick}`} />
        <SummaryCard title="Pigs" value={pigs.total} subtitle={`Pregnant: ${pigs.pregnant} • Sick: ${pigs.sick}`} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Heading level={2}>Today's Priorities</Heading>
          <div className="mt-3 space-y-2">
            <div className="p-3 border rounded flex justify-between items-center">
              <div>3 animals need medication</div>
              <div className="text-sm text-slate-500">High</div>
            </div>
            <div className="p-3 border rounded flex justify-between items-center">
              <div>1 birth expected today</div>
              <div className="text-sm text-slate-500">Medium</div>
            </div>
          </div>
        </div>

        <div>
          <Heading level={2}>Insights</Heading>
          <div className="mt-3 p-3 border rounded text-sm text-slate-600">Feed stock for Oxytet low — reorder suggested.</div>
        </div>
      </div>
    </div>
  );
}

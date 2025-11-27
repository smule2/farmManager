import React, { useState } from 'react';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';

export default function OnboardingPage() {
  const [rows, setRows] = useState([]);

  function handlePasteExample() {
    // small helper to create sample data you or boss can edit later
    const sample = [
      { tag: 'G-001', species: 'goat', sex: 'female', purchase_cost: '2000', section: 'female-pen' },
      { tag: 'G-002', species: 'goat', sex: 'male', purchase_cost: '1800', section: 'male-pen' }
    ];
    setRows(sample);
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Heading level={1}>Onboard Animals</Heading>
      <p className="text-sm text-slate-500 mt-2">Paste or type sample animal data to seed the app for development (later we will accept CSV uploads).</p>

      <div className="mt-4 space-y-3">
        <Button onClick={handlePasteExample}>Load sample data</Button>
        <div className="border rounded p-3">
          <pre className="text-xs">{JSON.stringify(rows, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

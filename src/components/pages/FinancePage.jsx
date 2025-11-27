import React from 'react';
import Heading from '../components/atoms/Heading';

export default function FinancePage() {
  return (
    <div className="max-w-5xl mx-auto">
      <Heading level={1}>Finance</Heading>
      <div className="mt-4">Income & Expenses will show here (period toggle to be added).</div>
    </div>
  );
}

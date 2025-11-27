import React from 'react';
import Heading from '../../atoms/Heading';
import StatusPill from '../../atoms/StatusPill';

export default function AnimalProfilePage() {
  // placeholder data for now
  const animal = { tag: 'G-001', species: 'goat', status: 'healthy', weight: 25 };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        <Heading level={1}>Animal {animal.tag}</Heading>
        <StatusPill status={animal.status} />
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <div className="p-3 border rounded">Species: {animal.species}</div>
          <div className="p-3 border rounded">Weight: {animal.weight} kg</div>
        </div>

        <div className="space-y-3">
          <div className="p-3 border rounded">Recent events</div>
          <div className="p-3 border rounded">Health history</div>
        </div>
      </div>
    </div>
  );
}

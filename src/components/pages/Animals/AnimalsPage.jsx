import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Button from '../../atoms/Button';
import AnimalForm from './AnimalForm';
import GroupOverview from './GroupOverview';
import GoatsDetailPage from './GoatsDetailPage';

export default function AnimalsPage() {
  const [currentView, setCurrentView] = useState('overview');
  const [showForm, setShowForm] = useState(false);

  const groupsData = [
    {
      id: 'goats',
      name: 'Goats',
      species: 'Capra aegagrus hircus',
      icon: '🐐',
      total: 45,
      males: 12,
      females: 33,
      healthy: 43,
      pregnant: 8,
      totalValue: 45000
    },
    {
      id: 'chickens',
      name: 'Chickens',
      species: 'Gallus gallus domesticus',
      icon: '🐔',
      total: 120,
      males: 20,
      females: 100,
      healthy: 118,
      pregnant: 15,
      totalValue: 6000
    },
    {
      id: 'cows',
      name: 'Cows',
      species: 'Bos taurus',
      icon: '🐄',
      total: 25,
      males: 3,
      females: 22,
      healthy: 24,
      pregnant: 5,
      totalValue: 125000
    }
  ];

  const handleFormSubmit = (data) => {
    console.log('Form submitted:', data);
    setShowForm(false);
    // Add your API call here to save the animal
    alert('Animal added successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {showForm ? (
          <AnimalForm
            onSubmit={handleFormSubmit}
            onCancel={() => setShowForm(false)}
          />
        ) : currentView === 'overview' ? (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Animals Management</h1>
                <p className="text-gray-600 mt-1">Manage and monitor all farm animals</p>
              </div>
              <Button variant="primary" onClick={() => setShowForm(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Add Animal
              </Button>
            </div>
            <GroupOverview
              groups={groupsData}
              onGroupClick={(id) => setCurrentView(id)}
            />
          </div>
        ) : (
          <GoatsDetailPage onBack={() => setCurrentView('overview')} />
        )}
      </div>
    </div>
  );
}
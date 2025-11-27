import React from 'react';
import { Plus, Search, Filter, Users, Heart, Activity, DollarSign } from 'lucide-react';
import SummaryCard from '../../molecules/SummaryCard';
import InfoBadge from '../../molecules/InfoBadge';
import Card from '../../atoms/Card';
import Button from '../../atoms/Button';

export default function GoatsDetailPage({ onBack }) {
  const goatsData = {
    total: 45,
    males: 12,
    females: 33,
    pregnant: 8,
    young: 15,
    mature: 30,
    healthy: 43,
    sick: 2,
    avgAge: '2.3 years',
    totalValue: 45000,
    avgValue: 1000
  };

  const recentAnimals = [
    { id: 'G001', breed: 'Boer', age: '2y', gender: 'Female', health: 'Excellent', section: 'Barn A' },
    { id: 'G002', breed: 'Saanen', age: '1.5y', gender: 'Male', health: 'Good', section: 'Barn A' },
    { id: 'G003', breed: 'Boer', age: '3y', gender: 'Female', health: 'Excellent', section: 'Barn B' },
    { id: 'G004', breed: 'Alpine', age: '2.5y', gender: 'Female', health: 'Good', section: 'Barn B' }
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={onBack}>
              ← Back
            </Button>
            <h2 className="text-3xl font-bold text-gray-900">🐐 Goats Management</h2>
          </div>
          <p className="text-gray-600 mt-1 ml-20">
            Detailed overview and management of goat population
          </p>
        </div>
        <Button variant="primary">
          <Plus className="w-4 h-4 mr-2" />
          Add Goat
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <SummaryCard
          title="Total Goats"
          value={goatsData.total}
          icon={Users}
          color="emerald"
          trend="+5 this month"
        />
        <SummaryCard
          title="Health Rate"
          value="96%"
          subtitle={`${goatsData.healthy} healthy`}
          icon={Heart}
          color="red"
        />
        <SummaryCard
          title="Pregnant Females"
          value={goatsData.pregnant}
          subtitle={`${goatsData.females} total females`}
          icon={Activity}
          color="purple"
        />
        <SummaryCard
          title="Total Value"
          value={`$${goatsData.totalValue.toLocaleString()}`}
          subtitle={`Avg: $${goatsData.avgValue}`}
          icon={DollarSign}
          color="amber"
        />
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <h3 className="text-sm font-medium text-gray-600 mb-4">Gender Distribution</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Males</span>
              <span className="font-bold text-blue-600">{goatsData.males}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Females</span>
              <span className="font-bold text-pink-600">{goatsData.females}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-linear-to-r from-blue-600 to-pink-600 h-2 rounded-full"
                style={{ width: `${(goatsData.females / goatsData.total) * 100}%` }}
              />
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-sm font-medium text-gray-600 mb-4">Age Distribution</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Young (&lt;1y)</span>
              <span className="font-bold text-emerald-600">{goatsData.young}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Mature (1y+)</span>
              <span className="font-bold text-emerald-600">{goatsData.mature}</span>
            </div>
            <div className="pt-2 border-t">
              <span className="text-sm text-gray-600">Average Age: </span>
              <span className="font-semibold text-gray-900">{goatsData.avgAge}</span>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-sm font-medium text-gray-600 mb-4">Health Overview</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Healthy</span>
              <span className="font-bold text-emerald-600">{goatsData.healthy}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Under Treatment</span>
              <span className="font-bold text-amber-600">{goatsData.sick}</span>
            </div>
            <div className="flex gap-2 pt-2 border-t">
              <InfoBadge label="Status" value="Excellent" variant="success" />
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Animals Table */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Recent Animals</h3>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
            <Button variant="ghost" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">ID</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Breed</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Age</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Gender</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Health</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Section</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentAnimals.map((animal) => (
                <tr key={animal.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{animal.id}</td>
                  <td className="py-3 px-4 text-gray-700">{animal.breed}</td>
                  <td className="py-3 px-4 text-gray-700">{animal.age}</td>
                  <td className="py-3 px-4">
                    <InfoBadge
                      value={animal.gender}
                      variant={animal.gender === 'Male' ? 'info' : 'default'}
                    />
                  </td>
                  <td className="py-3 px-4">
                    <InfoBadge
                      value={animal.health}
                      variant={animal.health === 'Excellent' ? 'success' : 'default'}
                    />
                  </td>
                  <td className="py-3 px-4 text-gray-700">{animal.section}</td>
                  <td className="py-3 px-4">
                    <Button variant="ghost" size="sm">View</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
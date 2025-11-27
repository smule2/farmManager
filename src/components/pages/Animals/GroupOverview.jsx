import React from 'react';
import { Users, Activity, DollarSign, Heart,PawPrint } from 'lucide-react';
import SummaryCard from '../../molecules/SummaryCard';
import InfoBadge from '../../molecules/InfoBadge';
import Card from '../../atoms/Card';
import AlertCard from '../../atoms/Alert';
import Button from '../../atoms/Button';

export default function GroupOverview({ groups, onGroupClick }) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Animal Groups Overview</h2>
        <p className="text-gray-600 mt-1">Summary of all animal groups on the farm</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <SummaryCard
          title="Total Animals"
          value={groups.reduce((sum, g) => sum + g.total, 0)}
          icon={PawPrint}
          color="emerald"
          trend="+12 this month"
        />
        <SummaryCard
          title="Active Groups"
          value={groups.length}
          icon={Activity}
          color="blue"
          subtitle="All groups healthy"
        />
        <SummaryCard
          title="Total Value"
          value={`$${groups.reduce((sum, g) => sum + g.totalValue, 0).toLocaleString()}`}
          icon={DollarSign}
          color="amber"
          trend="+8% from last month"
        />
        <SummaryCard
          title="Health Status"
          value="98%"
          icon={Heart}
          color="red"
          subtitle="Excellent condition"
        />
       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <Card
            key={group.id}
            className="hover:shadow-lg transition-all cursor-pointer group"
            onClick={() => onGroupClick(group.id)}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {group.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{group.species}</p>
              </div>
              <div className="text-3xl">{group.icon}</div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Animals</span>
                <span className="font-semibold text-gray-900">{group.total}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Males</span>
                <span className="font-semibold text-gray-900">{group.males}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Females</span>
                <span className="font-semibold text-gray-900">{group.females}</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t">
                <span className="text-sm text-gray-600">Total Value</span>
                <span className="font-bold text-emerald-600">
                  ${group.totalValue.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <InfoBadge label="Healthy" value={group.healthy} variant="success" />
              <InfoBadge label="Pregnant" value={group.pregnant} variant="info" />
              <InfoBadge label="Medication" value={group.medication} variant="danger" />
              <InfoBadge label="Kids" value={group.kids} variant="kids" />


            </div>
            <div className='mt-4'>
              <AlertCard 
              type="warning" 
              message="3 overdue vaccinations" 
            />
            </div>
            <div className='mt-4 flex gap-2'>
              <Button>View group</Button>
              <Button>add new group</Button>
            </div>
            
          </Card>
        ))}
      </div>
    </div>
  );
}
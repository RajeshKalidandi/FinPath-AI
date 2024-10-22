import React from 'react';
import { Target } from 'lucide-react';

const GoalsTracking: React.FC = () => {
  const goals = [
    { name: 'Emergency Fund', current: 5000, target: 10000 },
    { name: 'Vacation', current: 2000, target: 5000 },
    { name: 'New Car', current: 15000, target: 30000 },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Goals Tracking</h2>
      <div className="space-y-4">
        {goals.map((goal, index) => (
          <div key={index} className="flex items-center">
            <Target className="h-8 w-8 text-indigo-500 mr-3" />
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{goal.name}</span>
                <span className="text-sm font-medium text-gray-700">
                  ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-indigo-500 h-2.5 rounded-full"
                  style={{ width: `${(goal.current / goal.target) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalsTracking;
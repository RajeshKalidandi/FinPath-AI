import React from 'react';
import { Lightbulb } from 'lucide-react';

const AIInsights: React.FC = () => {
  const insights = [
    "You've been spending 20% more on dining out this month. Consider cooking at home to save money.",
    "Your emergency fund is below the recommended 3-month expenses. Try to increase your savings.",
    "You're on track to reach your vacation savings goal by August. Keep it up!",
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">AI Insights</h2>
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className="flex items-start">
            <Lightbulb className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0 mt-1" />
            <p className="text-sm text-gray-700">{insight}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIInsights;

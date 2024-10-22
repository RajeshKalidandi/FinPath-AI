import React from 'react';

const BudgetSummary: React.FC = () => {
  const categories = [
    { name: 'Housing', spent: 1200, budget: 1500, color: 'bg-blue-500' },
    { name: 'Food', spent: 400, budget: 500, color: 'bg-green-500' },
    { name: 'Transportation', spent: 200, budget: 300, color: 'bg-yellow-500' },
    { name: 'Entertainment', spent: 150, budget: 200, color: 'bg-red-500' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Budget Summary</h2>
      {categories.map((category) => (
        <div key={category.name} className="mb-4">
          <div className="flex justify-between mb-1">
            <span>{category.name}</span>
            <span>${category.spent} / ${category.budget}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className={`${category.color} h-2.5 rounded-full`}
              style={{ width: `${(category.spent / category.budget) * 100}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BudgetSummary;

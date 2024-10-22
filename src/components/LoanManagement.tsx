import React from 'react';
import { DollarSign } from 'lucide-react';

const LoanManagement: React.FC = () => {
  const loans = [
    { name: 'Student Loan', balance: 15000, dueDate: '2023-06-15', payment: 250 },
    { name: 'Car Loan', balance: 8000, dueDate: '2023-06-20', payment: 300 },
    { name: 'Personal Loan', balance: 5000, dueDate: '2023-06-25', payment: 200 },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Loan Management</h2>
      <div className="space-y-4">
        {loans.map((loan, index) => (
          <div key={index} className="flex items-center justify-between border-b pb-2">
            <div>
              <h3 className="font-medium">{loan.name}</h3>
              <p className="text-sm text-gray-500">Due: {loan.dueDate}</p>
            </div>
            <div className="text-right">
              <p className="font-medium">${loan.balance.toLocaleString()}</p>
              <button className="bg-indigo-500 text-white px-3 py-1 rounded text-sm mt-1 hover:bg-indigo-600 transition-colors">
                Pay ${loan.payment}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanManagement;

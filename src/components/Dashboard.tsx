import React from 'react';
import SpendingOverview from './SpendingOverview';
import BudgetSummary from './BudgetSummary';
import GoalsTracking from './GoalsTracking';
import LoanManagement from './LoanManagement';
import AIInsights from './AIInsights';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Financial Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SpendingOverview />
        <BudgetSummary />
        <GoalsTracking />
        <LoanManagement />
        <AIInsights />
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';
import { Home, PieChart, Target, DollarSign, Zap } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-indigo-600 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <div className="flex items-center space-x-2 px-4">
        <span className="text-2xl font-extrabold">FinPath AI</span>
      </div>
      <nav>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white">
          <Home className="inline-block mr-2" size={20} />
          Dashboard
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white">
          <PieChart className="inline-block mr-2" size={20} />
          Spending
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white">
          <Target className="inline-block mr-2" size={20} />
          Goals
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white">
          <DollarSign className="inline-block mr-2" size={20} />
          Loans
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white">
          <Zap className="inline-block mr-2" size={20} />
          AI Insights
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;

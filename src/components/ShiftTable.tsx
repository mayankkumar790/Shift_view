// components/ShiftTable.tsx
import React from 'react';
import EmployeeRow from './EmployeeRow';
import { groups } from '../data'; // Import from data file
import { Settings } from 'lucide-react';

const ShiftTable: React.FC = () => {
  return (
    <div className="p-4 pr-0">
      {groups.map((group) => (
        <div key={group.name}>
          <div className="flex items-center justify-between p-2 dark:bg-gray-800 cursor-pointer font-semibold">
            <div><span className="mr-2">▼</span> {group.name} ({group.count})</div>
            {/* Settings */}
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
          {group.employees.map((employee, index) => (
            <EmployeeRow key={index} employee={employee} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ShiftTable;
import React, { useEffect, useState } from 'react';
import {
  LayoutDashboard,
  Calendar,
  Users,
  BarChart3,
  Grid3X3,
  Settings,
  ChevronLeft,
  Minimize2
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Sidebar: React.FC = () => {
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, active: false },
    { name: 'Shifts', icon: Calendar, active: true },
    { name: 'Employees', icon: Users, active: false },
    { name: 'Reports', icon: BarChart3, active: false },
    { name: 'Item 5', icon: Grid3X3, active: false },

  ];

  const [isMinimized, setIsMinimized] = useState(false)

  return (
    <div className="w-fit h-screen bg-slate-800 text-gray-300 flex flex-col">
      {/* Header with minimize button */}
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center justify-between">
          {!isMinimized && <span className="text-gray-400 text-sm font-medium">Minimize</span>}
          <ChevronLeft className="w-4 h-4 text-gray-400" onClick={() => setIsMinimized(!isMinimized)} />
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 py-6 px-4 space-y-2">
        {navItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={`${item.name}-${index}`}
              className={`flex items-center space-x-3 px-3 py-3 rounded-lg cursor-pointer transition-all duration-200 ${item.active
                  ? 'bg-slate-700 text-white shadow-lg'
                  : 'text-gray-400 hover:bg-slate-700/50 hover:text-gray-300'
                }`}
            >
              <IconComponent className="w-5 h-5" />
              {!isMinimized && <span className="font-medium">{item.name}</span>}
            </div>
          );
        })}
      </div>

      {/* Settings */}
      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center space-x-3 px-3 py-3 rounded-lg cursor-pointer text-gray-400 hover:bg-slate-700/50 hover:text-gray-300 transition-all duration-200">
          <Settings className="w-5 h-5" />
          {!isMinimized && <span className="font-medium">Settings</span>}
        </div>
        {/* <div className="flex items-center space-x-3 px-3 py-3 rounded-lg cursor-pointer text-gray-400 hover:bg-slate-700/50 hover:text-gray-300 transition-all duration-200">
          <ThemeToggle theme={theme} setTheme={setTheme} isMinimized={isMinimized} />
        </div> */}
      </div>

      {/* Footer with company name and logo */}
      <div className="p-4 border-t border-slate-700">
        <div className={`flex items-center ${isMinimized ? 'justify-center' : 'space-x-3'} group relative`}>
          <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center flex-shrink-0">
            <div className="w-4 h-4 bg-slate-800 rounded-sm"></div>
          </div>
          {!isMinimized && (
            <span className="font-semibold text-white">Entie LD</span>
          )}

          {/* Tooltip for minimized state */}
          {isMinimized && (
            <div className="absolute left-full ml-2 px-2 py-1 bg-slate-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              Entie LD
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
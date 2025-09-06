import React, { useState } from 'react';
import { Settings, ChevronDown, Users, Calendar, Filter, ArrowRight } from 'lucide-react';

const CompleteScheduleHeader: React.FC = () => {
  const [activeView, setActiveView] = useState<'shift' | 'staff'>('staff');
  const [statusFilter, setStatusFilter] = useState('All');
  const [teamFilter, setTeamFilter] = useState('All');
  const [timeView, setTimeView] = useState<'week' | 'month'>('week');
  const [currentPeriod, setCurrentPeriod] = useState('Current Week');
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showTeamDropdown, setShowTeamDropdown] = useState(false);
  const [showPeriodDropdown, setShowPeriodDropdown] = useState(false);

  const statusOptions = ['All', 'Active', 'Inactive', 'On Leave'];
  const teamOptions = ['All', 'Engineering', 'Design', 'Marketing', 'Sales'];
  const periodOptions = ['Current Week', 'Next Week', 'Previous Week', 'Custom Range'];

  const weekData = [
    { day: 'MON', date: '22', hours: '12h', cost: '$1.2k', active: false },
    { day: 'TUE', date: '23', hours: '12h', cost: '$1.2k', active: true },
    { day: 'WED', date: '24', hours: '12h', cost: '$1.2k', isOverBudget: true, active: false },
    { day: 'THU', date: '25', hours: '12h', cost: '$1.2k', active: false },
    { day: 'FRI', date: '26', hours: '12h', cost: '$1.2k', active: false },
    { day: 'MON', date: '22', hours: '12h', cost: '$1.2k', active: false },
    { day: 'SUN', date: '28', hours: '12h', cost: '$1.2k', active: false }
  ];

  return (
    <div className="bg-white">
      {/* Top Filter Bar */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {/* Left side filters */}
          <div className="flex items-center space-x-3">
            {/* View Toggle */}
            <div className="flex items-center bg-gray-50 rounded-lg p-1">
              <button
                onClick={() => setActiveView('shift')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeView === 'shift'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Shift view</span>
              </button>
              <button
                onClick={() => setActiveView('staff')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeView === 'staff'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Staff view</span>
              </button>
            </div>

            {/* Status Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowStatusDropdown(!showStatusDropdown)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-700 transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span>Status</span>
                <span className="text-gray-900">{statusFilter}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {showStatusDropdown && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {statusOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setStatusFilter(option);
                        setShowStatusDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Team Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowTeamDropdown(!showTeamDropdown)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-700 transition-colors"
              >
                <Users className="w-4 h-4" />
                <span>Team</span>
                <span className="text-gray-900">{teamFilter}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {showTeamDropdown && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {teamOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setTeamFilter(option);
                        setShowTeamDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Advanced Filter */}
            <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors">
              <span>+ Advanced filter</span>
            </button>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-3">
            {/* Time View Toggle */}
            <div className="flex items-center bg-gray-50 rounded-lg p-1">
              <button
                onClick={() => setTimeView('week')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  timeView === 'week'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Week
              </button>
              <button
                onClick={() => setTimeView('month')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  timeView === 'month'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Month
              </button>
            </div>

            {/* Period Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowPeriodDropdown(!showPeriodDropdown)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-900 transition-colors"
              >
                <span>{currentPeriod}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {showPeriodDropdown && (
                <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {periodOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setCurrentPeriod(option);
                        setShowPeriodDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Header */}
      <div className="bg-[#EDE9F5] border-b border-gray-200">
        <div className="p-0.1">
          <div className="flex">
            {/* Week and Budget Column */}
            <div className="w-70 flex-shrink-0 pl-8 py-1">
              <div className="text-sm text-gray-600 font-medium mb-1">W33</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">$16.5k</div>
              <button className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors">
                <span>Weekly Budget</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Days Grid */}
            <div className="flex flex-1 gap-0.5">
              {weekData.map((day, index) => (
                <div key={`${day.day}-${index}`} className={`flex-1 rounded p-2 ${day.active ? "" : "bg-white"}`}>
                  <div className="">
                    {/* Day Name */}
                    <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                      {day.day}
                    </div>
                    
                    {/* Date */}
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {day.date}
                    </div>
                    
                    {/* Hours and Cost */}
                    <div className="flex space-x-2 text-sm">
                      <span className="text-gray-600">{day.hours}</span>
                      <span className="text-gray-400">·</span>
                      <span className={`font-semibold ${
                        day.isOverBudget ? 'text-red-500' : 'text-gray-900'
                      }`}>
                        {day.cost}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteScheduleHeader;
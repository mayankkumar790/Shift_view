'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TopFilterBar from './components/TopFilterBar';
import ShiftTable from './components/ShiftTable';
import FAB from './components/FAB';

const Home: React.FC = () => {
  
  return (
    <div className="flex h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden">
      <Sidebar />
      <div className='p-2 bg-slate-800 dark:bg-slate-800 h-screen w-full overflow-hidden'>
        {/* Theme Toggle - You can position this wherever you want */}
           
        <div className="flex-1 rounded-2xl bg-white dark:bg-gray-800 h-full overflow-y-scroll">
          <TopFilterBar />
          <ShiftTable />
        </div>
      </div>
      <FAB />
    </div>
  );
};

export default Home;
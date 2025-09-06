'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TopFilterBar from './components/TopFilterBar';
import ShiftTable from './components/ShiftTable';
import FAB from './components/FAB';

const Home: React.FC = () => {
  
  return (
    <div className="flex h-screen bg-white text-gray-900 overflow-hidden">
      <Sidebar />
      <div className='p-2 bg-slate-800 h-screen w-full overflow-hidden'>
        {/* Theme Toggle - You can position this wherever you want */}
           
        <div className="flex-1 rounded-2xl bg-white h-full overflow-y-scroll">
          <TopFilterBar />
          <ShiftTable />
        </div>
      </div>
      <FAB />
    </div>
  );
};

export default Home;
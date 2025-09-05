// app/page.tsx (Combined page)
'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import TopFilterBar from '../components/TopFilterBar';
import ShiftTable from '../components/ShiftTable';
import FAB from '../components/FAB';
import ThemeToggle from '../components/ThemeToggle';

const Home: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden">
      <Sidebar />
      <div className='p-2 bg-slate-800 h-screen w-full overflow-hidden'>
        <div className="flex-1 rounded-2xl bg-white h-full overflow-y-scroll">
          <TopFilterBar />
          <ShiftTable />
        </div>
      </div>
      <FAB />
      {/* <ThemeToggle theme={theme} setTheme={setTheme} /> */}
    </div>
  );
};

export default Home;
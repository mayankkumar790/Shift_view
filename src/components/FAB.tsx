// components/FAB.tsx
import React from 'react';

const FAB: React.FC = () => {
  return (
    <button className="fixed bottom-8 right-8 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg hover:bg-blue-600">
      +
    </button>
  );
};

export default FAB;
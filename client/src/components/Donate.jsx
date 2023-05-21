import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Donate = () => {
  const [selectedType, setSelectedType] = useState('perishable');

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  return (
    <div className='w-full h-full flex flex-col p-5'>
      <div className='switchp w-full h-1/8 bg-white flex justify-center gap-10'>
        <Link
          className={`switch m-7 pb-2 ${selectedType === 'perishable' ? 'border-b-4 border-red-500' : ''}`}
          to='perishable'
          onClick={() => handleTypeChange('perishable')}
        >
          Perishable
        </Link>
        <Link
          className={`switch m-7 pb-2 ${selectedType === 'nonperishable' ? 'border-b-4 border-red-500' : ''}`}
          to='nonperishable'
          onClick={() => handleTypeChange('nonperishable')}
        >
          Nonperishable
        </Link>
      </div>

      <div className='w-full h-7/8'>
        <Outlet />
      </div>
    </div>
  );
};

export default Donate;

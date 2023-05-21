import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const DonationDashboard = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="w-full h-full flex">
      <div className="sidenav w-1/6 h-full bg-white shadow-lg flex flex-col">
        <h1 className="font-bold self-center mt-10">Donation Dashboard</h1>
        <div className="sidenav-menu self-center w-full gap-5 h-1/3 p-8 flex flex-col">
          <Link
            className={`sidenav-btn ${activeLink === 'donate' ? 'border-b-4 border-red-500' : ''}`}
            to="donate"
            onClick={() => handleLinkClick('donate')}
          >
            Donate
          </Link>
          <Link
            className={`sidenav-btn ${activeLink === 'my-donations' ? 'border-b-4 border-red-500' : ''}`}
            to="my-donations"
            onClick={() => handleLinkClick('my-donations')}
          >
            My Donations
          </Link>
          <Link
            className={`sidenav-btn ${activeLink === 'profile' ? 'border-b-4 border-red-500' : ''}`}
            to="profile"
            onClick={() => handleLinkClick('profile')}
          >
            Profile
          </Link>
        </div>
      </div>

      <div className="w-5/6 h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DonationDashboard;

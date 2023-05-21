// import React, { useState } from 'react';

// const MyDonations = ({ donationData }) => {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">My Donations</h1>
//       <ul className="bg-white rounded-lg shadow-md p-4">
//         {donationData.map((donation, index) => (
//           <li
//             key={index}
//             className="flex items-center justify-between py-2 border-b border-gray-200"
//           >
//             <span className="text-lg">{donation.donorName}</span>
//             <span className="text-lg font-bold">${donation.donationAmount}</span>
//             {/* Display additional donation details */}
//             <span className="text-sm text-gray-500">
//               Perishable: {donation.perishable ? 'Yes' : 'No'}
//             </span>
//             {/* Add more donation details as needed */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MyDonations;
import React from 'react';

const MyDonations = () => {
  const donationData = [
    {
      donorName: 'John Doe',
      donationAmount: 100,
      perishable: true,
      itemType: 'Vegetables',
      quantity: 10,
      shelfLife: '3 days',
      operatingHours: '9 AM - 5 PM',
      partialGiveout: false,
      refrigeration: true,
      pickup: true
    },
    {
      donorName: 'Jane Smith',
      donationAmount: 50,
      perishable: false,
      itemType: 'Canned goods',
      quantity: 20,
      shelfLife: '1 year',
      operatingHours: '10 AM - 6 PM',
      partialGiveout: true,
      refrigeration: false,
      pickup: false
    },
    // Add more dummy donation data as needed
  ];

  return (
    <div className='p-5'>
      <h1 className="text-2xl font-bold mb-4">My Donations</h1>
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">Donor Name</th>
            <th className="py-2 px-4 border-b border-gray-200">Amount</th>
            <th className="py-2 px-4 border-b border-gray-200">Perishable</th>
            <th className="py-2 px-4 border-b border-gray-200">Item Type</th>
            <th className="py-2 px-4 border-b border-gray-200">Quantity</th>
            <th className="py-2 px-4 border-b border-gray-200">Shelf Life</th>
            <th className="py-2 px-4 border-b border-gray-200">Operating Hours</th>
            <th className="py-2 px-4 border-b border-gray-200">Partial Giveout</th>
            <th className="py-2 px-4 border-b border-gray-200">Refrigeration</th>
            <th className="py-2 px-4 border-b border-gray-200">Pickup</th>
          </tr>
        </thead>
        <tbody>
          {donationData.map((donation, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b border-gray-200">{donation.donorName}</td>
              <td className="py-2 px-4 border-b border-gray-200">${donation.donationAmount}</td>
              <td className="py-2 px-4 border-b border-gray-200">{donation.perishable ? 'Yes' : 'No'}</td>
              <td className="py-2 px-4 border-b border-gray-200">{donation.itemType}</td>
              <td className="py-2 px-4 border-b border-gray-200">{donation.quantity}</td>
              <td className="py-2 px-4 border-b border-gray-200">{donation.shelfLife}</td>
              <td className="py-2 px-4 border-b border-gray-200">{donation.operatingHours}</td>
              <td className="py-2 px-4 border-b border-gray-200">{donation.partialGiveout ? 'Yes' : 'No'}</td>
              <td className="py-2 px-4 border-b border-gray-200">{donation.refrigeration ? 'Yes' : 'No'}</td>
              <td className="py-2 px-4 border-b border-gray-200">{donation.pickup ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyDonations;

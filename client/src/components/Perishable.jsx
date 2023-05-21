

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Perishable = () => {
    const [location, setLocation] = useState('');
    const [ready, setReady] = useState('');
    const [itemType, setItemType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [refrigeration, setRefrigeration] = useState(false);
    const [shelfLife, setShelfLife] = useState('');
    const [pickup, setPickup] = useState(false);
    const [partialGiveout, setPartialGiveout] = useState(false);
    const [OperatingHours, setOperatingHours] = useState('');
  
    
  
    const handleLocationChange = (event) => {
      setLocation(event.target.value);
    };
  
    const handleReadyChange = (event) => {
      setReady(event.target.value);
    };
  
    const handleItemTypeChange = (event) => {
      setItemType(event.target.value);
    };
  
    const handleQuantityChange = (event) => {
      setQuantity(event.target.value);
    };
  
    const handleRefrigerationChange = (event) => {
      setRefrigeration(event.target.checked);
    };
  
    const handleShelfLifeChange = (event) => {
      setShelfLife(event.target.value);
    };
  
    const handlePickupChange = (event) => {
      setPickup(event.target.checked);
    };
  
    const handlePartialGiveoutChange = (event) => {
      setPartialGiveout(event.target.checked);
    };
  
    const handleOperatingHoursChange = (event) => {
      setOperatingHours(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
  

    // Perform submission logic here
    // You can access the form data (selectedOption, location, ready, etc.) and submit it to an API or perform any other action

    // Reset the form
   // Reset the form fields after submission
   setLocation('');
   setReady('');
   setItemType('');
   setQuantity('');
   setRefrigeration(false);
   setShelfLife('');
   setPickup(false);
   setPartialGiveout(false);
   setOperatingHours('');
 };
  return (
    <div className='h-full w-full flex flex-col'>
        
      <div className="flex flex-col items-center w-1/3 self-center">
      <form onSubmit={handleSubmit} className="w-full bg-white p-6 rounded-sm shadow-lg">
        <h2 className="text-2xl mb-6">Donation form</h2>
        <label className="flex flex-col mb-4">
          Location:
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            className="border border-gray-300 rounded p-2"
            placeholder="Enter location"
          />
        </label>
        <label className="flex flex-col mb-4">
          When Ready:
          <input
            type="text"
            value={ready}
            onChange={handleReadyChange}
            className="border border-gray-300 rounded p-2"
            placeholder="Enter when ready"
          />
        </label>
        <label className="flex flex-col mb-4">
          Item Type:
          <input
            type="text"
            value={itemType}
            onChange={handleItemTypeChange}
            className="border border-gray-300 rounded p-2"
            placeholder="Enter item type"
          />
        </label>
        <label className="flex flex-col mb-4">
          Quantity:
          <input
            type="text"
            value={quantity}
            onChange={handleQuantityChange}
            className="border border-gray-300 rounded p-2"
            placeholder="Enter quantity"
          />
        </label>
        <label className="flex flex-col mb-4">
          Shelf Life:
          <input
            type="text"
            value={shelfLife}
            onChange={handleShelfLifeChange}
            className="border border-gray-300 rounded p-2"
            placeholder="Enter shelf life"
          />
        </label>
        <label className="flex flex-col mb-4">
          Operating Hours:
          <input
            type="text"
            value={OperatingHours}
            onChange={handleOperatingHoursChange}
            className="border border-gray-300 rounded p-2"
            placeholder="Enter operating hours"
          />
        </label>
        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={partialGiveout}
            onChange={handlePartialGiveoutChange}
            className="mr-2"
          />
          Partial Giveout
        </label>
        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={refrigeration}
            onChange={handleRefrigerationChange}
            className="mr-2"
          />
          Refrigeration
        </label>
        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={pickup}
            onChange={handlePickupChange}
            className="mr-2"
          />
          Pickup
        </label>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
        <Link to="/donation">Donate Now</Link>
        </div>
    );
};

export default Perishable;


// const Perishable = () => {
//   const [donorName, setDonorName] = useState('');
//   const [donationAmount, setDonationAmount] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Perform form submission logic here

//         // Reset form fields
//         setDonorName('');
//         setDonationAmount('');
//     };

//     return (
//         <div>
//         <h1>Donate Form</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Donor Name:
//                     <input
//                         type="text"
//                         value={donorName}
//                         onChange={(e) => setDonorName(e.target.value)}
//                     />
//                 </label>
//                 <label>
//                     Donation Amount:
//                     <input
//                         type="number"
//                         value={donationAmount}
//                         onChange={(e) => setDonationAmount(e.target.value)}
//                     />
//                 </label>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default DonateForm;

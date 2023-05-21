import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Next = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [location, setLocation] = useState('');
    const [ready, setReady] = useState('');
    const [itemType, setItemType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [refrigeration, setRefrigeration] = useState(false);
    const [shelfLife, setShelfLife] = useState('');
    const [pickup, setPickup] = useState(false);
    const [partialGiveout, setPartialGiveout] = useState(false);
    const [OperatingHours, setOperatingHours] = useState('');
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
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
   setSelectedOption('');
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
        <div>
        <h1>Next Page</h1>
        <div>
            <label>
                <input
                    type="radio"
                    value="perishable"
                    checked={selectedOption === 'perishable'}
                    onChange={handleOptionChange}
                />
             Perishable
            </label>
        </div>
        <div>
            <label>
                <input
                    type="radio"
                    value="nonperishable"
                    checked={selectedOption === 'nonperishable'}
                    onChange={handleOptionChange}
                />
             Non-Perishable
            </label>
        </div>
        <div>
            {selectedOption === 'perishable' && (
                <form onSubmit={handleSubmit}>
                    <h2>Donate Form 1</h2>
                    <label>
                    Location:
                    <input type="text" value={location} onChange={handleLocationChange} />
                    </label>
                    <label>
                    When Ready:
                    <input type="text" value={ready} onChange={handleReadyChange} />
                    </label>
                    <label>
                    Item Type:
                    <input type="text" value={itemType} onChange={handleItemTypeChange} />
                    </label>
                    <label>
                    Quantity:
                    <input type="text" value={quantity} onChange={handleQuantityChange} />
                    </label>
                    <label>
                    Shelf Life:
                    <input type="text" value={shelfLife} onChange={handleShelfLifeChange} />
                    </label>
                    <label>
                    Operating Hours:
                    <input type="text" value={OperatingHours} onChange={handleOperatingHoursChange} />
                    </label>
                    <label>
                    Partial Giveout:
                    <input type="checkbox" checked={partialGiveout} onChange={handlePartialGiveoutChange} />
                    </label>
                    <label>
                    Refrigeration:
                    <input type="checkbox" checked={refrigeration} onChange={handleRefrigerationChange} />
                    </label>
                    <label>
                    Pickup:
                    <input type="checkbox" checked={pickup} onChange={handlePickupChange} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            )}
            {selectedOption === 'nonperishable' && (
                <form onSubmit={handleSubmit}>
                    <h2>Donate Form 2</h2>
                    <label>
                    Location:
                    <input type="text" value={location} onChange={handleLocationChange} />
                    </label>
                    <label>
                    When Ready:
                    <input type="text" value={ready} onChange={handleReadyChange} />
                    </label>
                    <label>
                    Operation Hours:
                    <input type="text" value={OperatingHours} onChange={handleOperatingHoursChange} />
                    </label>
                    <label>
                    Refrigeration:
                    <input type="checkbox" checked={refrigeration} onChange={handleRefrigerationChange} />
                    </label>
                    <label>
                    Self Pickup:
                    <input type="checkbox" checked={pickup} onChange={handlePickupChange} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            )}
     </div>
        <Link to="/donation">Donate Now</Link>
        </div>
    );
};

export default Next;

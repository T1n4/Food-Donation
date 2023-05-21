
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div>
//       <img src="logo.png" alt="Logo" />
//       <h1>Welcome to Our Website</h1>
//       <p>Help us combat hunger by making a donation.</p>
//       <Link to="/donate">
//         <button>Donate</button>
//       </Link>
//     </div>
//   );
// };

// export default Home;


import React from 'react'
import { useHistory } from "react-router-dom"

function Home() {
    const history = useHistory()
    // const redirect_to_roles = () => {
    //     history.push('/roles')
    // }
    // const redirect_to_addmed = () => {
    //     history.push('/addmed')
    // }
    const redirect_to_supply = () => {
        history.push('/Donate')
    }
    // const redirect_to_track = () => {
    //     history.push('/track')
    // }
    return (
        <div>
            <h3>AI-FEED :- </h3>
            <br />
            <h6>(Note: Here <u>Admin</u> is the person who deployed the smart contract on the blockchain)</h6>
            <h5>Step 1: Admin Should Register Donor ,Pantry assistant, Courier and Beneficiary</h5>
            <h6>(Note: This is a one time step. Skip to step 2 if already done)</h6>
            <button onClick={redirect_to_roles} className="btn btn-outline-primary btn-sm">Register</button>
            <br />
            <h5>Step 2: Admin should order Food items</h5>
            <button onClick={redirect_to_addmed} className="btn btn-outline-primary btn-sm">Order Food items</button>
            <br />
            <h5>Step 3: Control Supply Chain</h5>
            <button onClick={redirect_to_supply} className="btn btn-outline-primary btn-sm">Control Supply Chain</button>
            <br />
            <hr />
            <br />
            <h5><b>Track</b> the Food items:</h5>
            <button onClick={redirect_to_track} className="btn btn-outline-primary btn-sm">Track Food</button>
        </div>
    )
}

export default Home


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
// import Nav from './ components/Nav';
// import Main from './ components/Main';
// import Home from './ components/Home';
// import Next from './ components/Next';


// function App() {
//   return (
//     <Router>
//       <div className="App flex flex-col h-screen">
//         <Nav></Nav>
//         <Main></Main>
//         <Home></Home>
//         <Next></Next>
    
  
//         <Routes>
//           <Route exact path="/" component={Home} />
//           <Route path="/next" component={Next} />
//           {/* <Route path="/donation" component={Donation} /> */}
//         </Routes>
  
    
//       </div>
//     </Router>
//   );
// }
// export default App

import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

import DonationDashboard from "./components/DonationDashboard";
import MyDonations from "./components/MyDonations";
import Profile from "./components/Profile";
import HomePage from './components/HomePage';
import Nav from './components/Nav';
import Perishable from './components/Perishable';
import Nonperishable from './components/Nonperishable';
import Donate from './components/Donate';

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <Router>
        <div className='h-full overflow-scroll w-full content hide-scroll'>
         <Nav />
         <div className='w-full h-[800px]'>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/donation-dashboard" element={<DonationDashboard />} >
                <Route exact path="donate" element={<Donate />} >
                  <Route exact path="perishable" element={< Perishable />} />
                  <Route exact path="nonperishable" element={<Nonperishable />} />
                  <Route index element={<Perishable />} />

                </Route>
                <Route exact path="my-donations" element={<MyDonations />} />
                <Route exact path="profile" element={<Profile />} />
                <Route index element={<Donate />} />

              </Route>

              {/* <Route exact path="/donate" element={<DonateForm />} />
              <Route exact path="/my-donations" element={<MyDonations />} />
              <Route exact path="/profile" element={<Profile />} /> */}
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;

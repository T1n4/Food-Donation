import React from 'react';
import { Link } from 'react-router-dom';
import give from "./give.png";
const HomePage = () => {
    return (
        <div className=' home-parent bg-white text-black w-screen h-full gap-8 flex flex-col  justify-start m-10 p-15'>
            <div className='hero w-full h-2/3 flex gap-6'>
                <div className='img text-green-700 self-center w-1/2 h-full font-bold' style={{backgroundImage:`url(${give})`,backgroundSize:"contain",backgroundPosition:"center"}} >Home Page</div>
                <div className='caption-p w-1/2 flex justify-start '>
                  <h1 className=' caption self-center text-green-700 font-bold text-5xl p-5'>Connecting Food Charities To End Hunger</h1>
                </div>
            </div>

            <div className='menu self-center w-full gap-5 h-1/3 p-8 flex flex-col'>
                <Link className='home-btn' to ="/donation-dashboard">Donation Dashboard</Link>
            </div>
        </div>
    );
};

export default HomePage;

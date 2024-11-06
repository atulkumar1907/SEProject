import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faMagnifyingGlass, faSliders, faStar } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../Components/Navbar';

import Footer from '../Components/Footer';
import Teams from '../Components/Teams';
import ContactUs from '../Components/ContactUs';
function Home() {
  return (
    <>
      {/* Search and filter bar */}
      <div className='pt-3 flex gap-7 items-center justify-center place-self-center'>
        <div className="flex gap-4 items-center justify-start place-self-center w-7/12 rounded-full px-5 py-3 border-5px  bg-gray-200 hover:bg-gray-300">
          <FontAwesomeIcon icon={faMagnifyingGlass} className='font-bold' />
          <input type="text" placeholder="Search" className=" bg-transparent place-self-center w-24 md:w-10/12 focus: outline-none" />
        </div>
        <div className='bg-gray-200 hover:bg-gray-300 rounded-xl py-[10px] px-4'>
          <FontAwesomeIcon icon={faSliders} className='text-xl ' />
        </div>
      </div>
      <div className='mt-2 flex w-auto h-20 gap-5 items-center justify-center place-self-center'>
        <span className='border-2 text-gray-700 font-semibold  font-inter rounded-xl px-6 py-2 hover:bg-teal-900 hover:text-white hover:border-transparent'>Nature</span>
        <span className='border-2 text-gray-700 font-semibold  font-inter rounded-xl px-6 py-2 hover:bg-teal-900 hover:text-white hover:border-transparent'>Classic</span>
        {/* {/* <span className='border-2 text-gray-700 font-semibold  font-inter rounded-xl px-6 py-2 hover:bg-teal-900 hover:text-white hover:border-transparent'>Modern</span> */}
        {/* <span className='border-2 text-gray-700 font-semibold  font-inter rounded-xl px-6 py-2 hover:bg-teal-900 hover:text-white hover:border-transparent'>Science</span> */}
        <span className='border-2 text-gray-700 font-semibold  font-inter rounded-xl px-6 py-2 hover:bg-teal-900 hover:text-white hover:border-transparent'>Traditional</span> 
      </div>

      {/* museums */}
      <section >
        <div className="place-self-center w-auto flex flex-col gap-5 max-w-10/12 px-4 py-6 sm:px-6 lg:px-8">
          <div className=' flex justify-between items-center'>
            <span className='text-2xl text-gray-800 font-bold'>Nearby Museums</span>
            <span className='text-2xl  font-semibold text-gray-400'>See all</span>
          </div>

          {/* museums list */}


          <div className=' flex gap-10 '>
            {/* museum 1 */}
            <span className=' w-80 flex flex-col gap-4 hover:scale-105 transition-all duration-500'>
              {/* insert a background image */}
              <div
                className=' h-48 w-72 rounded-3xl shadow-gray-300 shadow-md hover:shadow-lg transition-all duration-500'
                style={{
                  backgroundImage: `url("https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp")`,
                  backgroundSize: "contain",
                  // backgroundRepeat: "no-repeat"
                }}>

              </div>
              {/* card body */}
              <div className='ml-2'>
                <p className='font-bold text-2xl text-gray-800'>National Science Center</p>
                <div className='mt-2 flex items-center gap-2'>
                  <FontAwesomeIcon icon={faStar} />
                  <span className='text-gray-400 font-semibold'>4.2/xyz reviews </span>
                </div>
              </div>
            </span>      
          </div>
        </div>
      </section>
      
      <Teams/>
      <ContactUs/>
      <Footer/>
      
      
    </>
  )
}

export default Home;


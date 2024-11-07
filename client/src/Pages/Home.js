import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSliders, faStar } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Teams from '../Components/Teams';
import ContactUs from '../Components/ContactUs';

function Home() {
  return (
    <>
      {/* Search and filter bar */}
      <div className='pt-3 flex gap-7 items-center justify-center place-self-center'>
        <div className="flex gap-4 items-center justify-start place-self-center w-7/12 rounded-full px-5 py-3 border-5px bg-gray-200 hover:bg-gray-300">
          <FontAwesomeIcon icon={faMagnifyingGlass} className='font-bold' />
          <input type="text" placeholder="Search" className=" bg-transparent place-self-center w-24 md:w-10/12 focus:outline-none" />
        </div>
        <div className='bg-gray-200 hover:bg-gray-300 rounded-xl py-[10px] px-4'>
          <FontAwesomeIcon icon={faSliders} className='text-xl ' />
        </div>
      </div>
      
      <div className='mt-2 flex w-auto h-20 gap-5 items-center justify-center place-self-center'>
        <span className='border-2 text-gray-700 font-semibold font-inter rounded-xl px-6 py-2 hover:bg-teal-900 hover:text-white hover:border-transparent'>Nature</span>
        <span className='border-2 text-gray-700 font-semibold font-inter rounded-xl px-6 py-2 hover:bg-teal-900 hover:text-white hover:border-transparent'>Classic</span>
        <span className='border-2 text-gray-700 font-semibold font-inter rounded-xl px-6 py-2 hover:bg-teal-900 hover:text-white hover:border-transparent'>Traditional</span> 
      </div>

      {/* Nearby Museums Section */}
      <section>
        <div className="place-self-center w-auto flex flex-col gap-5 max-w-10/12 px-4 py-6 sm:px-6 lg:px-8">
          <div className='flex justify-between items-center'>
            <span className='text-2xl text-gray-800 font-bold'>Nearby Museums</span>
            <span className='text-2xl font-semibold text-gray-400'>See all</span>
          </div>

          {/* Museums - Horizontally Scrollable Section */}
          <div className="flex gap-10 overflow-x-auto scroll-smooth">
            {/* Museum 1 */}
            <span className='w-80 flex flex-col gap-4 hover:scale-105 transition-all duration-500'>
              <div className='h-48 w-72 rounded-3xl shadow-gray-300 shadow-md hover:shadow-lg transition-all duration-500'>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQDRb8R0mejC_MFQTrKrCZZZoBQqJEFCeeQ&s"
                  alt="National Rail Museum"
                  className="h-full w-full object-cover rounded-3xl"
                />
              </div>
              <div className='ml-2'>
                <p className='font-bold text-2xl text-gray-800'>National Science Center</p>
                <div className='mt-2 flex items-center gap-2'>
                  <FontAwesomeIcon icon={faStar} />
                  <span className='text-gray-400 font-semibold'>4.2/xyz reviews</span>
                </div>
              </div>
            </span>

            {/* Museum 2 */}
            <span className='w-80 flex flex-col gap-4 hover:scale-105 transition-all duration-500'>
              <div className='h-48 w-72 rounded-3xl shadow-gray-300 shadow-md hover:shadow-lg transition-all duration-500'>
                <img
                  src="https://media1.thrillophilia.com/filestore/ekhwxm5t4rp8lz02n97aavltbquo_1575368243_de.jpg"
                  alt="National Science Center"
                  className="h-full w-full object-cover rounded-3xl"
                />
              </div>
              <div className='ml-2'>
                <p className='font-bold text-2xl text-gray-800'>National Science Center</p>
                <div className='mt-2 flex items-center gap-2'>
                  <FontAwesomeIcon icon={faStar} />
                  <span className='text-gray-400 font-semibold'>4.2/xyz reviews</span>
                </div>
              </div>
            </span>

            {/* Museum 3 */}
            <span className='w-80 flex flex-col gap-4 hover:scale-105 transition-all duration-500'>
              <div className='h-48 w-72 rounded-3xl shadow-gray-300 shadow-md hover:shadow-lg transition-all duration-500'>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQDRb8R0mejC_MFQTrKrCZZZoBQqJEFCeeQ&s"
                  alt="Exploration Museum"
                  className="h-full w-full object-cover rounded-3xl"
                />
              </div>
              <div className='ml-2'>
                <p className='font-bold text-2xl text-gray-800'>PM Sangraylaya  </p>
                <div className='mt-2 flex items-center gap-2'>
                  <FontAwesomeIcon icon={faStar} />
                  <span className='text-gray-400 font-semibold'>4.5/xyz reviews</span>
                </div>
              </div>
            </span>

            {/* Museum 4 */}
            <span className='w-80 flex flex-col gap-4 hover:scale-105 transition-all duration-500'>
              <div className='h-48 w-72 rounded-3xl shadow-gray-300 shadow-md hover:shadow-lg transition-all duration-500'>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQDRb8R0mejC_MFQTrKrCZZZoBQqJEFCeeQ&s"
                  alt="Historical Artifacts Museum"
                  className="h-full w-full object-cover rounded-3xl"
                />
              </div>
              <div className='ml-2'>
                <p className='font-bold text-2xl text-gray-800'>National Art Museum </p>
                <div className='mt-2 flex items-center gap-2'>
                  <FontAwesomeIcon icon={faStar} />
                  <span className='text-gray-400 font-semibold'>4.8/xyz reviews</span>
                </div>
              </div>
            </span>

            {/* Additional Museums can be added here */}
          </div>
        </div>
      </section>

      {/* Event Button */}
      <div className="flex justify-center mt-5">
        <button
          onClick={() => window.location.href = "/event"}  // Use the location.href for navigation
          className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
        >
          View Event
        </button>
      </div>

      <Teams />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Home;

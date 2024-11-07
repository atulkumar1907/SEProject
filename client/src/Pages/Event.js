import React from "react";

const EventCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Event Image */}
      <div className="relative">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9fz3eIcuPEsDOMm5B3QhDxAjlGTRjAx08Rw&s"
          alt="Event"
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          new
        </div>
      </div>

      {/* Event Details */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">LIGHT AND MUSEUM SHOW</h2>
        <div className="text-gray-500 text-sm mt-2">
          <div className="flex items-center mb-2">
            <span className="material-icons text-red-500">event</span>
            <span className="ml-2">Sun, 11 May 2025</span>
          </div>
          <div className="flex items-center">
            <span className="material-icons text-red-500">place</span>
            <span className="ml-2">National Rail Museum, Delhi</span>
          </div>
        </div>

        {/* Event Description */}
        <p className="text-gray-600 text-sm mt-3">
          Welcome to an exciting event for all train enthusiasts! Collect knowledge about trains, learn about different types, and immerse yourself in a world of curiosity and experience.
        </p>

        {/* Host Section */}
        <div className="flex items-center mt-4">
          <img
            src="https://via.placeholder.com/50"
            alt="Host"
            className="w-10 h-10 rounded-full"
          />
          <span className="ml-3 text-gray-800 font-medium">Hosted by Rail Museum Team</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

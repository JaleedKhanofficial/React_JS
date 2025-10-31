import React from "react";

function Cards(props){
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl overflow-hidden p-5 mb-5">
        <img className="w-full h-40 object-cover rounded-lg" src="https://images.pexels.com/photos/33579706/pexels-photo-33579706.jpeg" alt="Card image"/>

          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-800">Simple Card Title</h2>
            <p className="text-gray-600 mt-2">
              This is a simple card built with Tailwind CSS. You can easily customize it with your own content or colors.
            </p>
          </div>

          <div className="mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Learn More and see {props.username}
            </button>
          </div>
      </div>
    )
    
}

export default Cards;
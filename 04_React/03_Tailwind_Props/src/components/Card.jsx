//We can get the card css from google.

function Card({username,desc="Not Provided",hashtags}) {
    
    return (
        <div className="border- max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full h-80" src="https://images.pexels.com/photos/35844002/pexels-photo-35844002/free-photo-of-green-cabin-surrounded-by-forest-trees-in-daylight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{username}</div>
          <p className="text-white-700 text-base">
            {desc}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{hashtags[0]}</span> {/* Here if hashtags is not passed then default value blabla will be passed. */}
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{hashtags[1]}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{hashtags[2]}</span>
        </div>
      </div>
    )
}

export default Card

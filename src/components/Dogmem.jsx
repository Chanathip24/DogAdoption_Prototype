import React from 'react'

const Dogmem = ({dog}) => {
    return (
        <div key={dog.id} className="bg-white rounded-lg shadow-md p-4">
            <img
                src={dog.image}
                alt={dog.name}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{dog.name}</h3>
            <p className="text-gray-600 mb-2">Breed: {dog.breed}</p>
            <p className="text-gray-600 mb-2">Color: {dog.color}</p>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
                onClick={() => alert('Request adoption laew kub wait for email na')}
            >
                Request Adoption
            </button>
        </div>
    )
}

export default Dogmem
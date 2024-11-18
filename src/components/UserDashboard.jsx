import React from 'react'


const UserDashboard = ({ dogs }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Available Dogs for Adoption</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dogs.map(dog => (
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
                ))}
            </div>
        </div>
    );
};

export default UserDashboard
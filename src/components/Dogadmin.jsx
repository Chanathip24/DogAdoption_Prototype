import React from 'react'

const Dogadmin = ({dog,setSelectedDog,setShowTrainingModal}) => {
    return (
        <div key={dog.id} className="bg-white rounded-lg shadow-md p-4">
            <img
                src={dog.image}
                alt={dog.name}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{dog.name}</h3>
            <p className="text-gray-600 mb-2">Breed: {dog.breed}</p>
            <p className="text-gray-600 mb-2">Status:
                <span className={`ml-2 px-2 py-1 rounded ${dog.status === 'ready' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                    {dog.status === 'ready' ? 'Ready for Adoption' : 'In Training'}
                </span>
            </p>
            <button
                onClick={() => {
                    setSelectedDog(dog);
                    setShowTrainingModal(true);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
            >
                Update Training Status
            </button>
        </div>
    )
}

export default Dogadmin
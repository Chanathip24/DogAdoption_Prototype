import React from 'react'
import AddDogModal from '../components/AddDogModal';
import TrainingModal from '../components/TrainingModal';

const AdminDashboard = ({
    dogs,
    setDogs,
    showAddModal,
    setShowAddModal,
    showTrainingModal,
    setShowTrainingModal,
    selectedDog,
    setSelectedDog
}) => {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <button
                    onClick={() => setShowAddModal(true)}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Add New Dog
                </button>
            </div>

            {/* Dog List */}
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
                ))}
            </div>

            {/* Add Dog Modal */}
            {showAddModal && (
                <AddDogModal
                    setShowModal={setShowAddModal}
                    dogs={dogs}
                    setDogs={setDogs}
                />
            )}

            {/* Training Status Modal */}
            {showTrainingModal && (
                <TrainingModal
                    dog={selectedDog}
                    setShowModal={setShowTrainingModal}
                    dogs={dogs}
                    setDogs={setDogs}
                />
            )}
        </div>
    );
};

export default AdminDashboard
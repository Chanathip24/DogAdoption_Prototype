import React from 'react'
import AddDogModal from '../components/AddDogModal';
import TrainingModal from '../components/TrainingModal';
import Dogadmin from './Dogadmin';

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
                    <Dogadmin dog={dog} setSelectedDog={setSelectedDog} setShowTrainingModal={setShowTrainingModal}/>
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
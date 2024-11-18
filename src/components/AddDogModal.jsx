import React,{useState} from 'react'
import { Upload } from 'lucide-react';
const AddDogModal = ({ setShowModal, dogs, setDogs }) => {
    const [newDog, setNewDog] = useState({
        name: '',
        breed: '',
        color: '',
        bloodType: '',
        medicalHistory: '',
        image: '',
        status: 'training',
        trainingNotes: 'Initial training pending'
    });
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                setNewDog({ ...newDog, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setDogs([...dogs, { ...newDog, id: dogs.length + 1 }]);
        setShowModal(false);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-lg p-6 w-full max-w-md my-8">
                <h2 className="text-xl font-bold mb-4">Add New Dog</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Image Upload Section */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Dog Photo
                        </label>
                        <div className="flex flex-col items-center space-y-2">
                            <div className="w-full h-48 relative border-2 border-dashed border-gray-300 rounded-lg overflow-hidden">
                                {imagePreview ? (
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full">
                                        <Upload className="w-12 h-12 text-gray-400" />
                                        <p className="text-sm text-gray-500">Click to upload photo</p>
                                    </div>
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                            </div>
                            {imagePreview && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setImagePreview(null);
                                        setNewDog({ ...newDog, image: '/api/placeholder/300/200' });
                                    }}
                                    className="text-red-600 text-sm hover:text-red-800"
                                >
                                    Remove photo
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Existing form fields */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                            value={newDog.name}
                            onChange={(e) => setNewDog({ ...newDog, name: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Breed</label>
                        <input
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                            value={newDog.breed}
                            onChange={(e) => setNewDog({ ...newDog, breed: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Color</label>
                        <input
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                            value={newDog.color}
                            onChange={(e) => setNewDog({ ...newDog, color: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Blood Type</label>
                        <input
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                            value={newDog.bloodType}
                            onChange={(e) => setNewDog({ ...newDog, bloodType: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Medical History</label>
                        <textarea
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                            value={newDog.medicalHistory}
                            onChange={(e) => setNewDog({ ...newDog, medicalHistory: e.target.value })}
                            required
                            rows="3"
                        />
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Add Dog
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDogModal
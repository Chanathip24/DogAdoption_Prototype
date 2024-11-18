import React,{useState} from 'react'

const TrainingModal = ({ dog, setShowModal, dogs, setDogs }) => {
    const [trainingNotes, setTrainingNotes] = useState(dog.trainingNotes);
    const [status, setStatus] = useState(dog.status);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedDogs = dogs.map(d => {
            if (d.id === dog.id) {
                return { ...d, trainingNotes, status };
            }
            return d;
        });
        setDogs(updatedDogs);
        setShowModal(false);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Update Training Status</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Training Notes</label>
                        <textarea
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                            value={trainingNotes}
                            onChange={(e) => setTrainingNotes(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Status</label>
                        <select
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="training">In Training</option>
                            <option value="ready">Ready for Adoption</option>
                        </select>
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
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TrainingModal
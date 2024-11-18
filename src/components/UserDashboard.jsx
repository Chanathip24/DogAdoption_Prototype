import React from 'react'
import Dogmem from './Dogmem';


const UserDashboard = ({ dogs }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Available Dogs for Adoption</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dogs.map(dog => (
                    <Dogmem dog={dog}/>
                ))}
            </div>
        </div>
    );
};

export default UserDashboard
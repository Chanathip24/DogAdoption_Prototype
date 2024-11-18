import React from 'react'
import { Users, PawPrint } from 'lucide-react';

const Navbar = ({isAdmin,setIsAdmin}) => {
    return (
        <>
            {/* Navigation */}
            <nav className="bg-blue-600 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <PawPrint />
                        <span className="text-xl font-bold">Dog Adoption System</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setIsAdmin(!isAdmin)}
                            className="flex items-center space-x-2 px-4 py-2 rounded bg-blue-700 hover:bg-blue-800"
                        >
                            <Users size={18} />
                            <span>Switch to {isAdmin ? 'User' : 'Admin'} View</span>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
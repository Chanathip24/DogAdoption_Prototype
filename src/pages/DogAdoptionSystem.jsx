import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import AdminDashboard from '../components/AdminDashboard';
import UserDashboard from '../components/UserDashboard';

//จำลองหมาเริ่มต้นอิอิ
const initialDogs = [
    {
        id: 1,
        name: "Max",
        breed: "Golden Retriever",
        color: "Golden",
        bloodType: "MAI RU A",
        medicalHistory: "Vaccinated, Regular checkups",
        status: "ready",
        image: "https://lppuppy.com/wp-content/uploads/2024/05/IMG_1759.jpg",
        trainingNotes: "Basic obedience completed"
    },
    {
        id: 2,
        name: "Bella",
        breed: "German Shepherd",
        color: "Black and Tan",
        bloodType: "MAI RU A",
        medicalHistory: "Regular deworming",
        status: "training",
        image: "https://www.akc.org/wp-content/uploads/2017/11/German-Shepherd-on-White-00.jpg",
        trainingNotes: "In progress"
    }
];


const DogAdoptionSystem = () => {
    //เช็คแอดมิน
    const [isAdmin, setIsAdmin] = useState(true);

    //จำนวนหมาทั้งหมดบนเว็บไซต์ จำลอง Database
    const [dogs, setDogs] = useState(initialDogs);

    //เลือกหมาสำหรับการใช้ต่อไปปป
    const [selectedDog, setSelectedDog] = useState(null);

    //เปิดปิด Modal สำหรับเพิ่มหมา
    const [showAddModal, setShowAddModal] = useState(false);

    //เปิดปิด modal สำหรับอัพเดท Traning หมา
    const [showTrainingModal, setShowTrainingModal] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Nav */}
            <Navbar isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>

            {/* Main */}
            <div className="container mx-auto p-4">
                {isAdmin ? (
                    <AdminDashboard
                        dogs={dogs}
                        setDogs={setDogs}
                        showAddModal={showAddModal}
                        setShowAddModal={setShowAddModal}
                        showTrainingModal={showTrainingModal}
                        setShowTrainingModal={setShowTrainingModal}
                        selectedDog={selectedDog}
                        setSelectedDog={setSelectedDog}
                    />
                ) : (
                    <UserDashboard
                        dogs={dogs.filter(dog => dog.status === 'ready')}
                    />
                )}
            </div>
        </div>
    );
};




export default DogAdoptionSystem;
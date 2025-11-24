import { FaClock, FaCog, FaFire, FaHome, FaSignOutAlt, FaStar, FaTrophy } from "react-icons/fa";

export function LeftBar() {
    return (
        <aside className="p-6 w-80 border-r border-r-gray-200">
            <div>
                <span className="text-2xl font-bold text-black">EnglishAI</span>

                <div className="flex items-center p-3 gap-x-3 mt-6">
                    <div 
                        className="flex items-center justify-center w-12 h-12 rounded-full
                        bg-linear-to-r from-blue-500 to-purple-500"
                    >
                        <span className="font-bold text-white">JD</span>
                    </div>

                    <div className="flex flex-col">
                        <h2 className="font-semibold ">John Doe</h2>
                        <h3 className="text-[0.9rem] text-gray-600">Level B2 - Intermediate</h3>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-gray-500 font-semibold text-[0.9rem]">YOUR PROGRESS</h2>

                <div className="grid grid-cols-2 gap-8 p-3 mt-4">
                    <div>
                        <FaFire className='text-orange-500' size={20}/>
                        
                        <div className='mt-2'>
                            <span className='text-2xl font-bold text-black'>15</span>
                            <h3 className='text-[0.8rem] text-gray-600'>Day Streak</h3>
                        </div>
                    </div>

                    <div>
                        <FaTrophy className='text-yellow-500' size={20}/>
                        <div className='mt-2'>
                            <span className='text-2xl font-bold text-black'>1,234</span>
                            <h3 className='text-[0.8rem] text-gray-600'>XP Points</h3>
                        </div>
                    </div>

                    <div>
                        <FaStar className='text-purple-500' size={20}/>
                        <div className='mt-2'>
                            <span className='text-2xl font-bold text-black'>28</span>
                            <h3 className='text-[0.8rem] text-gray-600'>Lessons Done</h3>
                        </div>
                    </div>

                    <div>
                        <FaClock className='text-blue-500' size={20}/>
                        <div className='mt-2'>
                            <span className='text-2xl font-bold text-black'>45h</span>
                            <h3 className='text-[0.8rem] text-gray-600'>Study Time</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-12'>
                <h2 className="text-gray-500 font-semibold text-[0.9rem]">YOUR LESSONS</h2>

                <nav className='flex flex-col gap-y-3 text-gray-700 p-3'>
                    <div className='flex gap-x-3 items-center'>
                        <FaHome /> Home
                    </div>

                    <div className='flex gap-x-3 items-center'>
                        <FaCog /> Settings
                    </div>

                    <div className='flex gap-x-3 items-center'>
                        <FaSignOutAlt /> Logout
                    </div>
                </nav>
            </div>
        </aside>
    )
}
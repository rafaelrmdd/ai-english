import { FaRobot, FaMicrophone, FaPaperPlane, FaUser, FaCog, FaBook, FaChartLine, FaLightbulb, FaVolumeUp, FaStar, FaFire, FaTrophy, FaClock, FaHome, FaSignOutAlt, FaPaperclip, FaSmile } from 'react-icons/fa';

export function Chat() {
    return (
        <div className="flex items-start">
            {/* Left bar */}
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

            <main className='flex-1'>
                <header className='flex justify-between px-8 py-4 border-b border-b-gray-200'>
                    <div className='flex gap-x-4'>
                        <div 
                            className="flex items-center justify-center w-12 h-12 rounded-full
                            bg-linear-to-r from-blue-500 to-purple-500"
                        >
                            <FaRobot className='text-white' size={20}/>
                        </div>

                        <div>
                            <h2 className='font-semibold text-black'>AI English Teacher</h2>

                            <div className='flex gap-x-2 items-center '>
                                <div className='w-2 h-2 bg-green-600 rounded-full'></div>
                                <h3 className='text-green-600 text-[0.9rem]'>Online</h3>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-x-4 items-center'>
                        <button className='px-4 py-2 bg-blue-100 rounded-lg text-blue-700'>
                            Chat
                        </button>

                        <button className='p-3'>
                            Vocabulary
                        </button>

                        <button className='p-3'>
                            Corrections
                        </button>
                    </div>
                </header>

                <section className='h-full p-8'>
                    {/* Chat history */}
                    <div className='w-full h-96 bg-black'>
                        
                    </div>

                    {/* Chat type bar*/}
                    <div className='flex gap-x-4 p-3'>
                        <div 
                            className='flex gap-x-2 flex-1 px-4 py-3 items-center
                            focus:border focus:border-blue-400 border-2 border-blue-500 rounded-2xl'
                        >
                            <div className='flex gap-x-2 text-gray-400 '>
                                <FaPaperclip size={20}/>
                                <FaSmile size={20}/>
                            </div>

                            <input
                                className='w-full outline-0' 
                                type="text" 
                                placeholder='Type your message here...'
                            />

                            <FaMicrophone size={20} className='text-gray-400'/>
                        </div>

                        <button 
                            className='flex items-center gap-x-3 bg-blue-600 px-6 py-4 font-bold 
                            text-white rounded-2xl hover:bg-blue-700 transition duration-150'
                        >
                            <FaPaperPlane /> Send
                        </button>
                    </div>
                </section>
            </main>

            {/* Right bar */}
            {/* Remove h-screen later */}
            <aside className='p-6 w-80 border-l border-l-gray-200 h-screen'>

            </aside>
        </div>
    )
}
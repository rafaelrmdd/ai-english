import { FaBrain, FaMicrophone, FaBook, FaChartLine, FaRobot, FaUsers, FaStar, FaPlay, FaCheck, FaArrowRight, FaClock, FaTrophy } from 'react-icons/fa';

export function Home() {
    return (
        <div>
            <header 
                className="flex justify-between items-center px-20 py-4 border 
                border-b-blue-200 border-t-0    "
            >
                <span className="font-bold text-black text-[1.2rem]">EnglishAI</span>

                <nav className="flex gap-x-5">
                    <a 
                        className="text-gray-600 hover:text-blue-600 transition duration-150"
                        href="#"
                    >
                        Resources
                    </a>
                    <a href="#">How does it work?</a>
                    <a href="#">Prices</a>
                    <a href="#">Depoimentos</a>
                </nav>

                <div className="flex gap-x-6 items-center">
                    <span>Log In</span>
                    <button 
                        className="px-3 py-2 text-white bg-blue-700 rounded-lg"
                    >
                        Start Free
                    </button>
                </div>
            </header>

            <main className="mt-16">
                <div className='px-14'>
                    <h2 
                        className="font-semibold text-[0.9rem] text-blue-600
                        px-3 py-2 bg-blue-200 rounded-lg inline-block"
                    >
                        🚀 More than 50.000 students learning
                    </h2>

                    <section className="mt-8 grid grid-cols-2 gap-x-6">
                        <div>
                            <h1 
                                className="text-6xl font-bold leading-18"
                            >
                                Learn English using <br/> the power of <br/> 
                                <span className="text-blue-600">Artificial <br/> Intelligency</span>
                            </h1>
                            
                            <h2 className="mt-8 text-gray-500 text-xl">
                                Your custom journey for the fluency starts here. 
                                Learn on a natural way, talking to a advanced AI.
                            </h2>

                            <div className="flex gap-x-6 mt-8">
                                <button 
                                    className="w-58 py-4 bg-blue-700 text-white text-xl rounded-lg
                                    font-semibold"
                                >
                                    Start Now
                                </button>
                                <button
                                    className="w-58 px-6 py-4 bg-blue-700 text-black text-xl rounded-lg
                                    font-semibold"
                                >
                                    <FaPlay /> See Demonstration
                                </button>
                            </div>

                            <div className='flex gap-x-8 mt-8'>
                                <div className='flex items-center gap-x-2'>
                                    <FaCheck className='text-green-300'/>
                                    <span className='text-gray-600'>
                                        No credit card
                                    </span>
                                </div>

                                <div className='flex items-center gap-x-2'>
                                    <FaCheck className='text-green-300'/>
                                    <span className='text-gray-600'>
                                        7 Days free
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="w-full h-80 rounded-lg bg-black">
                            </div>
                        </div>
                    </section>
                </div>

                <div 
                    className='flex justify-around items-center bg-blue-700 w-full mt-8
                    py-20'
                >
                    <div className='flex items-center'>
                        <strong className='text-white font-bold text-2xl text-center'>
                            50K+ <br/>
                            <span className='text-[0.9rem] text-white font-normal'>Active Students</span> 
                        </strong>
                    </div>

                    <div className='flex items-center'>
                        <strong className='text-white font-bold text-2xl text-center'>
                            50K+ <br/>
                            <span className='text-[0.9rem] text-white font-normal'>Active Students</span> 
                        </strong>
                    </div>

                    <div className='flex items-center'>
                        <strong className='text-white font-bold text-2xl text-center'>
                            50K+ <br/>
                            <span className='text-[0.9rem] text-white font-normal'>Active Students</span> 
                        </strong>
                    </div>

                    <div className='flex items-center'>
                        <strong className='text-white font-bold text-center'>
                            50K+ <br/>
                            <span className='text-[0.9rem] text-white font-normal'>Active Students</span> 
                        </strong>
                    </div>
                </div>

                <div className='mt-24 px-20'>
                    <div className='w-full'>
                        {/* Change company name later */}
                        <h2 className='text-black font-bold text-4xl text-center'>Why choose EnglishAI?</h2>
                        <h3 className='text-gray-600 text-center mt-4 text-[1.1rem]'>Cutting-edge technology to accelerate your progress</h3>
                    </div>

                    <div className='mt-8 grid grid-cols-4 mb-8 gap-x-4'>
                        <div className='space-y-4 shadow-sm p-3'>
                            <FaBrain className='text-blue-700 w-9 h-9'/>
                            <strong className='text-black font-bold text-[1.1rem]'>Custom AI</strong> <br/>
                            <span className='text-gray-600'>Learn on your pace with plan fit to your level</span>
                        </div>

                        <div className='space-y-4 shadow-sm p-3'>
                            <FaMicrophone className='text-blue-700 w-9 h-9'/>
                            <strong className='text-black font-bold text-[1.1rem]'>Real Conversation</strong> <br/>
                            <span className='text-gray-600'>Practice talking to the AI assistent 24/7</span>
                        </div>

                        <div className='space-y-4 shadow-sm p-3'>
                            <FaChartLine className='text-blue-700 w-9 h-9'/>
                            <strong className='text-black font-bold text-[1.1rem]'>Smart Progress</strong> <br/>
                            <span className='text-gray-600'>Track your evolution with detailed analysis</span>
                        </div>

                        <div className='space-y-4 shadow-sm p-3'>
                            <FaBook className='text-blue-700 w-9 h-9'/>
                            <strong className='text-black font-bold text-[1.1rem]'>Dynamic Content</strong> <br/>
                            <span className='text-gray-600'>AI generated exercises based on your interests</span>
                        </div>
                    </div>
                </div>

                <div className='mt-20 px-20'>
                    <div className='w-full'>
                        <h2 className='text-black font-bold text-4xl text-center'>How does it work?</h2>
                        <h3 className='text-gray-600 text-center'>Simple, efficient and custom</h3>
                    </div>

                    <div className='grid grid-cols-3 mt-16'>
                        <div className='flex items-center flex-col'>
                            <div 
                                className='flex items-center justify-center rounded-full 
                                w-16 h-16 bg-blue-700 text-white font-bold text-2xl'
                            >
                                <span>1</span>
                            </div>

                            <h2 className='font-semibold text-black mt-4'>Take the test</h2>
                            <h3 className='text-gray-600 text-[0.9rem] mt-2'>AI assesses your current level in minutes</h3>
                        </div>

                        <div className='flex items-center flex-col'>
                            <div 
                                className='flex items-center justify-center rounded-full 
                                w-16 h-16 bg-blue-700 text-white font-bold text-2xl'
                            >
                                <span>1</span>
                            </div>

                            <h2 className='font-semibold text-black mt-4'>Personalized Plan</h2>
                            <h3 className='text-gray-600 text-[0.9rem] mt-2'>Get a customized study roadmap</h3>
                        </div>

                        <div className='flex items-center flex-col'>
                            <div 
                                className='flex items-center justify-center rounded-full 
                                w-16 h-16 bg-blue-700 text-white font-bold text-2xl'
                            >
                                <span>1</span>
                            </div>

                            <h2 className='font-semibold text-black mt-4'>Practice & Evolve</h2>
                            <h3 className='text-gray-600 text-[0.9rem] mt-2'>Converse, learn, and achieve fluency</h3>
                        </div>
                    </div>
                </div>

                <div className='mt-16 px-20'>
                    <div className='w-full'>
                        <h2 className='text-black font-bold text-4xl text-center'>Choose your plan</h2>
                        <h3 className='text-gray text-center mt-4'>Invest on your future today</h3>
                    </div>

                    <div className='mt-16 grid grid-cols-3 gap-x-8'>
                        <div className='p-8'>
                            <div>
                                <h2 className='text-2xl text-black font-bold mb-2'>Basic</h2>
                                <span className='text-3xl text-black font-bold'>$19</span> <span className='text-gray-600'>/month</span>

                                <div className='flex flex-col gap-y-4 mt-6'>
                                    <div className='flex gap-x-3 items-center'>
                                        <FaCheck className='text-green-400'/> <h3>30 min/day with AI</h3>
                                    </div>

                                    <div className='flex gap-x-3 items-center'>
                                        <FaCheck className='text-green-400'/> <h3>Basic Exercises</h3>
                                    </div>

                                    <div className='flex gap-x-3 items-center'>
                                        <FaCheck className='text-green-400'/> <h3>Email support</h3>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full flex justify-center mt-8'>
                                <button className='font-semibold text-center'>Get Started</button>
                            </div>
                        </div>

                        <div className='p-8 border-4 border-blue-700 rounded-2xl'>
                            <div>
                                <div className='px-4 py-1 text-white font-semibold bg-blue-700 rounded-full w-33'>
                                    <span>Most Popular</span>
                                </div>

                                <h2 className='text-2xl text-black font-bold mb-2 mt-4'>Pro</h2>
                                <span className='text-3xl text-black font-bold'>$39</span> <span className='text-gray-600'>/month</span>

                                <div className='flex flex-col gap-y-4 mt-6'>
                                    <div className='flex gap-x-3 items-center'>
                                        <FaCheck className='text-green-400'/> <h3>Unlimited</h3>
                                    </div>

                                    <div className='flex gap-x-3 items-center'>
                                        <FaCheck className='text-green-400'/> <h3>All Exercises</h3>
                                    </div>

                                    <div className='flex gap-x-3 items-center'>
                                        <FaCheck className='text-green-400'/> <h3>Priority Support</h3>
                                    </div>

                                    <div className='flex gap-x-3 items-center'>
                                        <FaCheck className='text-green-400'/> <h3>Certificate</h3>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full flex justify-center mt-8'>
                                <button 
                                    className='font-semibold text-center bg-blue-700 rounded-lg w-full
                                    text-white py-3'
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>

                        <div className='p-8'>
                            <div>
                                <h2 className='text-2xl text-black font-bold mb-2'>Premium</h2>
                                <span className='text-3xl text-black font-bold'>$59</span> <span className='text-gray-600'>/month</span>

                                <div className='flex flex-col gap-y-4 mt-6'>
                                    <div className='flex gap-x-3 items-center'>
                                        <FaCheck className='text-green-400'/> <h3>Everything in Pro</h3>
                                    </div>

                                    <div className='flex gap-x-3 items-center'>
                                        <FaCheck className='text-green-400'/> <h3>Live Classes</h3>
                                    </div>

                                    <div className='flex gap-x-3 items-center'>
                                        <FaCheck className='text-green-400'/> <h3>Personal Mentor</h3>
                                    </div>

                                    <div className='flex gap-x-3 items-center'>
                                        <FaCheck className='text-green-400'/> <h3>Exclusive Materials</h3>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full flex justify-center mt-8'>
                                <button className='font-semibold text-center'>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-32 px-20'>
                    <h2 className='text-black font-bold text-4xl text-center'>What our students say</h2>

                    <div className='grid grid-cols-3'>
                        <div className='p-4 flex flex-col gap-y-4 shadow-sm'>
                            <div className='flex text-yellow-500'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>

                            <q className='text-gray-700 italic'>"In 3 months i drastically improved my fluency"</q>

                            <div className='flex gap-x-4'>
                                <div 
                                    className='w-10 h-10 flex items-center justify-center rounded-full
                                    bg-green-200'
                                >
                                    <FaUsers className='text-blue-700'/>
                                </div>

                                <div>
                                    <h2 className='text-black font-semibold'>Maria Silva</h2>
                                    <h3 className='text-gray-500 text-[0.9rem]'>Student</h3>
                                </div>
                            </div>
                        </div>

                        <div className='p-4 flex flex-col gap-y-4'>
                            <div className='flex text-yellow-500'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>

                            <q className='text-gray-700 italic'>""The AI understands my difficulties and focuses exactly on what I need.""</q>

                            <div className='flex gap-x-4'>
                                <div 
                                    className='w-10 h-10 flex items-center justify-center rounded-full
                                    bg-green-200'
                                >
                                    <FaUsers className='text-blue-700'/>
                                </div>

                                <div>
                                    <h2 className='text-black font-semibold'>John Santos</h2>
                                    <h3 className='text-gray-500 text-[0.9rem]'>Professional</h3>
                                </div>
                            </div>
                        </div>

                        <div className='p-4 flex flex-col gap-y-4'>
                            <div className='flex text-yellow-500'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>

                            <q className='text-gray-700 italic'>"I've never seen such an efficient tool for learning languages."</q>

                            <div className='flex gap-x-4'>
                                <div 
                                    className='w-10 h-10 flex items-center justify-center rounded-full
                                    bg-green-200'
                                >
                                    <FaUsers className='text-blue-700'/>
                                </div>

                                <div>
                                    <h2 className='text-black font-semibold'>Anna Costa</h2>
                                    <h3 className='text-gray-500 text-[0.9rem]'>Teacher</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div 
                    className='w-full bg-linear-to-r from-blue-600 to-purple-600 py-20
                    flex items-center justify-center flex-col gap-y-8 mt-16'
                >
                    <h2 className='text-center text-white text-4xl font-bold'>Ready to start your journey?</h2>
                    <h3 className='text-center text-white font-semibold'>Join thousands of students who are already transforming their lives</h3>

                    <button 
                        className='rounded-lg text-blue-600 font-semibold bg-white px-10 py-4
                        text-lg' 
                    >
                        Start free now
                    </button>
                </div>

                <footer>

                </footer>
            </main>
        </div>
    )
}
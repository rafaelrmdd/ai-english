import { FaBrain, FaMicrophone, FaBook, FaChartLine, FaUsers, FaStar, FaPlay, FaCheck, FaArrowRight } from 'react-icons/fa';
import { Header } from './components/Header';
import { GoogleGenAI } from '@google/genai';
import { useEffect } from 'react';

export function Home() {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    useEffect(() => {
        const test = async () => {
            const ai = new GoogleGenAI({apiKey});

            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: "Explain how AI works in a few words",
            });

            console.log('response: ', response.text);
        }

        test();
    }, [])

    return (
        <div>
            <Header />

            <main className="mt-16">
                <div className='px-14'>
                    <h2 
                        className="font-semibold text-[0.9rem] text-blue-600
                        px-3 py-2 bg-blue-100 inline-block rounded-full"
                    >
                        🚀 Over 50,000 students learning
                    </h2>

                    <section className="mt-8 grid grid-cols-2 gap-x-6 items-center">
                        <div>
                            <h1 
                                className="text-6xl font-bold leading-18"
                            >
                                Learn English using <br/> the Power of <br/> 
                                <span className="text-blue-600">Artificial <br/> Intelligence</span>
                            </h1>
                            
                            <h2 className="mt-8 text-gray-600 text-xl">
                                Your personalized journey to fluency starts here.   
                                Learn naturally by conversing with advanced AI.
                            </h2>

                            <div className="flex gap-x-6 mt-8">
                                <button 
                                    className="flex items-center gap-x-3 px-5 py-2 bg-blue-600 text-white text-xl rounded-lg
                                    font-semibold"
                                >
                                    Get Started now <FaArrowRight size={18} />
                                </button>
                                <button
                                    className="flex items-center gap-x-3 px-5 py-4 bg-white text-gray-700 text-xl rounded-lg
                                    font-semibold"
                                >
                                    <FaPlay size={18} /> Watch Demo
                                </button>
                            </div>

                            <div className='flex gap-x-8 mt-8'>
                                <div className='flex items-center gap-x-2 text-[0.8rem]'>
                                    <FaCheck className='text-green-300'/>
                                    <span className='text-gray-600'>
                                        No credit card required
                                    </span>
                                </div>

                                <div className='flex items-center gap-x-2 text-[0.8rem]'>
                                    <FaCheck className='text-green-300'/>
                                    <span className='text-gray-600'>
                                        7 Days free trial
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Black square temporary */}
                        <div>
                            <div className="w-full h-[450px] rounded-lg bg-black">
                            </div>
                        </div>
                    </section>
                </div>

                <div 
                    className='flex justify-around items-center bg-blue-700 w-full mt-24
                    py-16'
                >
                    <div className='flex items-center flex-col gap-y-2'>
                        <strong className='text-white font-bold text-4xl text-center'>50K+</strong>

                        <span className=' text-white font-normal'>Active Students</span>
                    </div>

                    <div className='flex items-center flex-col gap-y-2'>
                        <strong className='text-white font-bold text-4xl text-center'>98%</strong>

                        <span className=' text-white font-normal'>Satisfaction</span>
                    </div>

                    <div className='flex items-center flex-col gap-y-2'>
                        <strong className='text-white font-bold text-4xl text-center'>1M+</strong>

                        <span className=' text-white font-normal'>AI Conversations</span>
                    </div>

                    <div className='flex items-center flex-col gap-y-2'>
                        <strong className='text-white font-bold text-4xl text-center'>24/7</strong>

                        <span className=' text-white font-normal'>Availability</span>
                    </div>
                </div>

                <div className='mt-24 px-20'>
                    <div className='w-full'>
                        {/* Change company name later */}
                        <h2 className='text-black font-bold text-4xl text-center'>Why choose EnglishAI?</h2>
                        <h3 className='text-gray-600 text-center mt-4 text-[1.1rem]'>Cutting-edge technology to accelerate your progress</h3>
                    </div>

                    <div className='mt-16 grid grid-cols-4 mb-8 gap-x-8'>
                        <div className='space-y-4 shadow-xl rounded-lg p-6'>
                            <FaBrain className='text-blue-700 w-9 h-9'/>
                            <strong className='text-black font-bold text-[1.1rem]'>Custom AI</strong> <br/>
                            <span className='text-gray-600'>Learn on your pace with plan fit to your level</span>
                        </div>

                        <div className='space-y-4 shadow-xl rounded-lg p-6'>
                            <FaMicrophone className='text-blue-700 w-9 h-9'/>
                            <strong className='text-black font-bold text-[1.1rem]'>Real Conversation</strong> <br/>
                            <span className='text-gray-600'>Practice talking to the AI assistent 24/7</span>
                        </div>

                        <div className='space-y-4 shadow-xl rounded-lg p-6'>
                            <FaChartLine className='text-blue-700 w-9 h-9'/>
                            <strong className='text-black font-bold text-[1.1rem]'>Smart Progress</strong> <br/>
                            <span className='text-gray-600'>Track your evolution with detailed analysis</span>
                        </div>

                        <div className='space-y-4 shadow-xl rounded-lg p-6'>
                            <FaBook className='text-blue-700 w-9 h-9'/>
                            <strong className='text-black font-bold text-[1.1rem]'>Dynamic Content</strong> <br/>
                            <span className='text-gray-600'>AI generated exercises based on your interests</span>
                        </div>
                    </div>
                </div>

                <div className='mt-40 px-20'>
                    <div className='w-full'>
                        <h2 className='text-black font-bold text-4xl text-center'>How does it work?</h2>
                        <h3 className='text-gray-600 text-center text-xl mt-4'>Simple, efficient, and personalized</h3>
                    </div>

                    <div className='grid grid-cols-3 mt-16'>
                        <div className='flex items-center flex-col'>
                            <div 
                                className='flex items-center justify-center rounded-full 
                                w-16 h-16 bg-blue-700 text-white font-bold text-2xl'
                            >
                                <span>1</span>
                            </div>

                            <h2 className='font-bold text-black mt-4 text-xl'>Take the test</h2>
                            <h3 className='text-gray-600 mt-2'>AI assesses your current level in minutes</h3>
                        </div>

                        <div className='flex items-center flex-col'>
                            <div 
                                className='flex items-center justify-center rounded-full 
                                w-16 h-16 bg-blue-700 text-white font-bold text-2xl'
                            >
                                <span>1</span>
                            </div>

                            <h2 className='font-semibold text-black mt-4 text-xl'>Personalized Plan</h2>
                            <h3 className='text-gray-600 mt-2'>Get a customized study roadmap</h3>
                        </div>

                        <div className='flex items-center flex-col'>
                            <div 
                                className='flex items-center justify-center rounded-full 
                                w-16 h-16 bg-blue-700 text-white font-bold text-2xl'
                            >
                                <span>1</span>
                            </div>

                            <h2 className='font-semibold text-black mt-4 text-xl'>Practice & Evolve</h2>
                            <h3 className='text-gray-600 mt-2'>Converse, learn, and achieve fluency</h3>
                        </div>
                    </div>
                </div>

                <div className='mt-40 px-20'>
                    <div className='w-full'>
                        <h2 className='text-black font-bold text-4xl text-center'>Choose your plan</h2>
                        <h3 className='text-gray-600 text-center text-xl mt-4'>Invest on your future today</h3>
                    </div>

                    <div className='mt-16 grid grid-cols-3 gap-x-8'>
                        <div className='p-8'>
                            <div>
                                <h2 className='text-2xl text-black font-bold mb-2'>Basic</h2>
                                <span className='text-3xl text-black font-bold'>$19</span> <span className='text-gray-600'>/month</span>

                                <div className='flex flex-col gap-y-4 mt-6'>
                                    <div className='flex gap-x-3 items-center'>
                                        <FaCheck className='text-green-500'/> <h3>30 min/day with AI</h3>
                                    </div>

                                    <div className='flex gap-x-3 items-center'>
                                        <FaCheck className='text-green-500'/> <h3>Basic Exercises</h3>
                                    </div>

                                    <div className='flex gap-x-3 items-center'>
                                        <FaCheck className='text-green-500'/> <h3>Email support</h3>
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
                                <span className='text-4xl text-black font-bold'>$39</span> 
                                <span className='text-gray-500'>/month</span>

                                <div className='flex flex-col gap-y-4 mt-6'>
                                    <div className='flex gap-x-3 items-center'>
                                        <FaCheck className='text-green-500'/> <h3 className=''>Unlimited</h3>
                                    </div>

                                    <div className='flex gap-x-3 items-center'>
                                        <FaCheck className='text-green-500'/> <h3>All Exercises</h3>
                                    </div>

                                    <div className='flex gap-x-3 items-center'>
                                        <FaCheck className='text-green-500'/> <h3>Priority Support</h3>
                                    </div>

                                    <div className='flex gap-x-3 items-center'>
                                        <FaCheck className='text-green-500'/> <h3>Certificate</h3>
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
                                        <FaCheck className='text-green-500'/> <h3>Everything in Pro</h3>
                                    </div>

                                    <div className='flex gap-x-3 items-center'>
                                        <FaCheck className='text-green-500'/> <h3>Live Classes</h3>
                                    </div>

                                    <div className='flex gap-x-3 items-center'>
                                        <FaCheck className='text-green-500'/> <h3>Personal Mentor</h3>
                                    </div>

                                    <div className='flex gap-x-3 items-center'>
                                        <FaCheck className='text-green-500'/> <h3>Exclusive Materials</h3>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full flex justify-center mt-8'>
                                <button className='font-semibold text-center'>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-40 px-20'>
                    <h2 className='text-black font-bold text-4xl text-center mb-24'>What our students say</h2>

                    <div className='grid grid-cols-3 gap-x-8'>
                        <div className='p-4 flex flex-col gap-y-4 shadow-xl rounded-lg'>
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

                        <div className='p-4 flex flex-col gap-y-4 shadow-xl rounded-lg'>
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

                        <div className='p-4 flex flex-col gap-y-4 shadow-xl rounded-lg'>
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
import { FaRobot, FaMicrophone, FaPaperPlane, FaBook, FaLightbulb, FaVolumeUp, FaPaperclip, FaSmile, FaUser } from 'react-icons/fa';
import { RightBar } from './components/RightBar';
import { LeftBar } from './components/LeftBar';
import { GoogleGenAI } from '@google/genai';

export function Chat() {
    //Change name later...
    type Button = React.MouseEvent<HTMLButtonElement>;

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const ai = new GoogleGenAI({apiKey});

    //AI context
    const chat = ai.chats.create({
        model: "gemini-2.5-flash",
        history: [
            {
                role: "user",
                parts: [{text: "For all our conversation, act and answer like an English teacher"}]
            },
            {
                role: "model",
                parts: [{text: "Understood! I'll act as your English teacher throughout our conversation. How may I help you today?"}]
            }
        ]
    });
    
    const handleClick = async (event: Button) => {
        const prompt = event.currentTarget;

        const response = await chat.sendMessage({ message: `${prompt}` });
        
        console.log('response: ', response.text);
    };


    return (
        <div className="flex items-start">
            <LeftBar />

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
                    <div className='flex flex-col gap-y-8 w-full h-96'>
                        {/* Ai message model */}
                        <div className='flex gap-x-4'>
                            <div 
                                className="flex items-center justify-center w-10 h-10 rounded-full
                                bg-linear-to-r from-blue-500 to-purple-500"
                            >
                                <FaRobot className='text-white' size={20}/>
                            </div>

                            <div>
                                <div className='px-6 py-4 border border-gray-200 rounded-2xl shadow-md p'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, amet?</p>
                                </div>

                                <span className='text-gray-500 text-[0.8rem]'>10:30 AM</span>
                            </div>
                        </div>

                        {/* User message model */}
                        <div className='flex gap-x-4 justify-end'>
                            <div>
                                <div 
                                    className='px-6 py-4 border border-gray-200 rounded-2xl shadow-md p
                                    bg-blue-600'
                                >
                                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, amet?</p>
                                </div>

                                <span className='text-gray-500 text-[0.8rem] text-end block'>10:30 AM</span>
                            </div>

                            <div 
                                className="flex items-center justify-center w-10 h-10 rounded-full
                                bg-linear-to-r from-gray-700 to-black"
                            >
                                <FaUser className='text-white' size={20}/>
                            </div>
                        </div>
                    </div>

                    {/* Chat type bar*/}
                    <div className='flex flex-col gap-y-4 gap-x-4 '>
                        <div className='flex gap-x-10 p-3'>
                            <div className='flex items-center gap-x-2 text-purple-600'>
                                <FaLightbulb size={14}/>
                                <span className='text-[0.9rem]'>Get a hint</span>
                            </div>

                            <div className='flex items-center gap-x-2 text-green-600'>
                                <FaVolumeUp size={14}/>
                                <span className='text-[0.9rem]'>Pronunciation</span>
                            </div>

                            <div className='flex items-center gap-x-2 text-orange-600'>
                                <FaBook size={14}/>
                                <span className='text-[0.9rem]'>Explain word</span>
                            </div>
                        </div>

                        <div className='flex gap-x-3'>
                            <div 
                                className='flex gap-x-2 flex-1 px-4 py-3 items-center border-2
                                border-gray-200 focus-within:border-blue-500 rounded-2xl
                                transition duration-150'
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
                                onClick={(e: Button) => handleClick(e)}
                                className='flex items-center gap-x-3 bg-blue-600 px-6 py-4 font-bold 
                                text-white rounded-2xl hover:bg-blue-700 transition duration-150'
                            >
                                <FaPaperPlane /> Send
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <RightBar />
        </div>
    )
}
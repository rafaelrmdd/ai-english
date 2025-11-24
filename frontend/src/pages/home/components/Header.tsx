export function Header() {
    return (
        <header 
            className="flex justify-between items-center px-20 py-4 shadow-lg rounded-lm"
        >
            <span className="font-bold text-black text-2xl">EnglishAI</span>

            <nav className="flex gap-x-5">
                <a 
                    className="text-gray-600 hover:text-blue-600 transition duration-150"
                    href="#"
                >
                    Features
                </a>
                <a href="#">How it works</a>
                <a href="#">Pricing</a>
                <a href="#">Testimonials</a>
            </nav>

            <div className="flex gap-x-6 items-center">
                <span className='text-blue-600'>Sign In</span>
                <button 
                    className="px-6 py-2 text-white bg-blue-600 rounded-lg
                    hover:bg-blue-700 transition duration-150"
                >
                    Start Free 
                </button>
            </div>
        </header>
    )
}
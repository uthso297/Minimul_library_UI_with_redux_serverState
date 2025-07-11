const Footer = () => {
    return (
        <div className="px-6 py-4 space-y-16">
            <h1 className="font-bold text-xl text-center">LibraryMate</h1>
            <div className="w-fit mx-auto text-center space-y-3">
                <p>Stay updated with our library</p>
                <div className='relative flex items-center justify-between gap-1'>
                    <input
                        className="border-2 border-[#EBEBEA] rounded-lg pl-9 py-1 w-64"
                        aria-label="Search books"
                        type="email"
                        placeholder="Enter your email"
                    />
                    <svg
                        className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 6 8-6v10H4z" />
                    </svg>
                    <button className="bg-[#636AE8FF] px-3 py-2 text-white rounded-lg">Subsribe</button>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <button className="text-[#8C8D8BFF] px-3 py-2 rounded-lg bg-[#F7F7F7FF]">English</button>
                <p className="text-[#8C8D8BFF]">&copy; 2025 LibraryMate. All rights reserved.</p>
                <ul className="flex space-x-4">
                    <li>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg
                                className="w-6 h-6 text-[#8C8D8BFF] hover:text-blue-800"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-.97 0-1.75-.8-1.75-1.77s.78-1.77 1.75-1.77 1.75.8 1.75 1.77-.78 1.77-1.75 1.77zm13.5 10.3h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.2c.65-1.02 2.38-1.1 3.2-.1 1 1.3 1.6 2.6 1.6 4.4v3.5z" />
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <svg
                                className="w-6 h-6 text-[#8C8D8BFF] hover:text-blue-700"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M22.675 0h-21.35c-.73 0-1.325.596-1.325 1.326v21.348c0 .73.596 1.326 1.325 1.326h11.495v-9.294h-3.13v-3.622h3.13v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.764v2.309h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.325-.596 1.325-1.326v-21.349c0-.73-.596-1.326-1.325-1.326z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Footer;
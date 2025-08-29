import { useState, useEffect } from 'react'
import { Cpu } from 'lucide-react'
export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`
            fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b
            ${isScrolled 
                ? 'bg-gray-900/90 backdrop-blur-md shadow-2xl border-gray-700/50 opacity-100' 
                : 'bg-transparent border-transparent opacity-0'
            }
        `}>
            <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-6">
                <a 
                    href="" 
                    className="flex items-center space-x-2 text-gray-100 hover:text-blue-400 transition-colors duration-200"
                >
                    <Cpu />
                    <h1 className='text-3xl font-bold'>Thomas McKee</h1>
                </a>
                <nav className="flex items-center space-x-10">
                    <a 
                        href="#about" 
                        className="text-xl font-semibold text-gray-300 hover:text-blue-400 hover:scale-105 transition-all duration-200 relative group"
                    >
                        About
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
                    </a>
                    <a 
                        href="#skills" 
                        className="text-xl font-semibold text-gray-300 hover:text-blue-400 hover:scale-105 transition-all duration-200 relative group"
                    >
                        Skills
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
                    </a>
                    {/* <a 
                        href="#education" 
                        className="text-xl font-semibold text-gray-300 hover:text-blue-400 hover:scale-105 transition-all duration-200 relative group"
                    >
                        Education
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
                    </a>
                    <a 
                        href="#work" 
                        className="text-xl font-semibold text-gray-300 hover:text-blue-400 hover:scale-105 transition-all duration-200 relative group"
                    >
                        Work
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
                    </a> */}
                    <a 
                        href="#projects" 
                        className="text-xl font-semibold text-gray-300 hover:text-blue-400 hover:scale-105 transition-all duration-200 relative group"
                    >
                        Projects
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
                    </a>
                    <a 
                        href="#contact" 
                        className="text-xl font-semibold text-gray-300 hover:text-blue-400 hover:scale-105 transition-all duration-200 relative group"
                    >
                        Contact
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
                    </a>
                </nav>
            </div>
        </header>
    );
}
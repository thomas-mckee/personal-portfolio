import { useState, useEffect } from 'react'

export const Header = () => {
    const [activeSection, setActiveSection] = useState('home')

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ]

    return (
        <header className="fixed top-7 left-1/2 transform -translate-x-1/2 z-50">
            <nav className="flex items-center bg-gray-900/80 backdrop-blur-md shadow-2xl border border-gray-700/80 rounded-4xl px-3 py-3">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`
                            relative cursor-pointer mx-1 px-4 py-2 text-md font-medium rounded-xl transition-all duration-300
                            ${activeSection === item.id 
                                ? 'text-white bg-gray-700/50' 
                                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                            }
                        `}
                    >
                        {item.label}
                    </button>
                ))}
            </nav>
        </header>
    );
}
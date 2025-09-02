import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const navItems = [
        { id: 'home', label: 'Home', path: '/' },
        { id: 'about', label: 'About', path: '/about' },
        { id: 'projects', label: 'Projects', path: '/projects' },
    ]

    const getActiveItem = () => {
        const currentPath = location.pathname;
        const activeItem = navItems.find(item => item.path === currentPath);
        return activeItem ? activeItem.id : 'home';
    };

    return (
        <header className="fixed top-7 left-1/2 transform -translate-x-1/2 z-50">
            <nav className="flex items-center bg-gray-900/80 backdrop-blur-md shadow-2xl border border-gray-700/80 rounded-4xl px-3 py-3">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => {
                            navigate(item.path);
                            window.scrollTo(0, 0);
                        }}
                        className={`
                            relative cursor-pointer mx-1 px-4 py-2 text-md font-medium rounded-xl transition-all duration-300
                            ${getActiveItem() === item.id 
                                ? 'text-white bg-gray-700/50 border border-gray-400/50' 
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
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show header after scrolling down 100px on homepage, always show on other pages
            if (location.pathname === '/') {
                setIsVisible(window.scrollY > 1);
            } else {
                setIsVisible(true);
            }
        };

        handleScroll(); // Check initial state
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);
    
    const navItems = [
        { id: 'home', label: 'HOME', path: '/' },
        { id: 'about', label: 'ABOUT', path: '/about' },
        { id: 'projects', label: 'PROJECTS', path: '/projects' },
    ]

    const getActiveItem = () => {
        const currentPath = location.pathname;
        
        // Check for exact match first
        const exactMatch = navItems.find(item => item.path === currentPath);
        if (exactMatch) return exactMatch.id;
        
        // Check if we're on a sub-route of projects
        if (currentPath.startsWith('/projects')) {
            return 'projects';
        }
        
        // Default to home
        return 'home';
    };

    return (
            <header className={`fixed top-3 sm:top-5 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="relative w-[300px] h-[70px] sm:w-[300px] sm:h-[100px]">
            <img
                src="/images/headerIC1.svg"
                alt="IC chip"
                className="absolute inset-0 w-full h-full object-contain -z-10"
            />

            <nav className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-4 px-4 sm:px-8 pl-3 sm:pl-10 z-10 font-mono">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => {
                            navigate(item.path);
                            window.scrollTo(0, 0);
                        }}
                        className={`
                            relative cursor-pointer px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-lg font-medium rounded transition-all duration-300
                            ${getActiveItem() === item.id
                            ? 'text-amber-50 bg-amber-100/10 border border-amber-200/10'
                            : 'text-amber-100/70 hover:text-amber-50 hover:bg-amber-100/10'}
                        `}
                    >
                        {item.label}
                    </button>
                ))}
            </nav>
        </div>
    </header>

    );
}
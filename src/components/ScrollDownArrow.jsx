import { useState, useEffect } from 'react';

export const ScrollDownArrow = () => {
    const [visible, setVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        // Show arrow after 5 seconds
        const timer = setTimeout(() => {
            setVisible(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const shouldShow = visible && scrollY < 50;

    return (
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-500 ease-out ${shouldShow ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className={shouldShow ? 'animate-bounce' : ''}>
                <svg 
                    className="w-12 h-12 text-white animate-pulse" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path d="M12 16l-6-6h12l-6 6z" />
                </svg>
            </div>
        </div>
    );
};
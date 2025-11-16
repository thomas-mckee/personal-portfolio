import { useState, useEffect } from 'react';

export const ScrollDownArrow = () => {
    const [visible, setVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        // Show arrow after 3 seconds
        const timer = setTimeout(() => {
            setVisible(true);
        }, 19000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const shouldShow = visible && scrollY < 50;

    const handleClick = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={handleClick}
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-500 ease-out cursor-pointer hover:scale-110 ${shouldShow ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        >
            <div className={shouldShow ? 'animate-bounce' : ''}>
                <svg
                    className="w-24 h-24"
                    viewBox="0 0 20 20"
                    style={{ filter: 'drop-shadow(0 0 12px rgba(83, 170, 255, 0.9)) drop-shadow(0 0 6px rgba(83, 170, 255, 0.9))' }}
                >
                    {/* Pixelated down arrow */}
                    <g fill="#fffbea">
                        {/* Arrow shaft */}
                        <rect x="9" y="2" width="2" height="12" />
                        {/* Arrow head outline - pixelated */}
                        <rect x="5" y="10" width="2" height="2" />
                        <rect x="13" y="10" width="2" height="2" />
                        <rect x="7" y="12" width="2" height="2" />
                        <rect x="11" y="12" width="2" height="2" />
                        <rect x="9" y="14" width="2" height="2" />
                    </g>
                </svg>
            </div>
        </button>
    );
};
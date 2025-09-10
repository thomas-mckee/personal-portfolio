import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const TailwindKOMProjectPage = () => {
    const sections = [
        { id: 'motivation', title: 'Motivation' },
        { id: 'features', title: 'Features' },
        { id: 'implementation', title: 'Implementation' },
        { id: 'challenges', title: 'Challenges' },
        { id: 'technologies', title: 'Technologies' }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.querySelector(`[data-section="${sectionId}"]`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 relative overflow-hidden">
            <Header />

            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/8 right-1/12 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/8 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/5 right-1/3 w-64 h-64 bg-slate-300 rounded-full blur-3xl"></div>
                <div className="absolute top-3/4 left-2/3 w-52 h-52 bg-blue-400 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-yellow-300 rounded-full blur-xl"></div>
            </div>

            <div className="py-24 sm:py-32 md:py-40 relative z-10">
                <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
                    <div className="flex gap-8">
                        {/* Main Content */}
                        <div className="flex-1">
                            {/* Title and Tags */}
                            <div className="mb-8">
                                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between lg:gap-8 mb-4">
                                    <div className="inline-block">
                                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2">
                                            TailwindKOM
                                        </h1>
                                        <div className="h-1 bg-gradient-to-r from-blue-400 to-yellow-300 rounded-full"></div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-4 lg:mt-0 lg:mb-2">
                                        <span className="px-2 sm:px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-xs sm:text-sm font-medium">
                                            Full Stack
                                        </span>
                                        <span className="px-2 sm:px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-xs sm:text-sm font-medium">
                                            API
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Video Container */}
                            <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 bg-gray-800 border border-gray-700/30">
                                <iframe
                                    src="https://www.youtube.com/embed/_FtWEi3yTPI?autoplay=1&mute=1&loop=1&playlist=_FtWEi3yTPI&controls=0&showinfo=0&rel=0&modestbranding=1"
                                    title="TailwindKOM"
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>

                            {/* Project Sections */}
                            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl py-6 px-14">
                                {/* Content will go here */}
                            </div>
                        </div>

                        {/* Right Navigation */}
                        <div className="hidden lg:block ml-8 w-48">
                            <div className="fixed w-48" style={{top: '12rem', left: 'calc(50% + 400px)'}}>
                                <nav className="space-y-8">
                                    {/* Links */}
                                    <div className="space-y-3">
                                        <a 
                                            href="https://github.com/thomas-mckee/TailwindKOM"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors text-center cursor-pointer"
                                        >
                                            View on GitHub
                                        </a>
                                        <a 
                                            href="https://tailwindkom.vercel.app/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors text-center cursor-pointer"
                                        >
                                            Live Demo
                                        </a>
                                    </div>
                                    
                                    {/* Navigation */}
                                    <ul className="space-y-2">
                                        {sections.map((section) => (
                                            <li key={section.id}>
                                                <button
                                                    onClick={() => scrollToSection(section.id)}
                                                    className="block text-base text-gray-400 hover:text-white transition-colors cursor-pointer"
                                                >
                                                    {section.title}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
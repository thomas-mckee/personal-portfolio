import { useState, useEffect } from 'react';

import { Header } from "../components/Header";
import { ProjectCard } from "../components/ProjectCard";
import { ScrollDownArrow } from "../components/ScrollDownArrow";
import { projects } from '../data/projects';
import { Footer } from '../components/Footer';

const featuredProjects = projects.slice(0, 2);

export const HomePage = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const textOpacity = Math.max(0, 1 - scrollY / 500);

    return (
        <div className='min-h-screen'>  

            <Header />

            <div className="fixed inset-0 flex items-center overflow-hidden bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
                    <div className="text-white ml-4 sm:ml-8 md:ml-16" style={{ opacity: textOpacity }}>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 sm:mb-8 md:mb-10">
                            Hey! I'm <span className="bg-gradient-to-r from-blue-400 to-yellow-300 text-transparent bg-clip-text">Thomas McKee</span>
                        </h1>
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4">
                            I'm a computer engineering student
                        </p>
                        <p className="text-lg sm:text-xl md:text-2xl font-bold">
                            Welcome to my portfolio.
                        </p>
                    </div>
                </div>           
                
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-8 left-4 w-48 h-48 sm:w-64 sm:h-64 md:top-1/32 md:left-1/16 md:w-64 md:h-64 lg:w-128 lg:h-128 bg-slate-300 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/3 right-4 w-36 h-36 sm:w-36 sm:h-36 md:top-1/4 md:right-1/6 md:w-48 md:h-48 lg:w-96 lg:h-96 bg-yellow-300 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-16 left-1/4 w-28 h-28 sm:w-28 sm:h-28 md:bottom-1/12 md:left-1/3 md:w-32 md:h-32 lg:w-64 lg:h-64 bg-blue-400 rounded-full blur-3xl"></div>
                </div>
                
                <ScrollDownArrow />
            </div>
          
            <div className="relative z-10 pt-12 sm:pt-16 md:pt-20 pb-20 px-4 sm:px-6" style={{ marginTop: '100vh' }}>
                <div className="max-w-7xl mx-auto relative z-10">        
                    <div className="inline-block mb-8 sm:mb-10 md:mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-extrabold text-white">Featured Projects</h1>
                        <div className="h-1 bg-gradient-to-r from-blue-400 to-yellow-300 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                        {featuredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    );
}
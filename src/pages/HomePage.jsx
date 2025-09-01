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
                <div className="max-w-7xl mx-auto px-6 w-full">
                    <div className="text-white ml-16" style={{ opacity: textOpacity }}>
                        <h1 className="md:text-7xl text-5xl font-extrabold mb-10">
                            Hey! I'm <span className="bg-gradient-to-r from-blue-400 to-yellow-300 text-transparent bg-clip-text">Thomas McKee</span>
                        </h1>
                        <p className="text-4xl mb-4">
                            I'm a computer engineering student
                        </p>
                        <p className="text-2xl font-bold">
                            Welcome to my portfolio.
                        </p>
                    </div>
                </div>           
                
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/32 left-1/16 w-128 h-128 bg-slate-300 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/4 right-1/6 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/12 left-1/3 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
                </div>
                
                <ScrollDownArrow />
            </div>
          
            <div className="relative z-10 pt-20 pb-40 " style={{ marginTop: '100vh' }}>
                <div className="max-w-7xl mx-auto relative z-10">        
                    <div className="inline-block mb-12">
                        <h1 className="text-6xl mb-4 font-extrabold text-white">Featured Projects</h1>
                        <div className="h-1 bg-gradient-to-r from-blue-400 to-yellow-300 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
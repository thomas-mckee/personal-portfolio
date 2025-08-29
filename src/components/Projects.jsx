import { projects } from '../data/projects';
import { useState } from 'react';

const ProjectCard = ({ project }) => {
    const handleViewProject = () => {
        // Navigate to individual project page
        window.location.href = `/project/${project.id}`;
    };

    return (
        <div>
            {/* Video Container */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 cursor-pointer group" onClick={handleViewProject}>
                <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-contain"
                    style={{ imageRendering: 'crisp-edges' }}
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xl font-semibold">
                        View Project
                    </span>
                </div>
            </div>

            {/* Project Info */}
            <div>
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">{project.description}</p>
                
                {/* Continue Reading + Tags Row */}
                <div className="flex items-center justify-between">
                    <button 
                        onClick={handleViewProject}
                        className="text-white hover:text-blue-400 hover:scale-105 font-semibold transition-all duration-200 relative group cursor-pointer"
                    >
                        Continue Reading →
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
                    </button>
                    
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                            <span 
                                key={index} 
                                className="px-3 py-1 rounded-full text-sm font-medium text-white border border-white/30 bg-white/10 backdrop-blur-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Projects = () => {
    // Only show first 4 projects in 2x2 grid
    const featuredProjects = projects.slice(0, 4);
    
    return (
        <section id="projects" className="py-20 relative z-10">
            <div className="mx-45">
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-extrabold text-white mb-4">Projects</h2>
                    <p className="text-xl text-gray-300">Featured work and technical solutions</p>
                </div>
                
                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
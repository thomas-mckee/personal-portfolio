export const ProjectCard = ({ project }) => {
    const handleViewProject = () => {
        // Navigate to individual project page
        window.location.href = project.github; //`/${project.id}`;
    };

    return (
        <div>
            {/* Video Container */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 bg-gray-800 cursor-pointer group" onClick={handleViewProject}>
                {project.youtubeId ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${project.youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1`}
                        title={project.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ) : (
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
                )}
                
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
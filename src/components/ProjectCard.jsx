export const ProjectCard = ({ project }) => {
    const handleViewProject = () => {
        if (project.hasPage) {
            window.location.href = `projects/${project.id}`;
        } else if (project.github) {
            window.open(project.github, '_blank');
        }
    };

    return (
        <div className="mb-3 sm:mb-10">
            {/* Video Container */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 cursor-pointer group border-2 border-gray-700 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6),inset_0_4px_12px_rgba(0,0,0,0.4)]" onClick={handleViewProject}>
                {project.youtubeId ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${project.youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1`}
                        title={project.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ) : (
                    <img
                        src={`/images/${project.img}`}
                        alt={`${project.title}`}
                        className="w-full h-full blur-sm"
                    />
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.video ? (
                        <span className="text-amber-50 text-xl font-mono font-semibold">
                            View Project
                        </span>
                        ) : (
                            <span className="text-amber-50 text-xl font-mono font-semibold">
                            Coming Soon
                        </span>
                        )}
                    
                </div>
            </div>

            {/* Project Info */}
            <div>
                <h3 className="text-2xl sm:text-2xl md:text-3xl font-mono font-bold text-amber-50 mb-2">{project.title}</h3>
                <p className="text-base font-tech sm:text-lg text-amber-50/60 leading-relaxed mb-4">{project.description}</p>
                
                {/* Continue Reading + Tags Row */}
                <div className="flex items-center justify-between gap-4">
                
                    {/* Tags — left */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.tags.map((tag, index) => (
                        <span 
                            key={index} 
                            className="px-2 sm:px-3 py-1 rounded-lg text-sm sm:text-lg  font-mono text-amber-50 border border-white/30 bg-white/10 backdrop-blur-sm"
                        >
                            {tag}
                        </span>
                        ))}
                    </div>

                    {/* Continue Reading — right */}
                    {project.hasPage && (
                    <button
                    onClick={handleViewProject}
                    className="shrink-0 text-amber-50 hover:text-lcd-blue hover:scale-105 font-mono font-semibold transition-all duration-200 relative group cursor-pointer"
                    >
                        <span className="sm:inline text-md sm:text-lg">Continue Reading →</span>

                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lcd-blue shadow-lcd-glow transition-all duration-200 group-hover:w-full"></span>
                    </button>

                    )}
                </div>


            </div>
        </div>
    );
};
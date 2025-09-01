import { useState, useMemo } from "react";
import { Funnel, ChevronDown, X } from "lucide-react";
import { Header } from "../components/Header";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from '../data/projects';
import { Footer } from "../components/Footer";

export const ProjectsPage = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Get all unique tags from projects
    const allFilters = useMemo(() => {
        const filters = new Set();
        projects.forEach(project => {
            project.tags.forEach(tag => filters.add(tag));
        });
        return Array.from(filters).sort();
    }, []);

    // Filter projects based on selected tags
    const filteredProjects = useMemo(() => {
        if (selectedTags.length === 0) return projects;
        return projects.filter(project => 
            selectedTags.some(tag => project.tags.includes(tag))
        );
    }, [selectedTags]);

    const toggleTag = (tag) => {
        setSelectedTags(prev => 
            prev.includes(tag) 
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        );
    };

    const clearFilters = () => setSelectedTags([]);

    return (
        <div className="min-h-screen bg-gray-900 relative overflow-hidden">
            <Header />

            {/* Background decoration - Projects: Tech & dynamic */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/8 right-1/12 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/8 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/5 right-1/3 w-64 h-64 bg-slate-300 rounded-full blur-3xl"></div>
                <div className="absolute top-3/4 left-2/3 w-52 h-52 bg-blue-400 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-yellow-300 rounded-full blur-xl"></div>
            </div>

            <div className="py-24 sm:py-32 md:py-40 relative z-10">
                <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
                    <div className="inline-block">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-extrabold text-white">Projects</h1>
                        <div className="h-1 bg-gradient-to-r from-blue-400 to-yellow-300 rounded-full"></div>
                    </div>

                    {/* Header and Filter Controls */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 mb-6 mt-2">
                        {/* Left side - Active filters */}
                        <div className="flex items-center flex-wrap gap-2 sm:gap-3">
                            {selectedTags.length > 0 && (
                                <>
                                    {selectedTags.map(tag => (
                                        <span 
                                            key={tag}
                                            className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-xs sm:text-sm font-medium"
                                        >
                                            {tag}
                                            <button 
                                                onClick={() => toggleTag(tag)}
                                                className="hover:bg-blue-400/20 rounded-full p-0.5 transition-colors cursor-pointer"
                                            >
                                                <X className="w-3 h-3" />
                                            </button>
                                        </span>
                                    ))}
                                    <button 
                                        onClick={clearFilters}
                                        className="text-gray-400 hover:text-white text-xs sm:text-sm underline transition-colors cursor-pointer"
                                    >
                                        Clear all
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Right side - Filter dropdown */}
                        <div className="relative self-start sm:self-auto">
                            <button
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200 cursor-pointer text-sm sm:text-base"
                            >
                                <Funnel className="w-4 h-4" />
                                <span>Filter</span>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isFilterOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isFilterOpen && (
                                <div className="absolute left-0 sm:right-0 top-full mt-2 w-full sm:w-64 bg-gray-800/95 backdrop-blur-sm border border-gray-600/50 rounded-lg shadow-2xl z-20">
                                    <div className="p-4">
                                        <h3 className="text-white font-medium mb-3">Filter by Type</h3>
                                        <div className="max-h-64 overflow-y-auto space-y-2">
                                            {allFilters.map(tag => (
                                                <label 
                                                    key={tag} 
                                                    className="flex items-center gap-3 p-2 hover:bg-gray-700/50 rounded cursor-pointer transition-colors"
                                                >
                                                    <input 
                                                        type="checkbox"
                                                        checked={selectedTags.includes(tag)}
                                                        onChange={() => toggleTag(tag)}
                                                        className="rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-800"
                                                    />
                                                    <span className="text-gray-300 text-sm">{tag}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                    
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-12 sm:py-16 md:py-20">
                            <p className="text-gray-400 text-base sm:text-lg">No projects found with the selected filters.</p>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
}
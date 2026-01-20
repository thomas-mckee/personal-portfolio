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
        <div className="min-h-screen bg-gray-800 relative overflow-hidden">
            <Header />

            <div className="py-24 md:py-32 relative z-10 font-mono">
                <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
                    <div className="inline-block">
                        <h1 className="text-5xl md:text-5xl lg:text-6xl my-1 font-mono font-extrabold text-amber-50">
                            Projects
                        </h1>
                        {/* <div className="h-1 rounded-full bg-lcd-blue shadow-lcd-glow"></div> */}
                    </div>

                    {/* Header and Filter Controls */}
                    <div className="flex flex-row justify-between items-center gap-4 sm:gap-0">
                        {/* Left side - Active filters */}
                        <div className="flex items-center flex-wrap gap-2 sm:gap-3">
                            {selectedTags.length > 0 && (
                                <>
                                    {selectedTags.map(tag => (
                                        <span 
                                            key={tag}
                                            className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 bg-blue-500/20 border border-lcd-blue rounded-lg text-blue-300 text-xs sm:text-sm"
                                        >
                                            {tag}
                                            <button 
                                                onClick={() => toggleTag(tag)}
                                                className="hover:bg-blue-400/20 p-0.5 transition-colors cursor-pointer"
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
                                className="flex items-center gap-2 px-3 sm:px-4 py-2 mb-4 bg-gray-900/50 border rounded-lg text-amber-50/90 hover:text-amber-50 hover:bg-gray-700/50 transition-all duration-200 cursor-pointer text-sm sm:text-base"
                            >
                                <Funnel className="w-4 h-4" />
                                <span>Filter</span>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isFilterOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isFilterOpen && (
                                <>
                                    {/* Backdrop */}
                                    <div
                                        onClick={() => setIsFilterOpen(false)}
                                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-10 sm:hidden"
                                    />

                                    {/* Bottom sheet / Dropdown */}
                                    <div
                                        className="
                                            fixed inset-x-0 bottom-0 z-20
                                            sm:absolute sm:inset-auto sm:top-full sm:right-0
                                            w-full sm:w-64
                                            bg-gray-900/95 backdrop-blur
                                            border border-gray-600/50
                                            rounded-t-2xl sm:rounded-lg
                                            shadow-2xl
                                            transition-transform duration-300
                                        "
                                    >
                                        {/* Drag handle (mobile only) */}
                                        <div className="sm:hidden flex justify-center pt-3">
                                            <div className="w-12 h-1.5 bg-gray-500/40 rounded-full" />
                                        </div>

                                        <div className="p-4">
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="text-white">Filter by Type</h3>
                                                <button
                                                    onClick={() => setIsFilterOpen(false)}
                                                    className="sm:hidden text-gray-400 hover:text-white"
                                                >
                                                    <X className="w-5 h-5" />
                                                </button>
                                            </div>

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
                                                            className="rounded border-gray-600 bg-gray-700 text-lcd-blue focus:ring-lcd-blue focus:ring-offset-gray-800"
                                                        />
                                                        <span className="text-amber-50/70 text-sm">
                                                            {tag}
                                                        </span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </>
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
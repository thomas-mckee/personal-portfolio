import { Header } from "../components/Header"
import { projects } from '../data/projects';

const project = projects[0];

export const TailwindkomPage = () => {
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

                    <div className="inline-block mb-5">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-extrabold text-white">TailwindKOM</h1>
                        <div className="h-1 bg-gradient-to-r from-blue-400 to-yellow-300 rounded-full"></div>
                    </div>


                    {/* Video Container */}
                    <div className="relative aspect-video rounded-2xl  w-2/3 h-2/3 overflow-hidden mb-6 bg-gray-800 cursor-pointer group">
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
                    </div>
                </div>
            </div>

        </div>
    );
}
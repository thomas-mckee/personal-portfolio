import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { bioData } from '../data/bio';
import { skillCategories } from '../data/skills';

export const AboutPage = () => {
    return (
        <div className='min-h-screen bg-gray-900 relative '>
            <Header />

            {/* Background decoration - About: Personal & warm */}
            <div className="absolute inset-0 opacity-8">
                <div className="absolute top-1/5 left-1/6 w-72 h-72 bg-slate-300 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute top-2/3 left-1/3 w-48 h-48 bg-yellow-300 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/6 left-1/12 w-32 h-32 bg-blue-400 rounded-full blur-xl"></div>
            </div>

            
            <div className="relative overflow-hidden z-0 max-w-7xl mx-auto pt-40">
                <div className="inline-block mb-12">
                    <h1 className="text-6xl mb-2 font-extrabold text-white">About</h1>
                    <div className="h-1 bg-gradient-to-r from-blue-400 to-yellow-300 rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                        <div className="flex flex-col gap-8 justify-center items-center">
                            <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-yellow-200 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                                TM
                            </div>
                            
                            <div className="flex flex-wrap gap-4 justify-center">
                                <a 
                                    href={bioData.socialLinks.linkedin} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center space-x-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                    <span>LinkedIn</span>
                                </a>
                                <a 
                                    href={bioData.socialLinks.github} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center space-x-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                    <span>GitHub</span>
                                </a>
                                <a 
                                    href={bioData.socialLinks.resume} 
                                    download="Thomas_McKee_Resume.pdf"
                                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center space-x-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span>Resume</span>
                                </a>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p className="text-xl text-gray-300 leading-relaxed">{bioData.bio.intro}</p>
                            <p className="text-xl text-gray-300 leading-relaxed">{bioData.bio.interests}</p>
                            <p className="text-xl text-gray-300 leading-relaxed">{bioData.bio.currentStatus}</p>
                        </div>               
                    </div>

                    <div className="inline-block mb-8">
                        <h1 className="text-6xl mb-2 font-extrabold text-white">Skills</h1>
                        <div className="h-1 bg-gradient-to-r from-blue-400 to-yellow-300 rounded-full"></div>
                    </div>

                    <div className="space-y-16 pb-20">
                        {skillCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                            <div className="flex items-center gap-8 mb-10 mx-16">
                                <h3 className="text-3xl font-bold text-gray-300/70 whitespace-nowrap">
                                    {category.name}
                                </h3>
                                <div className="flex-1 h-px bg-gray-600/30"></div>
                            </div>
                            
                            <div className="flex flex-wrap justify-center items-center gap-12">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="text-center group"
                                    >
                                        <div className="w-24 h-24 flex items-center justify-center transition-all duration-300 hover:scale-110">
                                            <img 
                                                src={skill.logo} 
                                                alt={`${skill.name} logo`}
                                                className="max-w-full max-h-full object-contain transition-all duration-300"
                                            />
                                        </div>
                                        <p className="text-white text-sm font-medium mt-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                            {skill.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
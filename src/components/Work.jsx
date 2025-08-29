import { workExperience } from '../data/bio';

export const Work = () => {

    return (
        <section id="work" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-extrabold text-white mb-4">Work</h2>
                </div>
                
                <div className="space-y-8">
                    {workExperience.map((work, index) => (
                        <div key={index} className="bg-gradient-to-r from-white to-gray-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600">
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                                <div className="lg:col-span-3">
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{work.title}</h3>
                                        <h4 className="text-xl text-blue-600 font-semibold mb-2">{work.company}</h4>
                                        <p className="text-gray-600 mb-4">{work.description}</p>
                                    </div>
                                    
                                    <div className="mb-4">
                                        <h5 className="text-lg font-semibold text-gray-800 mb-3">Key Achievements:</h5>
                                        <ul className="space-y-2">
                                            {work.achievements.map((achievement, achievementIndex) => (
                                                <li key={achievementIndex} className="flex items-start">
                                                    <span className="text-blue-600 mr-2 mt-1">▶</span>
                                                    <span className="text-gray-700">{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div>
                                        <h5 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used:</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {work.technologies.map((tech, techIndex) => (
                                                <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="text-center lg:text-right">
                                    <div className="bg-blue-50 rounded-lg p-4 mb-4">
                                        <p className="text-sm text-gray-600 mb-1">Period</p>
                                        <p className="text-lg font-semibold text-gray-900">{work.period}</p>
                                    </div>
                                    <div className="bg-gray-100 rounded-lg p-4">
                                        <p className="text-sm text-gray-600 mb-1">Location</p>
                                        <p className="text-sm font-medium text-gray-700">{work.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
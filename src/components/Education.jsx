import { education } from '../data/bio';

export const Education = () => {

    return (
        <section id="education" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-extrabold text-white mb-4">Education</h2>
                </div>
                
                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <div key={index} className="bg-blue-200 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                                    <h4 className="text-xl text-blue-600 font-semibold mb-2">{edu.school}</h4>
                                    <p className="text-gray-600 mb-4">{edu.description}</p>
                                    
                                    <div className="mb-4">
                                        <h5 className="text-lg font-semibold text-gray-800 mb-3">Relevant Coursework:</h5>
                                        <div className="grid grid-cols-2 gap-2">
                                            {edu.coursework.map((course, courseIndex) => (
                                                <span key={courseIndex} className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                                                    {course}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="text-center lg:text-right">
                                    <div className="bg-blue-50 rounded-lg p-4 mb-4">
                                        <p className="text-sm text-gray-600 mb-1">Period</p>
                                        <p className="text-lg font-semibold text-gray-900">{edu.period}</p>
                                    </div>
                                    <div className="bg-green-50 rounded-lg p-4">
                                        <p className="text-sm text-gray-600 mb-1">GPA</p>
                                        <p className="text-lg font-semibold text-green-700">{edu.gpa}</p>
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
import { skillCategories } from '../data/skills';

export const Skills = () => {

    return (
        <section id="skills" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-extrabold text-white mb-4">Skills</h2>
                </div>

                <div className="space-y-20">
                    {skillCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                            <div className="flex items-center gap-8 mb-10">
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
                                        <p className="text-white text-base font-xl mt-3 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                                            {skill.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

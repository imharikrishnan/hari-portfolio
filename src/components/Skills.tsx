import { skills } from '../data/projectsData';
import { SkillCategory } from '../types';

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    { title: "Frontend Core", skills: skills.frontend },
    { title: "UI Libraries & Visualization", skills: skills.libraries },
    { title: "State Management", skills: skills.stateManagement },
    { title: "Backend & APIs", skills: skills.backend },
    { title: "Tools & DevOps", skills: skills.tools }
  ];

  return (
    <section id="skills" className="bg-primary relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #2563EB 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="section-container relative z-10">
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-secondary rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 card-hover group"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-accent to-purple-600 rounded-full"></div>
                <h3 className="text-lg font-semibold text-accent group-hover:gradient-text transition-all">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center justify-between group/item">
                    <span className="text-textSecondary text-sm group-hover/item:text-textPrimary transition-colors">{skill.name}</span>
                    {skill.level && (
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-md group-hover/item:bg-accent group-hover/item:text-white transition-all">
                        {skill.level}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Practices & Methodologies */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-border shadow-sm">
          <h3 className="text-lg font-semibold mb-6 text-center">Practices & Methodologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.practices.map((practice, index) => (
              <span 
                key={index}
                className="bg-white text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/20 hover:border-accent hover:shadow-md transition-all duration-200 cursor-default"
              >
                {practice}
              </span>
            ))}
          </div>
        </div>

        {/* Domain Expertise */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold mb-6">Domain Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Aviation & Airlines Industry', 'AIOps & Monitoring', 'Healthcare Analytics'].map((domain, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-accent text-accent px-6 py-3 rounded-xl font-medium text-sm hover:bg-accent hover:text-white transition-all duration-300 shadow-sm hover:shadow-md card-hover"
              >
                {domain}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
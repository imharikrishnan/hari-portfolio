import { projects } from '../data/projectsData';
import { HiExternalLink, HiCode } from 'react-icons/hi';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-secondary">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-primary rounded-xl overflow-hidden border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 flex flex-col group card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient top bar */}
              <div className="h-1 bg-gradient-to-r from-accent to-purple-600"></div>
              
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-textPrimary group-hover:gradient-text transition-all">{project.title}</h3>
                  <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full whitespace-nowrap ml-2 border border-accent/20">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-textSecondary mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-accent mb-2 flex items-center gap-2">
                    <div className="w-1 h-4 bg-gradient-to-b from-accent to-purple-600 rounded-full"></div>
                    Key Features
                  </h4>
                  <ul className="space-y-1.5">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-textSecondary flex items-start group/feature">
                        <span className="text-accent mr-2 group-hover/feature:scale-125 transition-transform">•</span>
                        <span className="group-hover/feature:text-textPrimary transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-accent/5 text-textSecondary px-3 py-1.5 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/10 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="px-6 pb-6 flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accentDark transition-colors group/link"
                  >
                    <HiExternalLink className="text-xl group-hover/link:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accentDark transition-colors group/link"
                  >
                    <HiCode className="text-xl group-hover/link:scale-110 transition-transform" />
                    <span className="text-sm font-medium">View Code</span>
                  </a>
                )}
                {!project.liveUrl && !project.githubUrl && (
                  <span className="text-xs text-textSecondary italic flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                    Production project - NDA protected
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
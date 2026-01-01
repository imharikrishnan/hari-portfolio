import { Experience } from '../types';

const About: React.FC = () => {
  const experiences: Experience[] = [
    {
      company: "IBS Software",
      role: "Lead Full Stack Engineer",
      period: "Sep 2025 – Present",
      highlights: [
        "Developing booking portal for Etihad Airways serving thousands of daily users",
        "Building features with Angular 17+, Signals, and advanced RxJS patterns",
        "Implementing aviation domain logic: booking flows, seat selection, fare calculation"
      ]
    },
    {
      company: "UST",
      role: "Senior Software Engineer",
      period: "Jun 2022 – Sep 2025",
      highlights: [
        "Led front-end development of AIOps Monitoring Platform",
        "Architected scalable solutions with Angular, RxJS, NgRx, and PrimeNG",
        "Integrated D3.js visualizations and Grafana monitoring dashboards",
        "Mentored junior developers and drove code quality initiatives"
      ]
    },
    {
      company: "Tata Consultancy Services",
      role: "Systems Engineer",
      period: "Jan 2019 – Jun 2022",
      highlights: [
        "Built multiple Angular applications with focus on accessibility and responsive design",
        "Delivered Medical Analytics Dashboard with D3.js visualizations",
        "Enhanced enterprise app accessibility to WCAG standards"
      ]
    }
  ];

  return (
    <section id="about" className="bg-secondary">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="max-w-4xl mx-auto space-y-6 text-textSecondary mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100 shadow-sm">
            <p className="text-lg leading-relaxed">
              I'm a <span className="text-textPrimary font-semibold">Lead Full Stack Engineer</span> with 
              6+ years of experience building production-grade applications. I specialize in 
              <span className="text-accent font-semibold"> Angular</span>, <span className="text-accent font-semibold">React</span>, and 
              modern <span className="text-accent font-semibold">TypeScript</span> development.
            </p>
          </div>
          
          <p className="text-lg leading-relaxed">
            Currently at <span className="text-textPrimary font-semibold">IBS Software</span>, I'm developing 
            the booking portal for Etihad Airways, leveraging cutting-edge Angular features like Signals 
            and advanced reactive programming patterns to deliver seamless user experiences.
          </p>

          <p className="text-lg leading-relaxed">
            My expertise spans enterprise application architecture, state management (NgRx, RxJS), 
            data visualization (D3.js, vis.js), and building accessible, performant interfaces. 
            I've worked extensively in aviation and AIOps domains, delivering features that serve 
            thousands of users daily.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mt-20 space-y-6">
          <h3 className="text-2xl font-bold text-center mb-12">Professional Experience</h3>
          
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-primary rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 card-hover group relative overflow-hidden"
            >
              {/* Gradient accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-purple-600 group-hover:w-1.5 transition-all"></div>
              
              <div className="pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-textPrimary group-hover:gradient-text transition-all">{exp.role}</h4>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <span className="text-textSecondary text-sm mt-2 sm:mt-0 bg-accent/5 px-3 py-1 rounded-full">{exp.period}</span>
                </div>
                
                <ul className="space-y-2 text-textSecondary">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start group/item">
                      <span className="text-accent mr-2 mt-1 group-hover/item:scale-125 transition-transform">▹</span>
                      <span className="leading-relaxed group-hover/item:text-textPrimary transition-colors">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
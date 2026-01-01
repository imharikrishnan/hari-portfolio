import { Link } from 'react-scroll';
import { HiArrowDown, HiDownload } from 'react-icons/hi';

const Hero: React.FC = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Harikrishnan_N_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-secondary via-primary to-blue-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="section-container text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4 opacity-0 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20">
                Available for opportunities
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="gradient-text">Harikrishnan</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-textSecondary font-light">
              Lead Full Stack Engineer
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-textSecondary max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up stagger-2">
            Specializing in Angular, React, and modern web development.
            <br />
            Building scalable enterprise applications for 7+ years.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 opacity-0 animate-fade-in-up stagger-3">
            <Link
              to="projects"
              smooth={true}
              duration={800}
              offset={-80}
              className="btn-primary cursor-pointer"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              offset={-80}
              className="btn-secondary cursor-pointer"
            >
              Get In Touch
            </Link>
            <button
              onClick={handleDownloadResume}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center gap-2"
            >
              <HiDownload className="text-lg" />
              Resume
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <Link
          to="about"
          smooth={true}
          duration={800}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce opacity-0 animate-fade-in-up stagger-4"
        >
          <HiArrowDown className="text-3xl text-accent" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
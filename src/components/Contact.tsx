import { useState } from 'react';
import { HiMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { ContactInfo } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo: ContactInfo[] = [
    {
      icon: <HiMail className="text-2xl" />,
      label: "Email",
      value: "harikrishnan1806@gmail.com",
      link: "mailto:harikrishnan1806@gmail.com"
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      label: "WhatsApp",
      value: "+91 9400149946",
      link: "https://wa.me/919400149946?text=Hi%20Harikrishnan,%20I'd%20like%20to%20connect%20with%20you"
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: "LinkedIn",
      value: "linkedin.com/in/harikrishnan1806",
      link: "https://linkedin.com/in/harikrishnan1806"
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: "GitHub",
      value: "github.com/imharikrishnan",
      link: "https://github.com/imharikrishnan"
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:harikrishnan1806@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi Harikrishnan,\n\nI'm ${formData.name || '[Your Name]'}.\n\n${formData.message || 'I would like to discuss an opportunity with you.'}`
    );
    window.open(`https://wa.me/919400149946?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="bg-primary">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-textSecondary leading-relaxed">
            I'm currently open to new opportunities and interesting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-secondary rounded-xl p-8 border border-border">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-textSecondary mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-primary text-textPrimary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-textSecondary mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-primary text-textPrimary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-textSecondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-primary text-textPrimary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 btn-primary flex items-center justify-center gap-2"
                >
                  <HiMail className="text-lg" />
                  Send via Email
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                >
                  <FaWhatsapp className="text-lg" />
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-textSecondary mb-6">
                Prefer to reach out directly? Choose your preferred method below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-secondary rounded-xl p-5 border border-border hover:border-accent/50 hover:shadow-sm transition-all duration-200 flex items-center gap-4 group block"
                >
                  <div className="text-accent group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-textSecondary mb-1">{item.label}</p>
                    <p className="text-textPrimary font-medium break-all text-sm">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-accent/5 rounded-xl p-6 border border-accent/20">
              <h4 className="font-semibold text-textPrimary mb-3">Quick Connect</h4>
              <div className="space-y-3">
                <a
                  href="mailto:harikrishnan1806@gmail.com"
                  className="block text-accent hover:text-accentDark transition-colors text-sm"
                >
                  → Email me directly
                </a>
                <a
                  href="https://wa.me/919400149946?text=Hi%20Harikrishnan,%20I'd%20like%20to%20discuss%20an%20opportunity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-accent hover:text-accentDark transition-colors text-sm"
                >
                  → Chat on WhatsApp
                </a>
                <a
                  href="https://linkedin.com/in/harikrishnan1806"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-accent hover:text-accentDark transition-colors text-sm"
                >
                  → Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
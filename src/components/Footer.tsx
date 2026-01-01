const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-textSecondary text-sm">
            © {currentYear} Harikrishnan N. Built with React & Tailwind CSS.
          </p>
          <p className="text-textSecondary text-xs mt-2">
            Designed & Developed with attention to detail
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
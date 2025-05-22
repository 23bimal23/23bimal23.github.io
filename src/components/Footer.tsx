
import { Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">
            © {currentYear} Bimal Paudel. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-sm text-muted-foreground">View Source</span>
            <a 
              href="https://github.com/23bimal23/23bimal23.github.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="w-full py-12 md:py-24">
        <div className="space-y-4 md:space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-gradient">Bimal Paudel</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
            Frontend Developer
          </h2>
          <p className="max-w-[600px] text-lg md:text-xl text-muted-foreground">
            Results-driven Frontend Developer skilled in modern technologies and creating responsive, 
            user-centric interfaces. Experienced in collaborating with cross-functional teams to deliver high-quality web solutions.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <Button asChild className="animate-scale-in">
              <a href="#contact">Get in touch</a>
            </Button>
            <Button variant="outline" asChild className="animate-scale-in" style={{ animationDelay: "150ms" }}>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex gap-4 pt-6">
            <a 
              href="https://github.com/23bimal23" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:bimal23paudel777@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/bimal-paudel-049b92248/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a href="#about" className="animate-bounce">
            <ArrowDown size={24} className="text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

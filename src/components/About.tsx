
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              I am a results-driven Frontend Developer skilled in modern technologies and creating 
              responsive, user-centric interfaces. With experience collaborating with cross-functional
              teams, I deliver high-quality web solutions that enhance user experience and business outcomes.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Currently working as a Software Junior Developer at Trikokya Tech Pvt Ltd, I focus on
              implementing features like user authentication, real-time updates, and seamless data management.
              I'm passionate about creating clean, efficient code and continuously expanding my knowledge
              in frontend technologies.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Based in Kathmandu, Nepal, I'm seeking opportunities for mid-level roles in innovative projects
              where I can further develop my skills and make meaningful contributions.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;

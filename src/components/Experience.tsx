
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Software Junior Developer",
      company: "Trikokya Tech Pvt Ltd",
      period: "June 2024 - Present",
      responsibilities: [
        "Contributed to the development of efficient and scalable web applications by implementing features like user authentication, real-time updates, and seamless data management.",
        "Collaborated with backend teams to deliver cost-effective solutions, enhancing project workflows and overall efficiency.",
        "Gained hands-on experience with React.js, Redux, Tailwind CSS, Material-UI, RESTful APIs, and Next.js, improving technical proficiency in front-end development.",
        "Strengthened problem-solving, team collaboration, and project management skills by successfully delivering high-quality applications within deadlines.",
      ],
      technologies: ["React.js", "Redux", "Tailwind CSS", "Material-UI", "RESTful APIs", "Next.js"]
    },
    {
      title: "Trainee/Intern",
      company: "Trikokya Tech Pvt Ltd",
      period: "March 2024 - June 2024",
      responsibilities: [
        "Acquired practical experience in React.js and modern UI libraries by working on real-world projects, enhancing both technical expertise and collaborative skills.",
      ],
      technologies: ["React.js", "UI Libraries", "Collaborative Development"]
    },
    {
      title: "Frontend Developer",
      company: "Kalki Logic Tech Pvt. Ltd.",
      period: "Nov 2023-Feb 2024",
      responsibilities: [
        "Assisted in building and optimizing single-page applications (SPAs) using React.js, supported the implementation of global state management with Redux, and contributed to UI design tasks with Material-UI while learning from senior developers.",
      ],
      technologies: ["React.js", "Redux", "Material-UI", "SPAs"]
    },
  ];

  return (
    <section id="experience" className="py-16">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Work Experience</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

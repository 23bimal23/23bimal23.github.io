
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "HTML", "JavaScript", "Redux"]
    },
    {
      category: "Backend",
      skills: ["Core PHP", "Node.js"]
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "Redux", "Redux Toolkit", "React-Query"]
    },
    {
      category: "Languages",
      skills: ["Nepali (Native)", "English (Fluent)"]
    }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="px-3 py-1">
                      {skill}
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

export default Skills;

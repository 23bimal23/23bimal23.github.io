
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  return (
    <section id="education" className="py-16">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Education</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-wrap justify-between items-start gap-2">
              <div>
                <CardTitle>Bachelor in Computer Application</CardTitle>
                <p className="text-muted-foreground">Asian School of Management and Technology</p>
              </div>
              <Badge variant="outline" className="text-sm">
                2019 - January 2025
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Gained foundational knowledge in programming, web development, and software engineering.</li>
              <li>Built a full-stack Food Order and Review System using Core PHP, HTML, CSS, and MySQL.</li>
              <li>Developed a Payroll Management System for course credit.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;

import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Sass"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "AWS", "Vercel", "Jest", "Cypress"]
    },
    {
      title: "Design",
      skills: ["Figma", "Adobe XD", "Photoshop", "UI/UX Design", "Responsive Design"]
    }
  ];

  const highlights = [
    {
      title: "5+ Years",
      description: "Professional Experience"
    },
    {
      title: "50+ Projects",
      description: "Successfully Delivered"
    },
    {
      title: "100%",
      description: "Client Satisfaction"
    },
    {
      title: "24/7",
      description: "Continuous Learning"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Skills & Expertise</Badge>
            <h2 className="text-3xl md:text-4xl mb-6">
              Technologies I work with
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I stay up-to-date with the latest technologies and best practices 
              to deliver cutting-edge solutions.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {highlights.map((highlight, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl md:text-3xl font-medium text-primary mb-2">
                    {highlight.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {highlight.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="mr-2 mb-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
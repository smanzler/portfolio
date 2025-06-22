import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product management, and payment processing.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://placehold.co/600x400",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "Prisma"],
      image: "https://placehold.co/600x400",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with React and TailwindCSS, featuring smooth animations and responsive design.",
      tags: ["React", "TailwindCSS", "Framer Motion"],
      image: "https://placehold.co/600x400",
    },
  ];

  return (
    <section id="projects" className="py-12 md:py-24 max-w-7xl mx-auto">
      <div className="flex flex-col items-center gap-8 text-center mb-16 animate-fade-up">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Featured Projects
        </h2>
        <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Here are some of my recent projects that showcase my skills and
          experience.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={project.title}
            className="overflow-hidden animate-fade-up"
            style={{ animationDelay: `${(index + 1) * 200}ms` }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Project
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

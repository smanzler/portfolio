import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "Rep Workout Tracker",
      description:
        "Workout tracker built with React Native and Supabase. It allows users to track their workouts and progress and share their progress with their friends. Supports offline mode and syncs once connected to the internet.",
      tags: ["React Native", "Supabase", "Expo"],
      image: "https://placehold.co/600x400",
    },
    {
      title: "INVT",
      description:
        "Web app that allows users to find and rsvp to events made by others. Also allows users to invite friends through a QR code.",
      tags: ["React", "TypeScript", "TailwindCSS", "Shadcn UI", "Firebase"],
      image: "https://placehold.co/600x400",
    },
    {
      title: "Portfolio",
      description:
        "Modern portfolio website built with React and TailwindCSS and responsive design. It showcases my projects and skills.",
      tags: ["React", "TailwindCSS", "Shadcn UI", "Github Pages"],
      image: "https://placehold.co/600x400",
    },
  ];

  return (
    <section id="projects" className="py-12 md:py-24 max-w-7xl mx-auto">
      <div className="flex flex-col items-center gap-8 text-center mb-16">
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
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -5 }}
          >
            <Card className="overflow-hidden">
              <div className="flex flex-col h-full gap-6">
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
              </div>

              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Project
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

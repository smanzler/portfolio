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
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Import images
import repImage from "@/assets/rep.png";
import invtImage from "@/assets/invt.png";
import portfolioImage from "@/assets/portfolio.png";

export function Projects() {
  const projects = [
    {
      title: "Rep Workout Tracker",
      description:
        "Workout tracker built with React Native and Supabase. It allows users to track their workouts and progress and share their progress with their friends. Supports offline mode and syncs once connected to the internet.",
      tags: ["React Native", "Supabase", "Expo"],
      image: repImage,
      link: "https://github.com/smanzler/workout-tracker",
    },
    {
      title: "INVT",
      description:
        "Web app that allows users to find and rsvp to events made by others. Also allows users to invite friends through a QR code.",
      tags: ["React", "TypeScript", "TailwindCSS", "Shadcn UI", "Firebase"],
      image: invtImage,
      link: "https://invt.rsvp",
    },
    {
      title: "Portfolio",
      description:
        "Modern portfolio website built with React and TailwindCSS and responsive design. It showcases my projects and skills.",
      tags: ["React", "TailwindCSS", "Shadcn UI", "Github Pages"],
      image: portfolioImage,
      link: "https://github.com/smanzler/portfolio",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-12">
      <div className="flex flex-col items-center gap-2 text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Featured Projects
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Here are some of my recent projects that showcase my skills and
          experience.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="pt-0 overflow-hidden h-full">
              <div className="flex flex-col flex-1 gap-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative overflow-hidden cursor-pointer">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover object-top hover:scale-115 transition-all duration-300"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-[90vw] max-h-[90vh] min-w-[70vw] min-h-[70vh] p-0">
                    <motion.img
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
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
                <Button
                  variant="outline"
                  className="w-full cursor-pointer"
                  onClick={() => window.open(project.link, "_blank")}
                >
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

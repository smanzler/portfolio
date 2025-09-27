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
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Import images
import repImage from "@/assets/rep.png";
import invtImage from "@/assets/invt.png";
import portfolioImage from "@/assets/portfolio.png";
import { EyeIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link: string;
  featured?: boolean;
  github?: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "INVT",
      description:
        "Web app that allows users to find and rsvp to events made by others. Also allows users to invite friends through a QR code.",
      tags: ["React", "TypeScript", "TailwindCSS", "Shadcn UI", "Firebase"],
      image: invtImage,
      link: "https://invt.rsvp",
      featured: true,
      github: "https://github.com/smanzler/invt",
    },
    {
      title: "Rep Workout Tracker",
      description:
        "Workout tracker built with React Native and Supabase. It allows users to track their workouts and progress and share their progress with their friends. Supports offline mode and syncs once connected to the internet.",
      tags: ["React Native", "Supabase", "Expo"],
      image: repImage,
      link: "https://github.com/smanzler/workout-tracker",
      featured: true,
      github: "https://github.com/smanzler/workout-tracker",
    },
    {
      title: "Portfolio",
      description:
        "Modern portfolio website built with React and TailwindCSS and responsive design. It showcases my projects and skills.",
      tags: ["React", "TailwindCSS", "Shadcn UI", "Github Pages"],
      image: portfolioImage,
      link: "https://github.com/smanzler/portfolio",
      featured: true,
      github: "https://github.com/smanzler/portfolio",
    },
    // Additional smaller projects
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather dashboard with location search and 5-day forecast.",
      tags: ["React", "OpenWeather API", "ChartJS"],
      link: "https://weather-dashboard.demo",
      github: "https://github.com/smanzler/weather-dashboard",
    },
    {
      title: "Task Manager CLI",
      description:
        "Command-line task manager with priority scheduling and due dates.",
      tags: ["Python", "Click", "SQLite"],
      link: "https://github.com/smanzler/task-cli",
      github: "https://github.com/smanzler/task-cli",
    },
    {
      title: "URL Shortener",
      description:
        "Simple URL shortener service with custom aliases and click tracking.",
      tags: ["Node.js", "Express", "MongoDB"],
      link: "https://short.url",
      github: "https://github.com/smanzler/url-shortener",
    },
    {
      title: "Markdown Note Taking",
      description: "Minimalist markdown note-taking app with tag organization.",
      tags: ["React", "LocalStorage", "Marked"],
      link: "https://notes.demo",
      github: "https://github.com/smanzler/markdown-notes",
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const smallerProjects = projects.filter((p) => !p.featured);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="min-h-screen py-12">
      {/* Featured Projects */}
      <motion.div
        className="mb-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            Significant projects that showcase my expertise
          </p>
        </div>

        <motion.div
          className="grid gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.title} variants={item}>
              <Card className="group">
                <div className="grid md:grid-cols-2 gap-6 px-6">
                  {project.image && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <motion.div
                          className="relative rounded-lg overflow-hidden bg-muted cursor-pointer"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className="object-cover w-full h-full"
                          />
                          <motion.div
                            className="absolute inset-0 bg-black/20 opacity-0"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        </motion.div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <motion.img
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2 }}
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto rounded-lg"
                        />
                      </DialogContent>
                    </Dialog>
                  )}

                  <div className="flex flex-col gap-4">
                    <div>
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CardTitle className="text-2xl mb-2">
                          {project.title}
                        </CardTitle>
                      </motion.div>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <motion.div
                          key={tag}
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Badge variant="outline" className="rounded-full">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex md:justify-end gap-3 mt-auto">
                      <motion.div whileHover={{ scale: 1.05 }}>
                        <Button
                          onClick={() => window.open(project.link, "_blank")}
                        >
                          <EyeIcon className="w-4 h-4" />
                        </Button>
                      </motion.div>
                      {project.github && (
                        <motion.div whileHover={{ scale: 1.05 }}>
                          <Button
                            variant="outline"
                            onClick={() =>
                              window.open(project.github, "_blank")
                            }
                          >
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="fill-current"
                            >
                              <title>GitHub</title>
                              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Smaller Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="text-3xl font-bold">Other Projects</h2>
          <p className="text-muted-foreground text-lg">
            Additional projects I've worked on
          </p>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {smallerProjects.map((project) => (
            <motion.div key={project.title} variants={item}>
              <Card className="flex flex-col group">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <motion.div
                          key={tag}
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Badge variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-2 justify-end">
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Button
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        <EyeIcon className="w-4 h-4" />
                      </Button>
                    </motion.div>
                    {project.github && (
                      <motion.div whileHover={{ scale: 1.05 }}>
                        <Button
                          variant="outline"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current"
                          >
                            <title>GitHub</title>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                        </Button>
                      </motion.div>
                    )}
                  </CardFooter>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

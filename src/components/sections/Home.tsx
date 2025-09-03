import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";

import repIcon from "@/assets/rep-icon.png";
import { Card } from "../ui/card";

//import invtIcon from "@/assets/invt-icon.png";

export interface Project {
  name: string;
  icon?: string;
  description: string;
  tech: string[];
  status: string;
}

const projects: Project[] = [
  {
    name: "Rep",
    icon: repIcon,
    description: "Modern workout tracker app on the Apple Store",
    tech: ["React Native", "TypeScript", "Supabase"],
    status: "On App Store",
  },
  {
    name: "Invt",
    description: "Social event sharing web app used by 100+ users",
    tech: ["React", "TypeScript", "TailwindCSS", "Firebase"],
    status: "Production",
  },
  {
    name: "Portfolio",
    description: "My personal portfolio built with React and TypeScript",
    tech: ["React", "TypeScript", "TailwindCSS"],
    status: "In Development",
  },
];

export function Home() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const handleProjectClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
  };

  const skills = [
    { name: "React", type: "Frontend" },
    { name: "TypeScript", type: "Language" },
    { name: "Node.js", type: "Backend" },
    { name: "TailwindCSS", type: "Styling" },
    { name: "Next.js", type: "Framework" },
    { name: "PostgreSQL", type: "Database" },
  ];

  return (
    <section
      id="home"
      className="mx-auto min-h-screen grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-24"
    >
      <div className="flex flex-col max-w-[600px]">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-1"
        >
          Software
          <br />
          Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[700px] text-muted-foreground md:text-xl lg:text-2xl mb-8"
        >
          Building modern, responsive, and user-friendly web applications
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-2"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            >
              <Badge variant="secondary">{skill.name}</Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full sm:w-fit mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold"
        >
          Featured Projects
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-1xl text-muted-foreground pb-3"
        >
          Here are some of my favourite projects
        </motion.h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project) => (
            <motion.div
              key={project.name}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="relative"
            >
              <motion.div
                layoutId={`project-card-${project.name}`}
                onClick={() => handleProjectClick?.(project)}
              >
                <Card className="p-4">
                  <motion.div
                    layoutId={`project-container-${project.name}`}
                    className="flex flex-row gap-4"
                  >
                    <motion.div
                      layoutId={`project-image-container-${project.name}`}
                      className="h-16 w-16 overflow-hidden rounded-xl"
                    >
                      {project.icon ? (
                        <motion.img
                          layoutId={`project-image-${project.name}`}
                          src={project.icon}
                          alt={project.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <motion.div
                          layoutId={`project-placeholder-${project.name}`}
                          className="h-full w-full flex items-center justify-center bg-muted"
                        >
                          <span className="text-2xl">{project.name[0]}</span>
                        </motion.div>
                      )}
                    </motion.div>
                    <div>
                      <motion.h3
                        layoutId={`project-title-${project.name}`}
                        className="text-lg font-medium truncate"
                      >
                        {project.name}
                      </motion.h3>
                      <motion.div
                        layoutId={`project-status-${project.name}`}
                        className="mt-1"
                      >
                        <Badge variant="outline" className="text-xs">
                          {project.status}
                        </Badge>
                      </motion.div>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            />
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                layoutId={`project-card-${selectedProject.name}`}
                onClick={(e) => e.stopPropagation()}
              >
                <Card className="p-4">
                  <motion.div
                    layoutId={`project-container-${selectedProject.name}`}
                    className="flex flex-col gap-4"
                  >
                    <motion.div
                      layoutId={`project-image-container-${selectedProject.name}`}
                      className="h-24 w-24 overflow-hidden rounded-xl"
                    >
                      {selectedProject.icon ? (
                        <motion.img
                          layoutId={`project-image-${selectedProject.name}`}
                          src={selectedProject.icon}
                          alt={selectedProject.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <motion.div
                          layoutId={`project-placeholder-${selectedProject.name}`}
                          className="h-full w-full flex items-center justify-center bg-muted"
                        >
                          <span className="text-2xl">
                            {selectedProject.name[0]}
                          </span>
                        </motion.div>
                      )}
                    </motion.div>
                    <div className="flex flex-row justify-between items-center">
                      <motion.h2
                        layoutId={`project-title-${selectedProject.name}`}
                        className="w-[120px] text-xl font-semibold truncate"
                      >
                        {selectedProject.name}
                      </motion.h2>
                      <motion.div
                        layoutId={`project-status-${selectedProject.name}`}
                      >
                        <Badge variant="outline">
                          {selectedProject.status}
                        </Badge>
                      </motion.div>
                    </div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-muted-foreground mb-6"
                    >
                      {selectedProject.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex flex-wrap gap-2"
                    >
                      {selectedProject.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </motion.div>
                  </motion.div>
                </Card>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { motion } from "framer-motion";
import { Code, MoveRight } from "lucide-react";
import { useNavigate } from "react-router";
import { useProjects } from "@/hooks/useProjects";

export function Projects() {
  const { projects } = useProjects();

  const featuredProjects = projects.filter((p) => p.featured);
  const smallerProjects = projects.filter((p) => !p.featured);

  const navigate = useNavigate();

  return (
    <section id="projects" className="min-h-screen py-12">
      {/* Featured Projects */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-2 px-6 mb-12">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            Significant projects that showcase my expertise
          </p>
        </div>
      </motion.div>

      <div className="grid gap-8 mb-24">
        {featuredProjects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="cursor-pointer hover:scale-101 hover:bg-accent dark:hover:bg-input/20 transition-all duration-200 py-6 rounded-xl"
            onClick={() => navigate(`/projects/${project.title}`)}
          >
            <div className="grid md:grid-cols-2 gap-6 px-6">
              {project.image && (
                <div className="relative rounded-lg overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}

              <div className="flex flex-col gap-4">
                <div>
                  <h1 className="text-2xl mb-2">{project.title}</h1>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex md:justify-end mt-auto">
                  {project.github ? (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, "_blank");
                      }}
                    >
                      <Code />
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/projects/${project.title}`);
                      }}
                    >
                      <MoveRight />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Smaller Projects */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-2 px-6 mb-12">
          <h2 className="text-3xl font-bold">Other Projects</h2>
          <p className="text-muted-foreground text-lg">
            Additional projects I've worked on
          </p>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {smallerProjects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col cursor-pointer hover:scale-102 hover:bg-accent dark:hover:bg-input/20 transition-all duration-200 p-6 gap-6 rounded-xl"
            onClick={() => navigate(`/projects/${project.title}`)}
          >
            <h1 className="text-xl">{project.title}</h1>
            <p className="line-clamp-3 text-sm text-muted-foreground">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex gap-2 justify-end">
              {project.github ? (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.github, "_blank");
                  }}
                >
                  <Code />
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/projects/${project.title}`);
                  }}
                >
                  <MoveRight />
                </Button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { motion } from "framer-motion";
import { ArrowRight, Code, MoveRight } from "lucide-react";
import { useNavigate } from "react-router";
import { useProjects } from "@/hooks/useProjects";
import { H1, H4, Lead, P } from "../ui/typography";

export function Projects() {
  const { projects } = useProjects();

  const featuredProjects = projects.filter((p) => p.featured);
  const smallerProjects = projects.filter((p) => !p.featured);

  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-6 flex flex-col gap-6"
    >
      {/* Featured Projects */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <H1>Featured Projects</H1>
        <Lead>Significant projects that showcase my expertise</Lead>
      </motion.div>

      <div className="grid gap-8 mb-24">
        {featuredProjects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 p-6 cursor-pointer hover:bg-accent dark:hover:bg-input/40 rounded-xl"
            onClick={() => navigate(`/projects/${project.title}`)}
          >
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
                <H4>{project.title}</H4>
                <P className="!text-muted-foreground">{project.description}</P>
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
          </motion.div>
        ))}
      </div>

      {/* Smaller Projects */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-row justify-between px-6 mb-12"
      >
        <div>
          <H1>Other Projects</H1>
          <Lead>Additional projects I've worked on</Lead>
        </div>
        <Button variant="link" onClick={() => navigate("/apps")}>
          View All Apps
          <ArrowRight />
        </Button>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {smallerProjects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col cursor-pointer hover:bg-accent dark:hover:bg-input/40 p-6 gap-6 rounded-xl"
            onClick={() => navigate(`/projects/${project.title}`)}
          >
            <div>
              <H4>{project.title}</H4>
              <P className="line-clamp-3 !text-muted-foreground">
                {project.description}
              </P>
            </div>
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

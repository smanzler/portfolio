import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { motion } from "framer-motion";
import { ArrowRight, Code, MoveRight } from "lucide-react";
import { useNavigate } from "react-router";
import { useProjects } from "@/hooks/useProjects";
import { H1, H4, Lead, P } from "../ui/typography";

export function Projects() {
  const { projects } = useProjects();

  const navigate = useNavigate();

  return (
    <section id="projects" className="min-h-screen py-20 flex flex-col gap-6">
      {/* Featured Projects */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-row justify-between"
      >
        <div>
          <H1>Projects</H1>
          <Lead>Some of the projects I've worked on.</Lead>
        </div>

        <div>
          <Button variant="link" onClick={() => navigate("/projects")}>
            View All Projects
            <ArrowRight />
          </Button>
          <Button variant="link" onClick={() => navigate("/apps")}>
            View All Apps
            <ArrowRight />
          </Button>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            onClick={() => navigate(`/projects/${project.title}`)}
            className="relative group cursor-pointer rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-muted">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-107"
                  style={{
                    imageRendering: "auto",
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                />
              )}
            </div>

            <div className="relative z-1 h-full flex flex-col justify-between gap-3 p-6 text-white backdrop-blur-sm supports-[backdrop-filter]:bg-black/50  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col gap-2">
                <H4 className="!text-white">{project.title}</H4>
                <P className="line-clamp-3 !text-white/90">
                  {project.description}
                </P>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="text-xs bg-white/20 text-white border-white/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 justify-end">
                  {project.github ? (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20 hover:text-white"
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
                      className="text-white hover:bg-white/20 hover:text-white"
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
    </section>
  );
}

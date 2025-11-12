import type { Project } from "@/hooks/useProjects";
import { useNavigate } from "react-router";
import { H4, P } from "./typography";
import { Badge } from "./badge";
import { Button } from "./button";
import { Code } from "lucide-react";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import ThresholdMotionDiv from "../motion/threshold-motion-div";

const FeaturedProjectCard = ({
  project,
  side = "left",
}: {
  project: Project;
  side?: "left" | "right";
}) => {
  const navigate = useNavigate();

  return (
    <ThresholdMotionDiv
      key={project.title}
      onClick={() => navigate(`/projects/${project.title}`)}
      className="relative cursor-pointer rounded-xl overflow-hidden"
    >
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      )}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black to-transparent",
          side === "left" ? "bg-gradient-to-tr" : "bg-gradient-to-tl"
        )}
      ></div>

      <div
        className={cn(
          "absolute bottom-6 z-1 w-[min(calc(100%-2rem),400px)] flex flex-col justify-between gap-3 p-6 backdrop-blur-sm supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-input/90 rounded-xl",
          side === "left" ? "left-6" : "right-6"
        )}
      >
        <div className="flex flex-col gap-2">
          <H4>{project.title}</H4>
          <P className="line-clamp-3">{project.description}</P>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag} className="text-xs">
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
        </div>
      </div>
    </ThresholdMotionDiv>
  );
};

export default FeaturedProjectCard;

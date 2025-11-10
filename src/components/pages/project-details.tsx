import { useProjects } from "@/hooks/useProjects";
import { useParams, useNavigate } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { useEffect } from "react";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects } = useProjects();
  const project = projects.find((project) => project.title === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen">
        <Button onClick={() => navigate("/")} variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>

        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Project Not Found
          </h1>
          <p className="text-base text-muted-foreground mb-8 text-center max-w-md">
            Sorry, we couldn't find the project you're looking for. It might
            have been moved or doesn't exist.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <a href="/">
                <ArrowLeft className="h-4 w-4" />
                View All Projects
              </a>
            </Button>
          </div>
        </div>

        <section className="border-t pt-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 tracking-tight">
              Looking for Something Else?
            </h2>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              Check out my featured projects or get in touch if you have any
              questions.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild variant="outline">
                <a href="/#contact">Contact Me</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6">
      {/* Back Button */}
      <Button
        onClick={() => navigate("/")}
        variant="link"
        className="mb-8 justify-start"
      >
        <ArrowLeft />
        Back to Projects
      </Button>

      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          {project.title}
        </h1>
        {project.role && (
          <p className="text-lg text-muted-foreground mb-2">{project.role}</p>
        )}
        {project.timeline && (
          <p className="text-base text-muted-foreground mb-6">
            {project.timeline}
          </p>
        )}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4 flex-wrap">
          {project.link && (
            <Button asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                View Project
              </a>
            </Button>
          )}
          {project.github && (
            <Button asChild variant="outline">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
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
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>

      {project.image && (
        <div className="mb-20 rounded-lg overflow-hidden border">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto"
          />
        </div>
      )}

      <section className="mb-12 border-t pt-12">
        <h2 className="text-2xl font-bold mb-4 tracking-tight">Overview</h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          {project.longDescription || project.description}
        </p>
      </section>

      {project.keyFeatures && project.keyFeatures.length > 0 && (
        <section className="mb-12 border-t pt-12">
          <h2 className="text-2xl font-bold mb-4 tracking-tight">
            Key Features
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {project.keyFeatures.map((feature, index) => (
              <li
                key={index}
                className="flex items-start text-muted-foreground pl-5 relative"
              >
                <span className="absolute left-0 top-2.5 h-1 w-1 rounded-full bg-foreground" />
                <span className="text-base leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.technologies && project.technologies.length > 0 && (
        <section className="mb-12 border-t pt-12">
          <h2 className="text-2xl font-bold mb-4 tracking-tight">
            Technologies Used
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
            {project.technologies.map((tech, index) => (
              <div key={index}>
                <h3 className="font-semibold text-base mb-3 tracking-tight">
                  {tech.category}
                </h3>
                <ul>
                  {tech.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-muted-foreground text-sm pl-4 relative"
                    >
                      <span className="absolute left-0 top-2.5 h-1 w-1 rounded-full bg-muted-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {project.challenges && project.challenges.length > 0 && (
        <section className="mb-12 border-t pt-12">
          <h2 className="text-2xl font-bold mb-4 tracking-tight">
            Challenges & Learnings
          </h2>
          <ul>
            {project.challenges.map((challenge, index) => (
              <li
                key={index}
                className="flex items-start text-muted-foreground pl-5 relative"
              >
                <span className="absolute left-0 top-2.5 h-1 w-1 rounded-full bg-foreground" />
                <span className="text-base leading-relaxed">{challenge}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.images && project.images.length > 1 && (
        <section className="mb-12 border-t pt-12">
          <h2 className="text-2xl font-bold mb-4 tracking-tight">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.slice(1).map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden border">
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 2}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="border-t pt-12 pb-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 tracking-tight">
            Interested in this project?
          </h2>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed">
            Check out the live demo or view the source code on GitHub.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            {project.link && (
              <Button asChild>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </a>
              </Button>
            )}
            {project.github && (
              <Button asChild variant="outline">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;

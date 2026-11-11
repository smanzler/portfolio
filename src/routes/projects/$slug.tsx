import { createFileRoute, notFound } from "@tanstack/react-router";
import { NotFoundScreen } from "@/components/not-found-screen";
import ProjectScreen from "@/features/projects/screens/project-screen";
import { getProjects } from "@/lib/projects";
import { buildPageHead } from "@/lib/seo";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const projects = getProjects();
    const index = projects.findIndex(({ slug }) => slug === params.slug);
    if (index === -1) throw notFound();
    return {
      project: projects[index],
      next: projects[(index + 1) % projects.length],
    };
  },
  head: ({ loaderData }) =>
    loaderData
      ? buildPageHead({
          title: loaderData.project.title,
          description: loaderData.project.description,
        })
      : {},
  component: Page,
  notFoundComponent: () => (
    <NotFoundScreen
      title="No such project"
      folder="work/"
      back={{ href: "/projects", label: "Back to work" }}
    />
  ),
});

function Page() {
  const { project, next } = Route.useLoaderData();
  return <ProjectScreen project={project} next={next} />;
}

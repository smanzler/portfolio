import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjects } from "@/lib/projects";
import ProjectScreen from "@/features/projects/screens/project-screen";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProjects().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug((await params).slug);
  if (!project) return {};
  return {
    title: `${project.title} | Simon Manzler`,
    description: project.description,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const projects = getProjects();
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) notFound();

  return (
    <ProjectScreen
      project={projects[index]}
      next={projects[(index + 1) % projects.length]}
    />
  );
}

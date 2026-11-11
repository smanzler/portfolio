import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjects } from "@/lib/projects";
import AppScreen from "@/features/apps/screens/app-screen";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProjects()
    .filter((project) => project.isApp)
    .map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const app = getProjectBySlug((await params).slug);
  if (!app?.isApp) return {};
  return { title: `${app.title} | Simon Manzler`, description: app.description };
}

export default async function Page({ params }: Props) {
  const app = getProjectBySlug((await params).slug);
  if (!app?.isApp) notFound();

  return <AppScreen app={app} />;
}

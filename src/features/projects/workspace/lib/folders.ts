import type { Project } from "@/lib/projects";

export type Folder = "all" | "featured" | "apps" | "web";

type FolderDispatch = {
  label: string;
  includes: (project: Project) => boolean;
};

export const folderDispatches: Record<Folder, FolderDispatch> = {
  all: { label: "all/", includes: () => true },
  featured: { label: "featured/", includes: (project) => Boolean(project.featured) },
  apps: { label: "ios-apps/", includes: (project) => Boolean(project.isApp) },
  web: { label: "web/", includes: (project) => !project.isApp },
};

export const folders = Object.keys(folderDispatches) as Folder[];

export const projectsIn = (folder: Folder, projects: Project[]) =>
  projects.filter(folderDispatches[folder].includes);

export const projectKind = (project: Project) =>
  project.isApp ? "iOS app" : "web app";

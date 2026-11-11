import { createFileRoute } from "@tanstack/react-router";
import ProjectsScreen from "@/features/projects/screens/projects-screen";

export const Route = createFileRoute("/projects/")({
  component: ProjectsScreen,
});

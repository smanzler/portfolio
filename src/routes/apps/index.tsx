import { createFileRoute } from "@tanstack/react-router";
import AppsScreen from "@/features/apps/screens/apps-screen";

export const Route = createFileRoute("/apps/")({
  component: AppsScreen,
});

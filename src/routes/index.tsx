import { createFileRoute } from "@tanstack/react-router";
import HomeScreen from "@/features/home/screens/home-screen";

export const Route = createFileRoute("/")({
  component: HomeScreen,
});

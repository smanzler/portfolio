import { NotFoundScreen } from "@/components/not-found-screen";

export function AppNotFoundScreen() {
  return (
    <NotFoundScreen
      title="No such app"
      folder="apps/"
      back={{ href: "/apps", label: "Back to apps" }}
    />
  );
}

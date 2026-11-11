import { NotFoundScreen } from "@/components/not-found-screen";

export default function NotFound() {
  return (
    <NotFoundScreen
      title="No such app"
      folder="apps/"
      back={{ href: "/apps", label: "Back to apps" }}
    />
  );
}

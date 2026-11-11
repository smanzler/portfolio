import { NotFoundScreen } from "@/components/not-found-screen";

export default function NotFound() {
  return (
    <NotFoundScreen
      title="No such project"
      folder="work/"
      back={{ href: "/projects", label: "Back to work" }}
    />
  );
}

import { NotFoundScreen } from "@/components/not-found-screen";

export default function NotFound() {
  return (
    <NotFoundScreen
      title="No such page"
      folder="portfolio/"
      back={{ href: "/", label: "Back home" }}
    />
  );
}

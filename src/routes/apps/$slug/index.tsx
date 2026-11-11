import { createFileRoute, notFound } from "@tanstack/react-router";
import { AppNotFoundScreen } from "@/features/apps/screens/app-not-found-screen";
import AppScreen from "@/features/apps/screens/app-screen";
import { getProjectBySlug } from "@/lib/projects";
import { buildPageHead } from "@/lib/seo";

export const Route = createFileRoute("/apps/$slug/")({
  loader: ({ params }) => {
    const app = getProjectBySlug(params.slug);
    if (!app?.isApp) throw notFound();
    return app;
  },
  head: ({ loaderData }) =>
    loaderData
      ? buildPageHead({
          title: loaderData.title,
          description: loaderData.description,
        })
      : {},
  component: Page,
  notFoundComponent: AppNotFoundScreen,
});

function Page() {
  return <AppScreen app={Route.useLoaderData()} />;
}

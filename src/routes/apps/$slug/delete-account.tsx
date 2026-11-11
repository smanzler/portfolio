import { createFileRoute } from "@tanstack/react-router";
import { AppNotFoundScreen } from "@/features/apps/screens/app-not-found-screen";
import PolicyScreen from "@/features/apps/screens/policy-screen";
import { loadPolicy } from "@/features/apps/lib/policies";

export const Route = createFileRoute("/apps/$slug/delete-account")({
  loader: ({ params }) => loadPolicy("accountDeletion", params.slug),
  component: Page,
  notFoundComponent: AppNotFoundScreen,
});

function Page() {
  const { app, policy } = Route.useLoaderData();
  return <PolicyScreen app={app} type="accountDeletion" policy={policy} />;
}

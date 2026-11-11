import {
  PolicyRoute,
  policyStaticParams,
} from "@/features/apps/screens/policy-screen";

export const generateStaticParams = () => policyStaticParams("privacy");

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <PolicyRoute type="privacy" params={params} />;
}

import {
  PolicyRoute,
  policyStaticParams,
} from "@/features/apps/screens/policy-screen";

export const generateStaticParams = () => policyStaticParams("accountDeletion");

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <PolicyRoute type="accountDeletion" params={params} />;
}

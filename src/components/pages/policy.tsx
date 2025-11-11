import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { H1, H2, H4, Muted, P, UL } from "../ui/typography";
import { Separator } from "../ui/separator";
import { useApps } from "@/hooks/useApps";

const Policy = ({ type }: { type: "privacy" | "terms" }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { apps } = useApps();
  const item = apps.find((app) => app.title === id);

  const policy =
    type === "privacy" ? item?.privacyPolicy : item?.termsOfService;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!policy || !item) {
    return (
      <div className="min-h-screen">
        <div className="flex flex-col items-center justify-center py-20">
          <H1>
            {type === "privacy" ? "Privacy Policy" : "Terms of Service"} Not
            Found
          </H1>
          <Button
            onClick={() => navigate("/apps")}
            variant="ghost"
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Apps
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-6 px-6">
        <H1>{type === "privacy" ? "Privacy Policy" : "Terms of Service"}</H1>
        <div className="flex flex-row justify-between items-end">
          <div>
            <H2>{item.title}</H2>
            <Muted>Last updated: {policy.lastUpdated}</Muted>
          </div>
          <div className="rounded-lg overflow-hidden size-16">
            <img
              src={item.image}
              alt={item.title}
              className="size-full object-cover"
            />
          </div>
        </div>
        <Separator />
        {policy.sections.map((section, index) => (
          <div key={index}>
            <H4>{section.title}</H4>
            {section.content.map((content, index) =>
              typeof content === "string" ? (
                <P key={index}>{content}</P>
              ) : (
                <UL key={index} items={content} />
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Policy;

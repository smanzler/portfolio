import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
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
  }, [id, type]);

  if (!policy || !item) {
    return (
      <div className="min-h-screen">
        <Button
          onClick={() => navigate("/apps")}
          variant="ghost"
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Apps
        </Button>

        <div className="flex flex-col items-center text-center justify-center py-20 gap-6">
          <div>
            <H1>
              {type === "privacy" ? "Privacy Policy" : "Terms of Service"} Not
              Found
            </H1>
            <P>
              Sorry, we couldn't find the app you're looking for. It might have
              been moved or doesn't exist.
            </P>
          </div>
          <Button asChild>
            <Link to="/apps">
              <ArrowLeft className="h-4 w-4" />
              View All Apps
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-6">
        <H1>{type === "privacy" ? "Privacy Policy" : "Terms of Service"}</H1>
        <div className="flex flex-row justify-between gap-4 items-end">
          <div>
            <Link to={`/apps/${item.title}`}>
              <H2 className="hover:underline">{item.title}</H2>
            </Link>
            <Muted>Last updated: {policy.lastUpdated}</Muted>
          </div>
          <Link
            to={`/apps/${item.title}`}
            className="rounded-lg overflow-hidden size-16 shrink-0"
          >
            <img
              src={item.image}
              alt={item.title}
              className="size-full object-cover"
            />
          </Link>
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

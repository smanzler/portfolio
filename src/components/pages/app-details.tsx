import { Link, useNavigate, useParams } from "react-router";
import { Button } from "../ui/button";
import { ArrowLeft, Star } from "lucide-react";
import { useEffect } from "react";
import { useApps } from "@/hooks/useApps";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { apps } = useApps();
  const app = apps.find((app) => app.title === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!app) {
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

        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            App Not Found
          </h1>
          <p className="text-base text-muted-foreground mb-8 text-center max-w-md">
            Sorry, we couldn't find the app you're looking for. It might have
            been moved or doesn't exist.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link to="/apps">
                <ArrowLeft className="h-4 w-4" />
                View All Apps
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
        {app.title}
      </h1>

      <div className="flex flex-col gap-12">
        {/* Screenshots */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-4 overflow-x-auto">
            {app.screenshots &&
              app.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden border w-1/3 min-w-64"
                >
                  <img
                    src={screenshot}
                    alt={screenshot}
                    className="w-full h-auto"
                  />
                </div>
              ))}
          </div>
        </div>
        {/* Description */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold tracking-tight">Description</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {app.longDescription || app.description}
          </p>
        </div>
        {/* Features */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold tracking-tight">Features</h2>
          <ul className="list-disc list-inside">
            {app.features &&
              app.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-base text-muted-foreground leading-relaxed"
                >
                  {feature}
                </li>
              ))}
          </ul>
        </div>
        {/* Links */}
        {app.link ||
          (app.github && (
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold tracking-tight">Links</h2>
              <ul className="list-disc list-inside">
                {app.link && (
                  <li>
                    <a
                      href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {app.link}
                    </a>
                  </li>
                )}
                {app.github && (
                  <li>
                    <a
                      href={app.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        {/* Reviews */}
        {app.reviews && (
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold tracking-tight">Reviews</h2>
            <div className="flex flex-row gap-4 overflow-x-auto">
              {app.reviews.map((review, index) => (
                <Card key={index} className="w-1/3 min-w-64">
                  <CardHeader>
                    <CardTitle>{review.name}</CardTitle>
                    <CardDescription>{review.review}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-row gap-2">
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <Star
                          key={index}
                          className="h-4 w-4 text-yellow-500"
                          fill="currentColor"
                        />
                      ))}
                      {Array.from({ length: 5 - review.rating }).map(
                        (_, index) => (
                          <Star key={index} className="h-4 w-4 text-gray-400" />
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
        {/* FAQ */}
        {app.faq && (
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold tracking-tight">FAQ</h2>
            <div className="flex flex-col gap-2">
              <Accordion type="single" collapsible>
                {app.faq.map((faq, index) => (
                  <AccordionItem key={index} value={faq.question}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppDetails;

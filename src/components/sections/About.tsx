import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function About() {
  const frontendSkills = [
    "React / Next.js",
    "TypeScript",
    "TailwindCSS",
    "HTML5 / CSS3",
    "Redux / Zustand",
    "React Query",
  ];

  const backendSkills = [
    "Node.js",
    "Python",
    "PostgreSQL",
    "RESTful APIs",
    "GraphQL",
    "Docker",
  ];

  return (
    <section id="about" className="py-12 md:py-24 max-w-7xl mx-auto">
      <div className="flex flex-col items-center gap-8 text-center mb-16 animate-fade-up">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          About Me{" "}
          <HoverCard>
            <HoverCardTrigger asChild>
              <span className="text-blue-500 hover:text-blue-600 cursor-pointer">
                @Simon
              </span>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex items-center gap-4">
                <Avatar className="size-25">
                  <AvatarImage src="https://github.com/vercel.png" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Simon Manzler</h4>
                  <p className="text-sm">Full-Stack Developer</p>
                  <div className="text-muted-foreground text-xs">
                    From Cincinnati, OH
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </h2>
        <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Passionate about creating exceptional web experiences and solving
          complex problems through elegant code.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="animate-fade-up" style={{ animationDelay: "200ms" }}>
          <CardHeader>
            <CardTitle>Background</CardTitle>
            <CardDescription>
              With over 5 years of experience in web development, I specialize
              in building modern, responsive, and user-friendly applications. My
              journey in tech started with a passion for creating intuitive user
              experiences and has evolved into a deep expertise in full-stack
              development.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CardDescription className="mt-4">
              I'm constantly learning and staying up-to-date with the latest
              technologies and best practices in web development.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="animate-fade-up" style={{ animationDelay: "400ms" }}>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
            <CardDescription>
              A comprehensive set of skills across the full stack
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-sm">
                Frontend Development
              </h4>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">
                Backend Development
              </h4>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

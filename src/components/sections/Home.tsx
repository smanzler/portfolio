import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Home() {
  const skills = [
    { name: "React", type: "Frontend" },
    { name: "TypeScript", type: "Language" },
    { name: "Node.js", type: "Backend" },
    { name: "TailwindCSS", type: "Styling" },
    { name: "Next.js", type: "Framework" },
    { name: "PostgreSQL", type: "Database" },
  ];

  return (
    <section
      id="home"
      className="py-12 md:py-24 max-w-7xl mx-auto min-h-screen flex flex-col justify-center"
    >
      <div className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Full-Stack Developer
        </h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Building beautiful, responsive, and user-friendly web applications
          with modern technologies.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <Badge key={skill.name} variant="secondary">
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Web Development</CardTitle>
            <CardDescription>
              Creating modern web applications with React, TypeScript, and
              TailwindCSS.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Modern Frontend Frameworks</li>
              <li>Responsive Design</li>
              <li>Performance Optimization</li>
              <li>SEO Best Practices</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>UI/UX Design</CardTitle>
            <CardDescription>
              Designing intuitive and beautiful user interfaces with modern
              design principles.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>User-Centered Design</li>
              <li>Wireframing & Prototyping</li>
              <li>Design Systems</li>
              <li>Accessibility</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mobile Development</CardTitle>
            <CardDescription>
              Building cross-platform mobile applications with React Native.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Native Performance</li>
              <li>Cross-Platform Development</li>
              <li>App Store Deployment</li>
              <li>Mobile-First Design</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

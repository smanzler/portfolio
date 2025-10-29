import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import resume from "@/assets/resume.pdf";
import { DownloadIcon } from "lucide-react";

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
    <section id="about" className="py-12 min-h-screen">
      <div className="flex flex-col items-center gap-2 text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          About Me
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Here is some information about me and my skills.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Background</CardTitle>
              <CardDescription>
                Hi, I’m Simon — a full-stack software developer who enjoys
                building practical, reliable apps that people actually use.
                <br />
                <br />
                I’ve completed three internships and worked on projects ranging
                from enterprise C# APIs in financial services to a React Native
                workout app published on the App Store. My focus is on creating
                smooth, user-friendly experiences backed by solid, maintainable
                code.
                <br />
                <br />
                I like working across the stack — designing databases, writing
                clean APIs, and building responsive interfaces with React and
                React Native. Lately, I’ve been using Supabase and PostgreSQL
                for cloud-based apps, and WatermelonDB for offline-first mobile
                development.
                <br />
                <br />
                Outside of coding, I enjoy music, art, and exploring new tech
                ideas — often blending them into creative side projects.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
                <CardDescription>
                  A comprehensive set of skills across the full stack
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <h4 className="font-semibold mb-3 text-sm">
                    Frontend Development
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: 0.7 + index * 0.1 }}
                      >
                        <Badge variant="secondary">{skill}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                >
                  <h4 className="font-semibold mb-3 text-sm">
                    Backend Development
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: 1 + index * 0.1 }}
                      >
                        <Badge variant="outline">{skill}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <Button
              onClick={() => window.open(resume, "_blank")}
              className="w-full"
            >
              <DownloadIcon className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

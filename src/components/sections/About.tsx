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
    <section id="about" className="py-20 min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="px-6 mb-12"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Here is some information about me and my skills.
          </p>
        </div>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-6 px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Hi, I'm Simon
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              a full-stack software developer who enjoys building practical,
              reliable apps that people actually use.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Experience
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I've completed three internships and worked on projects ranging
              from enterprise C# APIs in financial services to a React Native
              workout app published on the App Store. My focus is on creating
              smooth, user-friendly experiences backed by solid, maintainable
              code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Technical Focus
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I like working across the stack — designing databases, writing
              clean APIs, and building responsive interfaces with React and
              React Native. Lately, I've been using Supabase and PostgreSQL for
              cloud-based apps, and WatermelonDB for offline-first mobile
              development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              Beyond Code
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Outside of coding, I enjoy music, art, and exploring new tech
              ideas — often blending them into creative side projects.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-6 px-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Technical Skills
              </h3>
              <p className="text-muted-foreground mb-6">
                A comprehensive set of skills across the full stack
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <h4 className="font-semibold mb-3 text-base">
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
              <h4 className="font-semibold mb-3 text-base">
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

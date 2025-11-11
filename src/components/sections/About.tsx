import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import resume from "@/assets/resume.pdf";
import { DownloadIcon } from "lucide-react";
import { H1, H3, H4, Lead, Muted, P } from "../ui/typography";

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
        className="mb-12"
      >
        <H1>About Me</H1>
        <Lead>Here is some information about me and my skills.</Lead>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <H3>Hi, I'm Simon</H3>
            <P className="!text-muted-foreground">
              a full-stack software developer who enjoys building practical,
              reliable apps that people actually use.
            </P>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <H3>Experience</H3>
            <P className="!text-muted-foreground">
              I've completed three internships and worked on projects ranging
              from enterprise C# APIs in financial services to a React Native
              workout app published on the App Store. My focus is on creating
              smooth, user-friendly experiences backed by solid, maintainable
              code.
            </P>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <H3>Technical Focus</H3>
            <P className="!text-muted-foreground">
              I like working across the stack — designing databases, writing
              clean APIs, and building responsive interfaces with React and
              React Native. Lately, I've been using Supabase and PostgreSQL for
              cloud-based apps, and WatermelonDB for offline-first mobile
              development.
            </P>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <H3>Beyond Code</H3>
            <P className="!text-muted-foreground">
              Outside of coding, I enjoy music, art, and exploring new tech
              ideas — often blending them into creative side projects.
            </P>
          </motion.div>
        </div>

        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <div>
              <H3>Technical Skills</H3>
              <Muted>A comprehensive set of skills across the full stack</Muted>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <H4>Frontend Development</H4>
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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              <H4>Backend Development</H4>
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
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

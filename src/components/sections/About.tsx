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
import { motion } from "framer-motion";

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
      <div className="flex flex-col items-center gap-8 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        >
          About Me{" "}
          <HoverCard>
            <HoverCardTrigger asChild>
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="text-blue-500 hover:text-blue-600 cursor-pointer inline-block"
              >
                @Simon
              </motion.span>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-4"
              >
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Avatar className="size-25">
                    <AvatarImage src="https://github.com/vercel.png" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                </motion.div>
                <div className="space-y-1">
                  <motion.h4
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="text-sm font-semibold"
                  >
                    Simon Manzler
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className="text-sm"
                  >
                    Full-Stack Developer
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.3 }}
                    className="text-muted-foreground text-xs"
                  >
                    From Cincinnati, OH
                  </motion.div>
                </div>
              </motion.div>
            </HoverCardContent>
          </HoverCard>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
        >
          Passionate about creating exceptional web experiences and solving
          complex problems through elegant code.
        </motion.p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ y: -5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Background</CardTitle>
              <CardDescription>
                With over 5 years of experience in web development, I specialize
                in building modern, responsive, and user-friendly applications.
                My journey in tech started with a passion for creating intuitive
                user experiences and has evolved into a deep expertise in
                full-stack development.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <CardDescription className="mt-4">
                  I'm constantly learning and staying up-to-date with the latest
                  technologies and best practices in web development.
                </CardDescription>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ y: -5 }}
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
                      whileHover={{ scale: 1.1 }}
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
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge variant="outline">{skill}</Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

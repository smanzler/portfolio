import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { motion } from "framer-motion";
import profileImage from "@/assets/simon.jpeg";

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
      className="mx-auto min-h-screen flex flex-col text-center items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="size-50 mb-4 rounded-full overflow-hidden"
      >
        <Avatar>
          <AvatarImage src={profileImage} />
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-1"
      >
        Software Developer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-muted-foreground md:text-xl lg:text-2xl mb-8"
      >
        Building modern, responsive, and user-friendly web applications
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-wrap gap-2 justify-center"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
          >
            <Badge variant="secondary">{skill.name}</Badge>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

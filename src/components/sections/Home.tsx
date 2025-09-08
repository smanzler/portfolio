import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { AnimatePresence, motion } from "framer-motion";
import profileImage from "@/assets/simon.jpeg";
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { XIcon } from "lucide-react";

const DELAY = 0.07;
const DURATION = 0.3;

const LAYOUT_OPTIONS = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

export function Home() {
  const [imageSelected, setImageSelected] = useState(false);

  const handleImageSelected = () => {
    if (!imageSelected) {
      setImageSelected(true);
      return;
    }

    setImageSelected(false);
    handleNavigateToAboutMe();
  };

  const handleNavigateToAboutMe = () => {
    setImageSelected(false);

    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      className="min-h-screen flex flex-col text-center items-center justify-center"
    >
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          className="size-50 mb-4 rounded-full overflow-hidden cursor-pointer"
          onClick={handleImageSelected}
          onMouseEnter={() => setImageSelected(true)}
        >
          <Avatar className="absolute size-50 top-0 left-0 z-53 overflow-hidden rounded-full">
            <AvatarImage src={profileImage} />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
        </motion.div>
        <AnimatePresence>
          {imageSelected && (
            <>
              <motion.div
                className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
                exit={{ opacity: 0 }}
                {...LAYOUT_OPTIONS}
              />
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.1 } }}
                exit={{ opacity: 0 }}
                className="w-[min(calc(100vw-2rem),400px)] absolute left-1/2 -translate-x-1/2 -top-4 z-51"
                onMouseLeave={() => setImageSelected(false)}
              >
                <Card className="py-4 relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => setImageSelected(false)}
                  >
                    <XIcon className="size-4" />
                  </Button>
                  <CardHeader className="flex flex-col items-center gap-0">
                    {/* Profile image placeholder */}
                    <div className="size-50 mb-2" />

                    <motion.h2
                      transition={{ duration: DURATION, delay: 1 * DELAY }}
                      className="text-xl font-semibold"
                      {...LAYOUT_OPTIONS}
                    >
                      Simon Manzler
                    </motion.h2>
                    <motion.div
                      transition={{ duration: DURATION, delay: 2 * DELAY }}
                      {...LAYOUT_OPTIONS}
                    >
                      <Badge variant="outline">Full-Stack Developer</Badge>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="flex flex-row gap-2 justify-center">
                    <motion.div
                      transition={{ duration: DURATION, delay: 3 * DELAY }}
                      className="cursor-pointer h-8 w-8 hover:opacity-80 transition-opacity"
                      onClick={() =>
                        window.open("https://github.com/smanzler", "_blank")
                      }
                      {...LAYOUT_OPTIONS}
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <title>GitHub</title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </motion.div>
                    <motion.div
                      transition={{ duration: DURATION, delay: 5 * DELAY }}
                      className="cursor-pointer h-8 w-8 hover:opacity-80 transition-opacity"
                      onClick={() =>
                        window.open(
                          "https://linkedin.com/in/simonmanzler",
                          "_blank"
                        )
                      }
                      {...LAYOUT_OPTIONS}
                    >
                      <svg
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 382 382"
                        className="fill-current"
                      >
                        <title>LinkedIn</title>
                        <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z"></path>{" "}
                      </svg>
                    </motion.div>
                  </CardContent>

                  <CardFooter>
                    <motion.div
                      transition={{ duration: DURATION, delay: 8 * DELAY }}
                      className="w-full"
                      {...LAYOUT_OPTIONS}
                    >
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={handleNavigateToAboutMe}
                      >
                        More About Me
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
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

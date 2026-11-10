export const readme = {
  greeting: "Hi, I'm Simon",
  intro:
    "A full-stack software developer who enjoys building practical, reliable apps that people actually use. I like working across the stack: designing databases, writing clean APIs, and building responsive interfaces with React and React Native.",
  currently: {
    company: "Western & Southern Financial Group",
    role: "Building C# / .NET APIs for investment systems at",
    learning: "Supabase, PostgreSQL and WatermelonDB for offline-first apps",
    offTheClock: "music, art, and the occasional side project",
  },
  stack: [
    "React / Next.js",
    "TypeScript",
    "TailwindCSS",
    "React Native",
    "Expo",
    "Node.js",
    "Supabase",
    "PostgreSQL",
    "C#",
    ".NET",
    "Python",
    "Docker",
    "Swift",
  ],
};

export function readmeMarkdown() {
  const { greeting, intro, currently, stack } = readme;
  return [
    `# ${greeting}`,
    "",
    intro,
    "",
    "## Currently",
    "",
    `- ${currently.role} **${currently.company}**`,
    `- Learning ${currently.learning}`,
    `- Off the clock: ${currently.offTheClock}`,
    "",
    "## Stack",
    "",
    stack.map((item) => `\`${item}\``).join(" "),
  ].join("\n");
}

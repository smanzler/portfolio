export type ChangeKind = "added" | "changed" | "improved" | "fixed";

export interface Release {
  version: string;
  company: string;
  monogram: string;
  location: string;
  role: string;
  start: string;
  end: string;
  technologies: string[];
  changes: Partial<Record<ChangeKind, string[]>>;
}

export const changeLabels: Record<ChangeKind, string> = {
  added: "Added",
  changed: "Changed",
  improved: "Improved",
  fixed: "Fixed",
};

export const changeOrder: ChangeKind[] = ["added", "changed", "improved", "fixed"];

export const releases: Release[] = [
  {
    version: "4.0.0",
    company: "P0 Security",
    monogram: "P0",
    location: "Remote",
    role: "Software Engineer",
    start: "Jun 2026",
    end: "Present",
    technologies: ["TypeScript", "AWS", "GCP", "Azure", "Kubernetes", "Docker"],
    changes: {},
  },
  {
    version: "3.0.0",
    company: "Western & Southern Financial Group",
    monogram: "WS",
    location: "Cincinnati, OH",
    role: "Software Developer Intern",
    start: "May 2025",
    end: "May 2026",
    technologies: ["C#", "ASP.NET", "SQL Server", "Azure", "Docker"],
    changes: {
      added: [
        "Implemented the OFAC endpoint, scanning thousands of investment clients against the U.S. sanctions list to ensure compliance.",
        "Developing C# / .NET APIs for investment IT systems to process and analyze securities data.",
      ],
      improved: [
        "Writing comprehensive unit tests to increase reliability and reduce production bugs.",
        "Collaborating with cross-functional teams to deliver secure, high-performance solutions.",
      ],
    },
  },
  {
    version: "2.0.0",
    company: "Copeland",
    monogram: "C",
    location: "Remote",
    role: "Computer Science Intern",
    start: "Jan 2025",
    end: "May 2025",
    technologies: ["OnBase", "Windows Server", "PowerShell"],
    changes: {
      added: ["Supported enterprise content management workflows using OnBase."],
      changed: ["Documented and streamlined processes to reduce manual effort."],
    },
  },
  {
    version: "1.0.0",
    company: "Total Quality Logistics",
    monogram: "TQL",
    location: "Cincinnati, OH",
    role: "Application Support Intern",
    start: "Jan 2024",
    end: "May 2024",
    technologies: ["SQL Server", "C#", "VB.NET", "React", "TypeScript"],
    changes: {
      added: [
        "Built a React-based internal dashboard to automate routine tasks and reduce workload.",
      ],
      fixed: [
        "Resolved application tickets and performed SQL debugging for production issues.",
      ],
    },
  },
];

export function changelogMarkdown() {
  const lines = [
    "# Changelog",
    "",
    "All notable changes to my career. Format based on Keep a Changelog.",
  ];
  for (const release of releases) {
    lines.push(
      "",
      `## [${release.version}] - ${release.start} – ${release.end}`,
      "",
      `${release.role} @ ${release.company} (${release.location})`
    );
    for (const kind of changeOrder) {
      const items = release.changes[kind];
      if (!items?.length) continue;
      lines.push("", `### ${changeLabels[kind]}`, "", ...items.map((item) => `- ${item}`));
    }
  }
  return lines.join("\n");
}

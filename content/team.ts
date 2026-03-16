export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  tags: string[];
  type: "human" | "ai";
}

export const team: TeamMember[] = [
  {
    id: "nico",
    name: "Nico",
    role: "Scrum Master & Founder",
    bio: "Nico founded Niko Labs Ltd to give SMEs access to the kind of AI-powered tech teams that used to be reserved for enterprises. He keeps the team moving, the clients happy, and the sprints on time.",
    avatar: "",
    tags: ["Leadership", "Agile", "Product Strategy"],
    type: "human",
  },
  {
    id: "stew",
    name: "Stew",
    role: "Architect",
    bio: "Stew designs the systems that make it all work. He's obsessed with scalability, resilience, and choosing the right tool for the job — not the trendy one.",
    avatar: "",
    tags: ["System Design", "Infrastructure", "AI Architecture"],
    type: "ai",
  },
  {
    id: "jamie",
    name: "Jamie",
    role: "Frontend Dev",
    bio: "Jamie turns complex data and workflows into interfaces that actually make sense. If it's confusing, it's broken — that's the rule.",
    avatar: "",
    tags: ["React", "TypeScript", "Data Visualisation"],
    type: "ai",
  },
  {
    id: "rob",
    name: "Rob",
    role: "Backend Dev",
    bio: "Rob builds the engines underneath. APIs, pipelines, integrations — if data needs to move reliably at scale, Rob makes it happen.",
    avatar: "",
    tags: ["Python", "APIs", "Data Engineering"],
    type: "ai",
  },
  {
    id: "darren",
    name: "Darren",
    role: "Product Owner",
    bio: "Darren keeps us focused on what matters. He translates business needs into clear requirements and makes sure we're always building the right thing.",
    avatar: "",
    tags: ["Product Strategy", "Requirements", "Stakeholder Management"],
    type: "ai",
  },
];

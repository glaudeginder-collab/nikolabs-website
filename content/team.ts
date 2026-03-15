export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  tags: string[];
}

export const team: TeamMember[] = [
  {
    id: "nico",
    name: "Nico",
    role: "Scrum Master & Founder",
    bio: "Nico founded Niko Labs to give SMEs access to the kind of AI-powered tech teams that used to be reserved for enterprises. He keeps the team moving, the clients happy, and the sprints on time.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nico&backgroundColor=1C1C27",
    tags: ["Leadership", "Agile", "Product Strategy"],
  },
  {
    id: "stew",
    name: "Stew",
    role: "Architect",
    bio: "Stew designs the systems that make it all work. He's obsessed with scalability, resilience, and choosing the right tool for the job — not the trendy one.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Stew&backgroundColor=1C1C27",
    tags: ["System Design", "Infrastructure", "AI Architecture"],
  },
  {
    id: "jamie",
    name: "Jamie",
    role: "Frontend Dev",
    bio: "Jamie turns complex data and workflows into interfaces that actually make sense. If it's confusing, it's broken — that's the rule.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jamie&backgroundColor=1C1C27",
    tags: ["React", "TypeScript", "Data Visualisation"],
  },
  {
    id: "rob",
    name: "Rob",
    role: "Backend Dev",
    bio: "Rob builds the engines underneath. APIs, pipelines, integrations — if data needs to move reliably at scale, Rob makes it happen.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rob&backgroundColor=1C1C27",
    tags: ["Python", "APIs", "Data Engineering"],
  },
  {
    id: "darren",
    name: "Darren",
    role: "Product Owner",
    bio: "Darren keeps us focused on what matters. He translates business needs into clear requirements and makes sure we're always building the right thing.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Darren&backgroundColor=1C1C27",
    tags: ["Product Strategy", "Requirements", "Stakeholder Management"],
  },
];

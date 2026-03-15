export interface Service {
  id: string;
  emoji: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  price: string;
  priceNote: string;
  cta: string;
  highlight?: boolean;
}

export const services: Service[] = [
  {
    id: "agentbuild",
    emoji: "🔧",
    name: "AgentBuild",
    tagline: "Custom AI agents for your workflows",
    description:
      "We design, build, and deploy custom AI agents that automate your most time-consuming business processes. From inbox triage to customer onboarding — if it's repetitive, we'll automate it.",
    features: [
      "Custom agent architecture designed for your stack",
      "Integration with your existing tools (CRM, ERP, Slack, email)",
      "Full handover with docs and training",
      "Post-launch support included",
    ],
    price: "from £10,000",
    priceNote: "Scoped per project",
    cta: "Start a project",
  },
  {
    id: "datasignal",
    emoji: "📊",
    name: "DataSignal",
    tagline: "Live data. Real decisions.",
    description:
      "Replace static slide decks with living systems. We build real-time data pipelines, agent-driven reporting, and dashboards that surface what matters — without anyone lifting a finger.",
    features: [
      "Real-time data pipelines from any source",
      "Automated reporting via AI agents",
      "Custom dashboards built for your team",
      "Anomaly detection and alerting",
    ],
    price: "from £5,000",
    priceNote: "Scoped per project",
    cta: "Get a data system",
  },
  {
    id: "sprintlab",
    emoji: "⚡",
    name: "SprintLab",
    tagline: "Fixed price. Fixed scope. 4 weeks.",
    description:
      "One focused problem. One dedicated team. Four weeks to a working solution. SprintLab is for businesses who need results fast without open-ended contracts or unpredictable costs.",
    features: [
      "Fixed scope agreed upfront — no surprises",
      "Dedicated team for 4 weeks",
      "Working output, fully handed over",
      "Option to extend into AgentBuild or DataSignal",
    ],
    price: "from £8,000",
    priceNote: "Fixed price per sprint",
    cta: "Book a sprint",
    highlight: true,
  },
  {
    id: "agentready",
    emoji: "🧭",
    name: "AgentReady",
    tagline: "Know where AI fits. Then see it built.",
    description:
      "Not sure where AI fits in your business? We run a deep-dive audit, produce a prioritised roadmap, and then implement the top 3 items ourselves. Strategy and execution in one engagement.",
    features: [
      "2-week AI readiness audit",
      "Prioritised opportunity roadmap",
      "Top 3 items implemented by our team",
      "Full documentation and next steps",
    ],
    price: "from £3,500",
    priceNote: "Includes implementation",
    cta: "Get audit",
  },
];

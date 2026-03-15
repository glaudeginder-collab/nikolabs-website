export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  outcome: string;
  status: "live" | "in-development" | "coming-soon";
  tags: string[];
  services: string[];
  metrics?: { label: string; value: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "beatmark",
    client: "BeatMark",
    title: "Holding wealth managers accountable",
    tagline: "A portfolio vs ETF tracker that tells you the truth about your returns.",
    problem:
      "Most investors have no idea whether their wealth manager is actually beating the market — or just beating index fund returns by coincidence. The data exists, but it's buried in quarterly PDFs and impossible to act on.",
    solution:
      "BeatMark is a portfolio vs ETF tracker that shows investors exactly how their returns compare to a low-cost global ETF like VWRL. Clean data visualisation, automated daily updates, no manual calculations.",
    outcome:
      "Investors can finally see — in seconds — whether they're getting value from their wealth manager. BeatMark is built for transparency.",
    status: "in-development",
    tags: ["FinTech", "Data Visualisation", "Automation"],
    services: ["DataSignal", "AgentBuild"],
    metrics: [
      { label: "Data sources", value: "Real-time" },
      { label: "Comparison benchmark", value: "VWRL/VWCE" },
      { label: "Update frequency", value: "Daily" },
    ],
  },
];

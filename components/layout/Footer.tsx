import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "AgentBuild", href: "/services#agentbuild" },
    { label: "DataSignal", href: "/services#datasignal" },
    { label: "SprintLab", href: "/services#sprintlab" },
    { label: "AgentReady", href: "/services#agentready" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#13131A] border-t border-[#2A2A3D] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#6C63FF] flex items-center justify-center text-white font-bold text-sm">
                N
              </div>
              <span className="font-semibold text-[#F0F0FF]">Niko Labs</span>
            </div>
            <p className="text-[#9090AA] text-sm leading-relaxed max-w-xs">
              AI agent-driven consultancy for growing businesses. We build what used to take a 10-person team — in weeks.
            </p>
            <div className="mt-6">
              <span className="font-mono text-xs text-[#6C63FF] bg-[#6C63FF]/10 px-3 py-1 rounded-full">
                Available for projects
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#9090AA] mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#9090AA] hover:text-[#F0F0FF] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#2A2A3D] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9090AA]">
            © {new Date().getFullYear()} Niko Labs Ltd. All rights reserved.
          </p>
          <p className="text-xs text-[#9090AA]">
            Built with AI. Delivered by humans.
          </p>
        </div>
      </div>
    </footer>
  );
}

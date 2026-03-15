import Link from "next/link";
import Image from "next/image";

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
    <footer className="bg-[#FFFFFF] border-t border-[#E2E0DA] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/nikolabs-logo.jpg"
                alt="Niko Labs Ltd"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-[#4A5568] text-sm leading-relaxed max-w-xs">
              AI agent-driven consultancy for growing businesses. We build what used to take a 10-person team — in weeks.
            </p>
            <div className="mt-6">
              <span className="font-mono text-xs text-[#4BC4C4] bg-[#4BC4C4]/10 px-3 py-1 rounded-full">
                Available for projects
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#4A5568] mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#4A5568] hover:text-[#1A2744] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#E2E0DA] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#4A5568]">
            © {new Date().getFullYear()} Niko Labs Ltd. All rights reserved.
          </p>
          <p className="text-xs text-[#4A5568]">
            Built with AI. Delivered by humans.
          </p>
        </div>
      </div>
    </footer>
  );
}

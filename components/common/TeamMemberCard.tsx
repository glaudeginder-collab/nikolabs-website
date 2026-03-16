import { TeamMember } from "@/content/team";
import { Badge } from "@/components/ui/badge";

interface TeamMemberCardProps {
  member: TeamMember;
  showBio?: boolean;
}

// SVG avatars — 24x24 viewBox, rendered in an 80x80 circle
function NicoAvatar() {
  return (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#4BC4C4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Head */}
      <circle cx="12" cy="8" r="3.5" />
      {/* Shoulders */}
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

function StewAvatar() {
  return (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#4BC4C4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Gear/cog */}
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      <circle cx="12" cy="12" r="6" strokeDasharray="2 2" />
    </svg>
  );
}

function JamieAvatar() {
  return (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#4BC4C4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* < /> */}
      <path d="M8 7L3 12l5 5" />
      <path d="M16 7l5 5-5 5" />
      <path d="M13 5l-2 14" />
    </svg>
  );
}

function RobAvatar() {
  return (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#4BC4C4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Server stack — three stacked rectangles */}
      <rect x="3" y="4" width="18" height="4" rx="1" />
      <rect x="3" y="10" width="18" height="4" rx="1" />
      <rect x="3" y="16" width="18" height="4" rx="1" />
      {/* Status dots */}
      <circle cx="18" cy="6" r="0.8" fill="#4BC4C4" stroke="none" />
      <circle cx="18" cy="12" r="0.8" fill="#4BC4C4" stroke="none" />
      <circle cx="18" cy="18" r="0.8" fill="#4BC4C4" stroke="none" />
    </svg>
  );
}

function DarrenAvatar() {
  return (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#4BC4C4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Bar chart */}
      <rect x="3" y="12" width="4" height="8" rx="0.5" />
      <rect x="10" y="7" width="4" height="13" rx="0.5" />
      <rect x="17" y="4" width="4" height="16" rx="0.5" />
      {/* Baseline */}
      <path d="M2 21h20" />
    </svg>
  );
}

const AVATARS: Record<string, React.FC> = {
  nico: NicoAvatar,
  stew: StewAvatar,
  jamie: JamieAvatar,
  rob: RobAvatar,
  darren: DarrenAvatar,
};

export function TeamMemberCard({ member, showBio = false }: TeamMemberCardProps) {
  const Avatar = AVATARS[member.id] ?? NicoAvatar;

  return (
    <div className="rounded-2xl bg-[#FFFFFF] border border-[#E2E0DA] p-6 flex flex-col items-center text-center hover:border-[#4BC4C4]/30 transition-colors duration-300 group">
      {/* SVG avatar circle */}
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mb-4 shrink-0 group-hover:ring-2 group-hover:ring-[#4BC4C4]/40 transition-all"
        style={{ backgroundColor: "#1A2744" }}
      >
        <Avatar />
      </div>

      {/* Name & role */}
      <h3 className="font-semibold text-[#1A2744] text-sm">{member.name}</h3>
      <p className="text-xs text-[#4BC4C4] font-mono mt-1">{member.role}</p>

      {/* Type badge */}
      <span
        className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-semibold"
        style={
          member.type === "ai"
            ? { backgroundColor: "#4BC4C4", color: "#1A2744" }
            : { backgroundColor: "#1A2744", color: "#4BC4C4" }
        }
      >
        {member.type === "ai" ? "🤖 AI Agent" : "👤 Founder"}
      </span>

      {showBio && (
        <p className="text-xs text-[#4A5568] leading-relaxed mt-3">{member.bio}</p>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 justify-center mt-4">
        {member.tags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="border-[#E2E0DA] text-[#4A5568] text-[10px] px-2 py-0"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}

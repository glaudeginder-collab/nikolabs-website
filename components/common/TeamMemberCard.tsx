import { TeamMember } from "@/content/team";
import { Badge } from "@/components/ui/badge";

interface TeamMemberCardProps {
  member: TeamMember;
  showBio?: boolean;
}

export function TeamMemberCard({ member, showBio = false }: TeamMemberCardProps) {
  return (
    <div className="rounded-2xl bg-[#FFFFFF] border border-[#E2E0DA] p-6 flex flex-col items-center text-center hover:border-[#4BC4C4]/30 transition-colors duration-300 group">
      {/* Initials avatar */}
      <div className="w-16 h-16 rounded-full bg-[#1A2744] group-hover:ring-2 group-hover:ring-[#4BC4C4]/40 transition-all flex items-center justify-center mb-4 shrink-0">
        <span className="text-xl font-bold text-[#4BC4C4] select-none leading-none">
          {member.name.split(" ").map((n) => n[0]).join("").toUpperCase()}
        </span>
      </div>

      {/* Info */}
      <h3 className="font-semibold text-[#1A2744] text-sm">{member.name}</h3>
      <p className="text-xs text-[#4BC4C4] font-mono mt-1">{member.role}</p>

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

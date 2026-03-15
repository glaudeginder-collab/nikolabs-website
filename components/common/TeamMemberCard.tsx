import { TeamMember } from "@/content/team";
import { Badge } from "@/components/ui/badge";

interface TeamMemberCardProps {
  member: TeamMember;
  showBio?: boolean;
}

export function TeamMemberCard({ member, showBio = false }: TeamMemberCardProps) {
  return (
    <div className="rounded-2xl bg-[#FFFFFF] border border-[#E2E0DA] p-6 flex flex-col items-center text-center hover:border-[#4BC4C4]/30 transition-colors duration-300 group">
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full bg-[#F0EFEC] border-2 border-[#E2E0DA] group-hover:border-[#4BC4C4]/40 transition-colors overflow-hidden mb-4">
        <img
          src={member.avatar}
          alt={member.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
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

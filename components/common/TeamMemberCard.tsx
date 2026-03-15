import { TeamMember } from "@/content/team";
import { Badge } from "@/components/ui/badge";

interface TeamMemberCardProps {
  member: TeamMember;
  showBio?: boolean;
}

export function TeamMemberCard({ member, showBio = false }: TeamMemberCardProps) {
  return (
    <div className="rounded-2xl bg-[#13131A] border border-[#2A2A3D] p-6 flex flex-col items-center text-center hover:border-[#6C63FF]/30 transition-colors duration-300 group">
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full bg-[#1C1C27] border-2 border-[#2A2A3D] group-hover:border-[#6C63FF]/40 transition-colors overflow-hidden mb-4">
        <img
          src={member.avatar}
          alt={member.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <h3 className="font-semibold text-[#F0F0FF] text-sm">{member.name}</h3>
      <p className="text-xs text-[#6C63FF] font-mono mt-1">{member.role}</p>

      {showBio && (
        <p className="text-xs text-[#9090AA] leading-relaxed mt-3">{member.bio}</p>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 justify-center mt-4">
        {member.tags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="border-[#2A2A3D] text-[#9090AA] text-[10px] px-2 py-0"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}

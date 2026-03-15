import Link from "next/link";
import { Service } from "@/content/services";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  showFeatures?: boolean;
}

export function ServiceCard({ service, showFeatures = true }: ServiceCardProps) {
  return (
    <div
      className={`relative h-full rounded-2xl border p-8 flex flex-col transition-all duration-300 group hover:border-[#6C63FF]/40 hover:shadow-[0_0_30px_rgba(108,99,255,0.08)] ${
        service.highlight
          ? "bg-[#6C63FF]/5 border-[#6C63FF]/30"
          : "bg-[#13131A] border-[#2A2A3D]"
      }`}
    >
      {service.highlight && (
        <div className="absolute -top-3 left-8">
          <Badge className="bg-[#6C63FF] text-white border-0 text-xs font-mono">
            Most popular
          </Badge>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="text-3xl mb-3">{service.emoji}</div>
          <h3 className="text-xl font-bold text-[#F0F0FF]">{service.name}</h3>
          <p className="text-sm text-[#6C63FF] font-mono mt-1">{service.tagline}</p>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-[#F0F0FF]">{service.price}</div>
          <div className="text-xs text-[#9090AA]">{service.priceNote}</div>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#9090AA] text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Features */}
      {showFeatures && (
        <ul className="space-y-2.5 mb-8 flex-1">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-[#9090AA]">
              <span className="text-[#22D3A5] mt-0.5 shrink-0">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      <Link
        href={`/contact?service=${service.id}`}
        className={cn(
          buttonVariants({ variant: service.highlight ? "default" : "outline" }),
          service.highlight
            ? "bg-[#6C63FF] hover:bg-[#8B85FF] text-white border-0 w-full justify-center"
            : "border-[#2A2A3D] text-[#F0F0FF] hover:bg-[#1C1C27] hover:border-[#6C63FF]/40 w-full bg-transparent justify-center"
        )}
      >
        {service.cta}
      </Link>
    </div>
  );
}

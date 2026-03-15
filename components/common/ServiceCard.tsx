import Link from "next/link";
import { Service } from "@/content/services";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  showFeatures?: boolean;
  showPricing?: boolean;
}

export function ServiceCard({ service, showFeatures = true, showPricing = false }: ServiceCardProps) {
  return (
    <div
      className={`relative h-full rounded-2xl border p-8 flex flex-col transition-all duration-300 group hover:border-[#4BC4C4]/40 hover:shadow-[0_0_30px_rgba(75,196,196,0.08)] ${
        service.highlight
          ? "bg-[#4BC4C4]/5 border-[#4BC4C4]/30"
          : "bg-[#FFFFFF] border-[#E2E0DA]"
      }`}
    >
      {service.highlight && (
        <div className="absolute -top-3 left-8">
          <Badge className="bg-[#4BC4C4] text-white border-0 text-xs font-mono">
            Most popular
          </Badge>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="text-3xl mb-3">{service.emoji}</div>
          <h3 className="text-xl font-bold text-[#1A2744]">{service.name}</h3>
          <p className="text-sm text-[#4BC4C4] font-mono mt-1">{service.tagline}</p>
        </div>
        {showPricing && (
          <div className="text-right">
            <div className="text-lg font-bold text-[#1A2744]">{service.price}</div>
            <div className="text-xs text-[#4A5568]">{service.priceNote}</div>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-[#4A5568] text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Features */}
      {showFeatures && (
        <ul className="space-y-2.5 mb-8 flex-1">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-[#4A5568]">
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
            ? "bg-[#4BC4C4] hover:bg-[#3AAFAF] text-white border-0 w-full justify-center"
            : "border-[#E2E0DA] text-[#1A2744] hover:bg-[#F0EFEC] hover:border-[#4BC4C4]/40 w-full bg-transparent justify-center"
        )}
      >
        {service.cta}
      </Link>
    </div>
  );
}

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface ButtonLinkProps extends VariantProps<typeof buttonVariants> {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function ButtonLink({
  href,
  children,
  className,
  variant = "default",
  size = "default",
  external = false,
}: ButtonLinkProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

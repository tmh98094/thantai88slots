import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "@/components/icons";
import { site } from "@/lib/site";

export function PartnerLink({ children, className = "btn btn-primary" }: { children: ReactNode; className?: string }) {
  return (
    <Link className={className} href={site.partnerPath} rel="nofollow sponsored">
      <span>{children}</span>
      <ArrowUpRight />
    </Link>
  );
}

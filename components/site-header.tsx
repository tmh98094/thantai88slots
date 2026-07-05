"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { MenuIcon } from "@/components/icons";
import { PartnerLink } from "@/components/partner-link";

const nav = [
  ["Slot hot", "/#slot-hot"],
  ["Tin tức", "/tin-tuc"],
  ["Ưu đãi", "/#uu-dai"],
  ["18+", "/18-plus"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="age-strip"><strong>18+</strong><span>Chỉ dành cho người trưởng thành · Chơi có trách nhiệm</span></div>
      <header className="site-header">
        <div className="shell header-inner">
          <BrandLogo />
          <nav className="desktop-nav" aria-label="Điều hướng chính">
            {nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          </nav>
          <div className="header-actions">
            <PartnerLink className="btn btn-primary header-cta">Vào chơi</PartnerLink>
            <button aria-expanded={open} aria-label="Mở menu" className="menu-btn" onClick={() => setOpen((value) => !value)} type="button"><MenuIcon /></button>
          </div>
        </div>
        {open ? (
          <nav aria-label="Điều hướng di động" className="mobile-nav">
            {nav.map(([label, href]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>)}
            <PartnerLink className="btn btn-primary">Vào nền tảng 18+</PartnerLink>
          </nav>
        ) : null}
      </header>
    </>
  );
}

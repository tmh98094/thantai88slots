"use client";

import Link from "next/link";
import { useState } from "react";
import { PartnerLink } from "@/components/partner-link";

export function StickyCta() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="sticky-cta-shell" data-collapsed={collapsed}>
      <aside className="sticky-cta" aria-label="Lối tắt truy cập nền tảng">
        <button
          aria-label="Thu gọn CTA"
          className="sticky-cta-close"
          onClick={() => setCollapsed(true)}
          type="button"
        >
          ×
        </button>
        <div>
          <span>18+ · Liên kết đối tác</span>
          <strong>Thantai88Slots</strong>
          <small>Truy cập nhanh khu vực giải trí dành cho thành viên đủ tuổi.</small>
        </div>
        <PartnerLink className="btn btn-primary">Chơi ngay</PartnerLink>
        <Link href="/choi-co-trach-nhiem">Giới hạn 18+</Link>
      </aside>
      <button
        aria-label="Mở lại bảng truy cập Play Now"
        className="sticky-cta-tab"
        onClick={() => setCollapsed(false)}
        type="button"
      >
        <span>Play Now</span>
        <small>18+</small>
      </button>
    </div>
  );
}

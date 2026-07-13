import Link from "next/link";

export function BrandLogo() {
  return (
    <Link aria-label="Thantai88Slots - Trang chủ" className="brand-logo" href="/">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt="Thantai88 Slots" height={724} src="/images/logo.png" width={2172} />
    </Link>
  );
}

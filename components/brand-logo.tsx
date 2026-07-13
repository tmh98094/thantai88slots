import Link from "next/link";

export function BrandLogo() {
  return (
    <Link aria-label="Thantai88Slots - Trang chủ" className="brand-logo" href="/">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt="Thantai88" height={416} src="/images/thantai88-logo-official.webp" width={1296} />
    </Link>
  );
}

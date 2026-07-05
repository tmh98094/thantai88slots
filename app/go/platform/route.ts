import { partnerUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

export function GET() {
  return new Response(null, {
    status: 307,
    headers: {
      Location: partnerUrl().toString(),
      "Cache-Control": "no-store",
      "Referrer-Policy": "no-referrer",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

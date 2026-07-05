import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Thantai88Slots", short_name: "T88Slots", start_url: "/", display: "standalone", background_color: "#160308", theme_color: "#d71920", icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }] };
}

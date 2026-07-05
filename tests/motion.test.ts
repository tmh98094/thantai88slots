import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("GSAP scroll animation", () => {
  it("uses ScrollTrigger for scroll-based reveal motion", () => {
    const source = readFileSync(resolve(process.cwd(), "components/gsap-entrance.tsx"), "utf8");

    expect(source).toContain("ScrollTrigger");
    expect(source).toContain("scrollTrigger");
    expect(source).toContain("data-gsap");
  });
});

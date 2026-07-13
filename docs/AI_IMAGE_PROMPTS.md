# Thantai88Slots AI Image Prompts

Use these prompts to regenerate the Slots image set. The target direction is closer to the Sports image set: premium, glamorous, sensual, casino-focused, and visually consistent.

Important production rule: generate the photo without any text or logo first. Do not ask the image AI to write `Thantai88Slots` inside the image. After generation, composite the exact transparent logo file from:

`public/images/thantai88-logo-official.webp`

Use the logo placement rules in `docs/IMAGE_PLACEMENT_AND_QA.md`.

## Global style direction

- Adult woman model only, clearly 25+.
- Sensual casino glamour: lingerie-inspired evening gown, satin slip dress, corset-style gown, lace-trim cocktail dress, sheer-look fashion overlay, cropped blazer, high heels, jewelry.
- Non-explicit: no nudity, no exposed nipples, no transparent clothing over explicit areas, no sexual act, no bed scene, no minors.
- Brand mood: luxury red/gold/black casino with emerald accent lighting.
- Image mood: polished iGaming ad, premium nightlife, jackpot/slot lounge.
- Composition: leave a clean dark logo-safe zone at top-left in every asset.
- No AI text: no watermark, no random logo, no readable banners, no misspelled labels.

## Negative prompt for every asset

No nude body, no exposed nipples, no explicit sexual pose, no minors, no pornographic framing, no cheap club background, no distorted hands, no extra limbs, no unreadable fake text, no logo, no watermark, no brand marks, no random letters, no Sports logo, no football, no soccer ball.

## 1. Hero image

Output file:

`public/images/hero-slots.webp`

Required size/aspect:

- Generate: vertical 4:5 or taller portrait.
- Final file: `1200x1500`.

Prompt:

```text
Premium photorealistic casino hero image for a luxury online slots website. One adult woman model, clearly 25+, confident and glamorous, wearing a sexy emerald satin slip gown with black lace-trim styling and a short tailored black jacket draped over the shoulders. Luxury red-and-gold slot machine lounge, glowing jackpot reels, velvet seating, polished black marble floor, warm gold rim light, emerald accent light, cinematic depth of field. Subject positioned center-right, full upper body and dress shape visible, direct confident gaze, elegant non-explicit pose. Leave a clean dark empty area in the top-left 30% of the frame for a real logo overlay. High-end iGaming advertising look, glossy, premium, sharp face detail, realistic fabric texture.
```

## 2. Open Graph / social image

Output file:

`public/images/og-slots.webp`

Required size/aspect:

- Generate: wide 1.91:1.
- Final file: `1200x630`.

Prompt:

```text
Wide premium casino social-share banner for a luxury online slots website. One adult woman model, clearly 25+, seated beside glowing red-and-gold slot reels, wearing a burgundy satin corset-style cocktail gown with a black cropped blazer and gold jewelry. The atmosphere is rich, sensual, and upscale: velvet chair, jackpot lights, gold reflections, dark casino lounge depth. Subject on the right half, slot reels in background, clean dark empty logo-safe area at the top-left. Photorealistic premium iGaming ad style, no text, no logo, no watermark.
```

## 3. Jackpot section image

Output file:

`public/images/jackpot-stage.webp`

Required size/aspect:

- Generate: 16:9.
- Final file: `1600x900`.

Prompt:

```text
Photorealistic 16:9 jackpot stage image for an online slots website. One adult woman model, clearly 25+, wearing a black satin mini evening gown with tasteful lace detail and a gold cropped jacket. She stands near a dramatic red-and-gold 777 jackpot slot stage with glowing reels, falling gold coins, glossy casino floor, and cinematic stage lights. Sensual high-fashion styling, confident pose, non-explicit. Subject center-right, jackpot machine behind her, top-left clean dark logo-safe space. Premium luxury casino advertising style, crisp and high contrast, no text, no logo, no watermark.
```

## 4. Bonus lounge image

Output file:

`public/images/bonus-lounge.webp`

Required size/aspect:

- Generate: 16:9.
- Final file: `1600x900`.

Prompt:

```text
Luxury casino bonus lounge scene for a slots website, photorealistic 16:9. One adult woman model, clearly 25+, wearing a champagne satin lingerie-inspired evening gown with a deep red velvet blazer, elegant jewelry, and high heels. She is seated at a velvet lounge table with soft gold slot-machine light behind her, red velvet seating, casino chips, warm reflections, and a premium nightlife atmosphere. Sensual but non-explicit fashion pose. Subject on the right, strong dark negative space top-left for logo overlay. No text, no logo, no watermark.
```

## 5. Mobile slots image

Output file:

`public/images/mobile-slots.webp`

Required size/aspect:

- Generate: 16:9.
- Final file: `1600x900`.

Prompt:

```text
Photorealistic mobile slots promotional image, 16:9. One adult woman model, clearly 25+, wearing an emerald lace-trim cocktail dress and black cropped jacket, holding a smartphone showing abstract glowing slot reels without readable text. Background is a premium red-and-gold casino lounge with blurred slot machines, gold light, dark glossy surfaces, and emerald highlights. Subject center-right, phone visible, confident glamorous pose, non-explicit. Leave top-left clean and dark for real logo overlay. No text, no logo, no watermark, no fake UI words.
```

## 6. Slot guide article image

Output file:

`public/images/slots-guide.webp`

Required size/aspect:

- Generate: 16:9.
- Final file: `1600x900`.

Prompt:

```text
Photorealistic editorial image for a slots guide article. One adult woman model, clearly 25+, wearing a black lace-trim satin cocktail dress with a tailored burgundy jacket, seated at a luxury casino table with a notebook, pen, and tablet showing abstract slot icons without readable text. Background has soft red-and-gold slot machine lights and premium casino depth. Sensual fashion styling, intelligent confident expression, non-explicit. Subject on the right half, clean dark top-left logo-safe zone. No text, no logo, no watermark.
```

## Final export checklist

For every generated image:

- Face and hands look natural.
- Clothing is sexy/glamorous but non-explicit.
- No AI text, no fake logo, no watermark.
- Top-left logo-safe zone is clean and dark.
- Subject is not hidden by where the website crops images on mobile.
- Colors fit the Slots palette: red, gold, black, emerald.
- Export to the exact filename listed above.

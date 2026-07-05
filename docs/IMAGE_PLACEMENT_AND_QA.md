# Thantai88Slots Image Placement and QA Guide

This file defines how generated images should be prepared before replacing files in `public/images`.

## File contract

| File | Required final size | Website usage | Crop risk |
| --- | ---: | --- | --- |
| `hero-slots.webp` | `1200x1500` | Homepage hero card | High on mobile/desktop because it is portrait and cropped by the card |
| `og-slots.webp` | `1200x630` | SEO/social preview | Low if logo-safe space is preserved |
| `jackpot-stage.webp` | `1600x900` | Homepage split panel + article card | Medium in cards |
| `bonus-lounge.webp` | `1600x900` | Homepage split panel + article card | Medium in cards |
| `mobile-slots.webp` | `1600x900` | Mobile article/card | Medium in cards |
| `slots-guide.webp` | `1600x900` | Guide article/card | Medium in cards |

## Logo placement

Do not bake random AI logo text into the generated photo. Composite the real transparent logo from:

`public/images/logo.png`

Recommended placement:

- Position: top-left.
- Logo plate: dark translucent rounded rectangle, black at 55-70% opacity.
- Desktop/source image inset: 42px from left, 34px from top.
- 1600x900 logo width: 320-360px.
- 1200x1500 logo width: 280-320px.
- 1200x630 logo width: 300-340px.
- Keep at least 24px inner padding inside the dark plate.
- Do not cover face, chest, hands, phone, slot reels, or jackpot focal point.

## Safe-zone rules

Ask the image AI to keep these zones visually simple:

- Top-left 30% width by 22% height: logo-safe zone.
- Center-right: primary model/focal subject.
- Lower-left: can contain props or casino ambiance, but avoid important text/detail.
- Mobile card crop: assume the website may crop the top/bottom of 16:9 images inside cards; keep face and main body away from extreme edges.

## Export quality

- Format: `.webp`.
- Quality: 82-90 is enough for web.
- Strip metadata if your tool supports it.
- Avoid files above 350KB unless the image quality visibly needs it.

## Manual QA before replacing assets

Open every final image at 100% and check:

- Logo spelling is exact because it came from `public/images/logo.png`.
- No duplicate logo appears in the underlying image.
- No unreadable fake casino text appears.
- Model is adult-looking and non-explicit.
- The image still looks premium after downscaling to 390px mobile width.
- The face remains visible in the likely website crop.
- The image palette matches the Slots site: red/gold/black, with emerald accents acceptable.

## Replacement order

1. Generate the six photos with no logo.
2. Composite the exact logo using the placement above.
3. Export to the exact filenames in `public/images`.
4. Run local website checks on:
   - `/`
   - `/tin-tuc`
   - `/tin-tuc/cach-chon-game-slot-online`
   - `/tin-tuc/jackpot-va-vong-quay-thuong`
   - `/tin-tuc/uu-dai-slot-online-can-luu-y`
   - `/tin-tuc/choi-slot-tren-dien-thoai`
5. Check each route at desktop width `1440x1000` and mobile width `390x844`.

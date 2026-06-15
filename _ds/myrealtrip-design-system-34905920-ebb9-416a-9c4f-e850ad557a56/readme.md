# MyRealTrip (마이리얼트립) — Design System

A brand & UI system reconstructed from the MyRealTrip mobile super-app. It captures
the product's clean white canvas, ink-black call-to-actions, azure-blue accents,
purple deal/community moments, and Pretendard typography — packaged as design tokens,
reusable React primitives, foundation specimen cards, and an interactive app UI kit.

> **Source material:** 8 in-app screenshots of the MyRealTrip Android app
> (`uploads/Screenshot_20260607_*.jpg`) — Home, 맛집여행 collection landing, tour list,
> My Trip (내 여행), and a kids product-detail flow. No codebase or Figma was provided,
> so visuals were reconstructed from screenshots + product knowledge. **Flag:** if you
> have the real codebase/Figma or official brand assets, share them to tighten fidelity.

---

## What is MyRealTrip?

MyRealTrip (마이리얼트립) is a leading Korean online travel agency (OTA) — a "super-app"
for trip planning and booking. Core services surfaced in the app:

- **항공** — Flights
- **투어·티켓** — Tours & activity tickets (the original hero product)
- **국내숙소 / 해외숙소** — Domestic & overseas lodging
- **글로벌렌터카** — Global rental cars
- Plus merchandised collections: 제주도 특가, 일본미식, eSIM, 한인민박, 여행자보험, 맛집여행, kids/edu…

The audience is Korean leisure travelers. The app blends **commerce** (deal flags,
prices, instant-confirm) with **discovery** (themed collections, reviews, community).

---

## Content fundamentals — how MyRealTrip writes

- **Language:** Korean throughout. Polite, friendly **해요체** endings — warm but not stiff.
  Headlines often end in an inviting verb: "…호핑투어로 **떠나요**", "아이와 함께 **떠나요!**",
  "이 예산이면 갈 수 있어요!", "아직 예정된 여행이 없으시네요!".
- **Voice:** speaks *with* the traveler, like a savvy friend. Confident, a little playful.
  Hero copy makes a bold promise: "까다로운 한국인 입맛이 먼저 검증한 전세계 맛집".
- **Person:** addresses **you (여행자)** implicitly; brand refers to itself as **마이리얼트립**.
  Social proof leans on the community: "마이리얼트립 여행자들이 직접 다녀오고 남긴 리뷰."
- **Numbers are persuasion.** Concrete counts build trust and urgency — "296개 도시", "2,748개 리뷰",
  star scores "4.9 (361)", and bold prices "95,000원". Prices use thousands separators + 원,
  often with a "~" suffix ("35,000원~").
- **Casing/punctuation:** Korean has no case. Latin tokens keep brand casing ("eSIM", "myrealtrip",
  "English Camp"). Exclamation marks add energy on merch banners ("특가 진행중!", "여름방학 오픈!").
  Bracketed tags prefix product titles: "[서귀포]", "[안덕]", "[키즈]".
- **Emoji:** used as *product iconography* (category tiles are 3D-style emoji) and sparingly in
  promo cards (🏆), **not** scattered through body copy. Flags (🇳🇱🇺🇸🇯🇵) mark destinations.
- **Vibe:** trustworthy marketplace energy — deal-forward but clean. Verified, real, by-travelers-for-travelers.

---

## Visual foundations

**Canvas & color.** Pure white (`--mrt-white`) pages with light gray (`--mrt-gray-50`) section
breaks and tile fills. The system is **near-monochrome + one hot accent at a time**:
- **Ink black** (`--mrt-ink #1A1B1E`) — primary text *and* the default CTA fill (검색, 옵션 선택).
- **Azure blue** (`--mrt-blue #1A8CFF`) — links, selected states, prices in budget cards,
  the "변경할 수 있어요" coach bubble, the brand wordmark (deep `#0250CB`).
- **Deal purple** (`--mrt-purple #6B4EFF` → `--mrt-purple-2 #5B30E8`) — the signature **할인** FAB
  blob in the bottom nav (radial gradient) and 즉시확정 badges.
- **Coral red** (`--mrt-red #FF4F4F`) — deal flags (최저가보장제, 특가 진행중), notification dots.
- **Success green** (`#18A957`) — 포함 checkmarks, NEW. **Gold** (`#FFB400`) — review stars.

**Typography.** Pretendard (open-source Korean sans — *substitution flagged*, see Fonts).
Headlines are **ExtraBold (800) with tight tracking** (`-0.03em`) and snug line-height — they
feel dense and confident. Body is Regular/Medium; meta is `--mrt-gray-500`. Prices are
heavy numerals. No serifs, no decorative faces.

**Shape & depth.** Soft, friendly geometry: thumbnails `12px`, cards/tiles `16px`, banners `20px`,
controls fully **pill** (`999px`), category avatars circular. Elevation is **ambient and low-contrast**
(`--shadow-sm/md`) — cards lift off white with a soft gray blur rather than hard borders.
The blue CTA and purple FAB get colored **glow** shadows. Dividers are hairline `--mrt-gray-100`,
or 8px gray "slab" gaps between home sections.

**Imagery.** Bright, real travel photography (beaches, food, kids in forests), filled into rounded
squares and circles. Warm and saturated; never b&w or heavily filtered. Promo banners are
full-bleed photo or vivid duotone gradients with white ExtraBold overlay text + a "n/total" pager pill.

**Motion & states.** Restrained. Press = subtle **scale-down** (`--press-scale 0.96`) on buttons/chips,
fast `120ms` ease. Overlays (detail, collection) slide in `~260ms` with `ease-out`. No bounces,
no infinite loops. Hover (web) darkens/raises subtly. Selected chips/tabs invert to ink-black fill.

**Layout rules.** Single 390-ish px phone column. Sticky **TopBar** (back + centered title + trailing
icons) and a **fixed bottom tab bar** with the centered purple deal FAB lifting above it. Product
detail uses a **sticky bottom CTA dock** (price left, black "옵션 선택" right). Generous 16px side
gutters; horizontal scrollers for category rails and galleries.

---

## Desktop / PC web

The system is **mobile-first**, but `tokens/web.css` + `components/web/` add the desktop layer
matching myrealtrip.com. Same brand DNA (white canvas, ink CTAs, azure accent, deal purple,
ExtraBold tight headlines) at web scale and density.

**Web layout.** Full-bleed **white page** with a **centered content column** (`--web-content-w` 1200px,
`--web-gutter` 24px). A three-row **sticky GNB**: (1) wordmark + gray search pill + 파트너 로그인 +
the brighter-blue **로그인 및 회원가입** button (`--web-cta-blue #1F8CFF`); (2) an emoji **category row**
(할인·항공·국내/해외 숙소·해외여행보험[AD]·패키지·한인민박·투어·티켓·글로벌렌터카·더보기▾); (3) a **sub-tab row**
(홈·뷰티·웰니스·패키지초특가·렌터카특가) with an ink underline on the active tab.

**Web sections** (see `ui_kits/web/`): a full-width **hero ad** banner with a "광고" tag; a **로마 ▾**
heading with filter chips over a numbered **2-column ranked list**; the **오늘 추천 상품** 4-up
**WebProductCard** grid; a wide **package banner** with an "n/7" pager; the **LA 손흥민** dark-green
promo hero + a **coupon strip / CouponCard**; a **RegionCircle** rail (전체·국내·유럽… with a purple
ring on the selected); and a wrapping **country chip** row.

**Web components** (`components/web/`, on the same namespace):
| Component | Role |
|---|---|
| **GnbHeader** | Full desktop global nav bar (logo · search · categories · sub-tabs). Sticky. |
| **WebProductCard** | 4-up recommended-product grid card: rounded image, badge, bookmark, title, bold price, rating, 광고. Hover lifts/zooms. |
| **RegionCircle** | Circular photo destination category; purple ring + caret when selected. |
| **CouponCard** | Compact white coupon card with a circular purple download button. |

**Web states.** Desktop has real **hover** — cards lift (`--web-hover-lift`) with `--web-hover-shadow`,
images zoom subtly, titles underline; category items get a gray hover fill. Press still scale-downs.

> **Not yet built:** the **관리자(어드민)** surface (data tables, sidebar, forms, charts, modals) and
> web product-detail / checkout. Ask and I'll add a `components/web/` admin set + `ui_kits/admin/`.

---

## Iconography

- **Chrome / UI glyphs** — thin **outline** icons, ~`1.9–2.1px` stroke, rounded caps & joins
  (back chevron, search, heart, bell, share/send, bookmark, home, suitcase, people, clock, pin).
  These are hand-built inline SVGs in the components and the UI kit (`Shared.jsx`). They match the
  **Lucide** family closely — if you need more glyphs, pull from Lucide (CDN) to stay consistent;
  this substitution is flagged.
- **Category icons** — the app uses **3D-style colorful emoji-like icons** (✈️🗽🏠🏨🚗🍣🏝️).
  We reproduce these with **system emoji** on a light rounded-square (`--r-lg`) or circle fill —
  the closest no-asset match. Swap in official PNG/Lottie category art if available.
- **Bottom-nav center** — the **할인** tab is not an icon but a purple gradient **blob** with a white
  `%` glyph, rendered in `BottomNav`.
- **Flags** — destination emoji flags (🇳🇱🇺🇸🇯🇵) in budget/trip cards.
- No icon font is shipped. No unicode dingbats used as UI controls (chevrons in copy use `›`).

**Assets in `assets/`:** `logo-wordmark.svg` (myrealtrip wordmark, `#0250CB`), `logo-symbol.svg`
(rounded-square app mark). Both are lightweight **recreations** — replace with official logo files.

---

## Fonts — substitution notice

The app's Korean type is reproduced with **Pretendard** (orioncactus, OFL), loaded from CDN in
`tokens/fonts.css` at weights 400/500/600/700/800. Pretendard is the de-facto Korean product sans
and a very close match, but **this is a substitution** — if MyRealTrip uses a licensed/custom face,
upload the real font files and we'll swap the `@font-face` srcs. (`--font-mono` falls back to the
system mono stack; the brand doesn't use a custom mono.)

---

## How the system is organized

```
styles.css                 ← consumers link THIS (only @import lines)
tokens/
  fonts.css                ← Pretendard @font-face (CDN)
  colors.css               ← brand, ink ramp, soft tints, semantic aliases
  typography.css           ← font stacks, scale, weights, tracking
  spacing.css              ← spacing, radius, shadow, layout, motion
components/
  core/        Button · Badge · Chip · Rating · Input · SectionHeader  (+ core.card.html)
  navigation/  TopBar · BottomNav                                      (+ navigation.card.html)
  product/     CategoryTile · ProductCard                             (+ product.card.html)
  web/         GnbHeader · WebProductCard · RegionCircle · CouponCard  (+ web.card.html)
guidelines/    foundation specimen cards (Colors / Type / Spacing / Brand)
ui_kits/
  app/         interactive MyRealTrip app — Home · Collection · ProductDetail · MyTrip
  web/         desktop homepage recreation — GNB · hero · ranked · grid · promo
assets/        logo-wordmark.svg · logo-symbol.svg
SKILL.md       portable skill manifest (for Claude Code / Agent Skills)
```

### Components (`window.MyRealTripDesignSystem_349059`)
Each has a `.jsx`, a `.d.ts` props contract, a `.prompt.md` usage note, and lives under a directory
with a `@dsCard` HTML demo.

| Component | Role |
|---|---|
| **Button** | Pill/rounded CTA. Tones: `primary` (ink), `brand` (blue), `secondary` (outline), `ghost`. Sizes sm–xl. |
| **Badge** | Merchandising flags: `guarantee` 최저가보장제, `instant` 즉시확정, `sale` 특가, `best`, `new`, `neutral`. soft/solid. |
| **Chip** | Pill filter/selector with optional count (인기 도시). Selected = ink fill. |
| **Rating** | Gold star + score + (count). sm/md. |
| **Input** | Rounded search/text field. `search` (pill) · `box`. |
| **SectionHeader** | Bold title + optional subtitle + "전체보기 ›" action. |
| **TopBar** | Back + centered title + trailing icon actions. |
| **BottomNav** | 5-tab bar with the purple 할인 gradient FAB. |
| **CategoryTile** | Emoji-on-fill entry point. `tile` (service grid) · `circle` (themed). Optional deal badge. |
| **ProductCard** | Tour/product card. `row` (list) · `tile` (scroller). Image, title, rating, badges, price. |

### UI kit — `ui_kits/app/index.html`
An interactive recreation of the app: **Home** (해외/국내 toggle, service grid, quick-link rails,
banner, themed tours, kids grid), tap any tour → **ProductDetail** (gallery, meta, 포함/불포함,
sticky CTA), service tiles → **Collection** (맛집여행-style hero, search, city chips, review list),
and the **My Trip** tab (empty state + budget recommendation cards). Bottom nav switches tabs.

---

## Using this system

- **Link tokens:** `<link rel="stylesheet" href="styles.css">` then style with the CSS custom
  properties (`var(--mrt-blue)`, `var(--r-lg)`, `var(--fs-h2)` …). Prefer semantic aliases
  (`--text-secondary`, `--surface-canvas`, `--border-default`) where they fit.
- **Mount components:** load `_ds_bundle.js`, then `const { Button, ProductCard } = window.MyRealTripDesignSystem_349059`.
- **Stay on-brand:** white canvas, one hot accent per surface, ink-black primary CTA, pill controls,
  soft ambient shadows, ExtraBold tight headlines, persuasive numbers, real warm photography.
- **Avoid:** purple-blue hero gradients as default backgrounds, hard 1px borders everywhere,
  emoji in body copy, thin/light headlines, inventing new accent hues.

---

## Caveats
- Reconstructed from **screenshots only** — spacing/scale are faithful approximations, not pixel-exact
  measurements from source.
- **Pretendard** and **logo SVGs** are flagged substitutions/recreations.
- Category art uses **emoji** as a stand-in for the app's custom 3D icon set.

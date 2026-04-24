---
name: Beast Creative Agency
description: Bold CPG marketing portfolio — documented results, electric presence, zero fluff.
colors:
  obsidian-stage: "#0A0A0A"
  ink-black: "#111111"
  carbon: "#1A1A1A"
  dark-elevated: "#262626"
  graphite-line: "#2E2E2E"
  electric-magenta: "#FF1198"
  magenta-deep: "#CC0077"
  magenta-light: "#FF4DB8"
  voltage-yellow: "#FFFF00"
  signal-green: "#00F763"
  case-study-white: "#FAFAFA"
  ash: "#C8C8C8"
  smoke: "#717171"
typography:
  display:
    fontFamily: "var(--font-display), \"Arial Narrow\", Arial, sans-serif"
    fontSize: "clamp(3rem, 6vw + 1rem, 5rem)"
    fontWeight: 900
    lineHeight: 1.0
    letterSpacing: "0.03em"
  headline:
    fontFamily: "var(--font-display), \"Arial Narrow\", Arial, sans-serif"
    fontSize: "clamp(2.25rem, 5vw + 0.5rem, 4rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "0.02em"
  title:
    fontFamily: "var(--font-display), \"Arial Narrow\", Arial, sans-serif"
    fontSize: "clamp(1.75rem, 3vw + 0.5rem, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.01em"
  body:
    fontFamily: "var(--font-body), Arial, sans-serif"
    fontSize: "clamp(1rem, 1.5vw + 0.25rem, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "var(--font-body), Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    letterSpacing: "0.12em"
rounded:
  input: "8px"
  card: "16px"
  pill: "45px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  2xl: "80px"
components:
  button-primary:
    backgroundColor: "{colors.electric-magenta}"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    padding: "1em 2.4em"
  button-primary-hover:
    backgroundColor: "{colors.voltage-yellow}"
    textColor: "#000000"
  button-light:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.obsidian-stage}"
    rounded: "{rounded.pill}"
    padding: "1em 2.4em"
  button-light-hover:
    backgroundColor: "{colors.electric-magenta}"
    textColor: "#FFFFFF"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    padding: "1em 2.4em"
  button-ghost-hover:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.obsidian-stage}"
  chip-filter:
    backgroundColor: "transparent"
    textColor: "{colors.ash}"
    rounded: "{rounded.full}"
    padding: "6px 16px"
  chip-filter-active:
    backgroundColor: "{colors.electric-magenta}"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: "6px 16px"
---

# Design System: Beast Creative Agency

## 1. Overview

**Creative North Star: "The Black Ledger"**

Beast Creative Agency's visual system is a documented record of performance, not a style exercise. The Obsidian Stage — a near-true black (#0A0A0A) canvas — exists to give Electric Magenta and Voltage Yellow the contrast they need to hit like data points, not decoration. Every color choice, every shadow, every uppercase headline is calibrated to signal one thing: this agency delivers, and the numbers prove it.

The system refuses softness. There are no gradients on text, no glass cards, no ambient blurs, no pastel accents. Dark surfaces carry structure through tonal steps (Obsidian Stage to Carbon to Ink Black), light sections are neutral near-white (Case Study White #FAFAFA), and the two electric accents — Magenta and Voltage Yellow — do all the emotive work. Motion is present but purposeful: components rise on hover with a translateY(-5px) lift, scroll reveals fade in from below with 0.3s ease-out, and the Coinline hero is a fully choreographed 3D scroll tunnel.

This is a brand-register site. Its job is to convert skeptical CPG buyers who are vetting agencies for national campaigns. The design has to demonstrate what it claims — if it looks like any other agency site, it fails before the first case study loads.

**Key Characteristics:**
- Obsidian-first: black is the canvas, not the accent
- Electric accents are earned, not sprinkled — Magenta appears on ≤15% of any screen
- All display type is uppercase — authority is baked into the letterform
- Buttons transform on hover via color-swap: Magenta to Yellow (color as performance feedback)
- Cards lift vertically on hover (translateY); never scale or blur
- Real numbers appear early and visually prominent — stat counters, bold data in yellow
- Light sections (FAFAFA, F4F4F4) exist to breathe between dark sequences, never as defaults

## 2. Colors: The Ledger Palette

A four-role palette built for maximum contrast on dark surfaces. Two electric accents, one neutral spectrum, one success state reserved for the logo and data only.

### Primary
- **Obsidian Stage** (#0A0A0A): The primary canvas for all dark sections, the hero, the nav, the footer, and CTA blocks. Beast's default surface — not dark gray, not near-black, as close to true black as renders with depth.
- **Electric Magenta** (#FF1198): The primary accent. Used on CTAs, active nav states, hover reveals, data callouts, icon highlights, and focus rings. Frequency is deliberately controlled — its rarity is the point.

### Secondary
- **Voltage Yellow** (#FFFF00): Statistics, hero stat numbers, button hover states, and yellow stats bars on work pages. Never used as body text color. Always paired against dark surfaces or black text — never adjacent to Electric Magenta as large fills.

### Tertiary
- **Signal Green** (#00F763): Logo mark, success states, and green-positive data points only. Not a general-purpose accent. Appears sparingly.

### Neutral
- **Ink Black** (#111111): Secondary dark surface for `near-black` sections.
- **Carbon** (#1A1A1A): Elevated dark cards, sidebar blocks, and dark content panels.
- **Dark Elevated** (#262626): Hover and active state for dark card surfaces.
- **Graphite Line** (#2E2E2E): All dark-surface borders, dividers, and card outlines. Also used for form input borders at rest.
- **Case Study White** (#FAFAFA): Primary light section background — work page content zones, service pages, blog. Not pure white.
- **Ash** (#C8C8C8): Secondary text on dark surfaces — body copy in dark sections, nav links at rest.
- **Smoke** (#717171): Muted and tertiary text — form hints, metadata, captions.

### Named Rules
**The One Stage Rule.** The Obsidian Stage is the default. Every page opens dark. Light sections are deliberate breaks — never the opening surface.

**The Yellow Discipline Rule.** Voltage Yellow is a data color, not a brand flourish. It appears in stat bars, stat counters, and button hover states. It never colors body text, decorative elements, or headings outside of statistics.

**The No-Split Rule.** Electric Magenta and Voltage Yellow never appear adjacent as large fills. They may share a hover state (Magenta to Yellow on a button) but not a layout grid side-by-side.

## 3. Typography

**Display Font:** `var(--font-display)` — condensed grotesque, "Arial Narrow" fallback
**Body Font:** `var(--font-body)` — clean sans, Arial fallback

**Character:** A condensed grotesque display stack paired with a clean sans body. The display font carries the visual compression of editorial magazine headers — authority without serif stiffness. All display text is forced uppercase via `text-transform: uppercase`, reinforcing the ledger quality: statements, not conversations.

### Hierarchy
- **Display** (weight 900, clamp(3rem, 6vw + 1rem, 5rem), line-height 1.0, tracking 0.03em, uppercase): Hero headlines on dark sections. The primary instrument for making a first impression.
- **Headline** (weight 800, clamp(2.25rem, 5vw + 0.5rem, 4rem), line-height 1.05, tracking 0.02em, uppercase): Section openers, case study titles, work page h1s.
- **Title** (weight 700, clamp(1.75rem, 3vw + 0.5rem, 2.5rem), line-height 1.1, tracking 0.01em, uppercase): Subsection headers, card headings, sidebar titles.
- **Stat Jumbo** (weight 900, clamp(4rem, 12vw, 7.5rem), line-height 0.95, tracking 0.01em): Reserved for numbers only — used in yellow stats bars and hero data moments. Not part of the standard heading hierarchy.
- **Body Lead** (weight 400, clamp(1rem, 1.5vw + 0.25rem, 1.25rem), line-height 1.6): Hero paragraph copy and leading paragraphs in case studies. Max line length 65–75ch.
- **Body** (weight 400, 16px, line-height 1.6): Main content body copy throughout case studies and service pages.
- **Label** (weight 600, 11px, tracking 0.12em, uppercase): Section eyebrows, overlines, metadata labels, form field labels. CSS class: `.section-eyebrow`.

### Named Rules
**The Uppercase Mandate.** All display-level type (Display, Headline, Title) is uppercase. This is a system-level rule enforced via CSS `text-transform: uppercase` on `.text-display-*` classes. Never render a hero or section heading in sentence case or title case.

**The Stat Exception.** Stat Jumbo is the only display-level role that renders in Voltage Yellow (#FFFF00) on dark backgrounds. All other display-level type renders in white on dark, or Obsidian Stage on light.

## 4. Elevation

Beast uses a hybrid model: tonal layering on dark surfaces, and a single structural shadow on light-background image and video cards. No decorative ambient shadows.

Dark surfaces express depth through tonal steps: Obsidian Stage (#0A0A0A) is the floor. Carbon (#1A1A1A) is one step up — used for content cards and sidebars. Dark Elevated (#262626) is a hover or active surface for those cards. No drop shadows required on dark — the tonal shift reads as elevation without filter artifacts.

Light-surface image and video cards use one standard shadow: `box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.3)`. This shadow is applied only to cards containing images or video — never to gradient-only fallbacks. If a float animation wrapper needs the shadow, the shadow goes on an inner child `div` with `rounded-2xl overflow-hidden` — never `filter: drop-shadow()` on the animated outer element (causes GPU compositing flicker on Safari).

### Shadow Vocabulary
- **Card Shadow** (`box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.3)`): Standard image/video card wrapper on light sections. The only resting-state shadow in the system.
- **Hover Lift** (`box-shadow: 0 24px 48px rgba(0,0,0,0.55)` + `transform: translateY(-10px)`): Related case study cards on hover — deep, structural, paired with vertical lift.
- **Button Glow — Yellow** (`box-shadow: 0 15px 30px rgba(255,255,0,0.3)`): `.btn-primary` on hover, when fill transitions to Voltage Yellow.
- **Button Glow — Magenta** (`box-shadow: 0 15px 30px rgba(255,17,152,0.4)`): `.btn-light` on hover, when fill transitions to Electric Magenta.
- **Focus Ring** (`outline: 2px solid #FF1198; outline-offset: 2px`): Global keyboard focus indicator, applied via `:focus-visible`. Mouse clicks do not trigger this ring.

### Named Rules
**The Flat-by-Default Rule.** Dark surface components are flat at rest. Shadows and lifts appear only as hover responses. Resting dark components use tonal surface shifts — not drop shadows.

**The Inner Shadow Rule.** When an element carries a CSS animation (float, pulse, card-float keyframes), the shadow wrapper must be an inner child element, not the animated parent. `filter: drop-shadow()` on an animated wrapper causes GPU compositing issues and flicker on Safari and older WebKit.

## 5. Components

### Buttons
Fully rounded pills (45px border-radius) across all variants. The interaction model is a color-swap on hover — not an opacity fade. Buttons physically change color to signal commitment.

- **Shape:** Fully rounded pill (45px radius). Font: 12px, weight 600, letter-spacing 2.5px, uppercase.
- **Primary (dark bg):** Electric Magenta fill (#FF1198), white text. Hover: Voltage Yellow fill (#FFFF00), black text, translateY(-5px), yellow glow shadow.
- **Light (light bg):** White fill (#FFFFFF), Obsidian Stage text. Hover: Electric Magenta fill, white text, translateY(-5px), magenta glow shadow.
- **Ghost (dark bg):** Transparent fill, white text, 1.5px white/45% border. Hover: white fill, Obsidian Stage text, translateY(-5px).
- **Ghost Pink (text link):** No border, no fill. Electric Magenta text, 14px, weight 600. Hover: gap between text and arrow widens from 6px to 10px.
- **All variants:** `transition: all 0.3s ease`. Active: translateY(-1px). Disabled: opacity 0.6, cursor not-allowed, no transform.

### Chips / Filter Pills
Used on the Work page category filter bar.

- **Style:** Fully rounded (9999px), transparent fill, Ash text (#C8C8C8), 1px Graphite Line border at rest.
- **Active:** Electric Magenta fill (#FF1198), white text, Magenta border.
- **Hover:** Magenta border and text.
- **Padding:** 6px 16px. Font: 12px, weight 600, uppercase, tracking 2.5px.

### Cards / Containers

**Dark cards** (sidebar panels, stat cards, dark content sections):
- Background: Carbon (#1A1A1A). Border: 1px solid Graphite Line (#2E2E2E). Radius: 16px. Padding: 24px.
- Internal hierarchy: Electric Magenta label (`.section-eyebrow`) at top, Ash body text for labels, Voltage Yellow for stat values, gray-300 for secondary descriptors.

**Light cards** (case study work grid, service feature cards):
- Background: white or Case Study White (#FAFAFA). Radius: 16px. Card Shadow when image is present.

**Related Case Study cards** (`.rc-wrap` + `.rc-card` pattern):
- Outer wrapper: 1px padding, 16px radius, subtle white/6% resting background. On hover: translateY(-10px), deep lift shadow, mouse-tracked rotating Magenta gradient border via CSS custom property `--x/--y`.
- Inner card: Obsidian Stage background (#0A0A0A), 15px radius (one less than wrapper to inset correctly), overflow hidden.

### Inputs / Fields

**Dark inputs** (`.form-input`, used in contact form and newsletter):
- Background: rgba(255,255,255,0.05). Border: 1px solid Graphite Line (#2E2E2E). Radius: 8px. Padding: 12px 16px. Color: white, 14px.
- Focus: border-color switches to Electric Magenta (#FF1198), `box-shadow: 0 0 0 3px rgba(255,17,152,0.15)`.
- Placeholder: Smoke (#525252).

**Light inputs** (`.form-input-light`, for light-background form contexts):
- Background: white. Border: 1px solid #E0E0E0. Radius: 8px. Same focus treatment.

### Navigation
Floating pill nav, fixed position, dark background with backdrop blur.

- **Default:** Ash text (#C8C8C8), 14px, weight 500. Hover: Electric Magenta text.
- **Active page:** Electric Magenta background pill + Voltage Yellow text. The only context in the system where Magenta and Yellow appear together — small pill, not layout-level.
- **CTA button:** Primary button (Magenta fill, hover to Yellow).
- **Mobile:** Full-screen dark overlay. Animated hamburger — top and middle bars slide out laterally, bottom bar fades, "CLOSE" text animates in via `mobCloseAppear` keyframe. Escape key closes. Touch drag does not dismiss (keyboard-first dismiss model).

### Section Eyebrow
A recurring micro-pattern: uppercase label in Electric Magenta, 11px, weight 600, tracking 0.12em. Used as a `<p class="section-eyebrow">` above every major section heading. Not a heading element — a signpost.

### Signature: Related Case Study Cards
The `.rc-wrap` hover interaction is a signature moment: a 1px gradient border that rotates around the card via a conic-gradient centered on the mouse cursor's current position (`--x`, `--y` CSS variables updated by JS `mousemove`). The inner card lifts with a drop shadow. A glow appears at the top of the card. The title shifts 3px to the right and turns Magenta. A badge animates in from scale(0.8). The arrow button grows and gains a Magenta focus ring. All transitions use `cubic-bezier(0.16, 1, 0.3, 1)` — fast in, slow out.

## 6. Do's and Don'ts

### Do:
- **Do** keep the Obsidian Stage (#0A0A0A) as the default canvas. Every page opens dark. Light sections are deliberate breaks.
- **Do** use Electric Magenta (#FF1198) for interactive affordances exclusively: CTAs, hover states, focus rings, active nav, and data callouts. Reserve it — its rarity is the point.
- **Do** express statistics with large Stat Jumbo type in Voltage Yellow, animated via StatCounter on scroll. Real numbers, prominent placement, early in the page.
- **Do** apply the standard card shadow (`0px 5px 15px 0px rgba(0,0,0,0.3)`) to all image and video card wrappers on light sections. One shadow rule for the entire system.
- **Do** force all display-level headings uppercase via `text-transform: uppercase`. The Uppercase Mandate is non-negotiable.
- **Do** use the button hover color-swap: Magenta to Yellow on dark backgrounds, White to Magenta on light. The physical color change is a system rule.
- **Do** put shadow wrappers on inner child elements when the outer element has a CSS float or pulse animation. Never `filter: drop-shadow()` on an animated parent.
- **Do** add `prefers-reduced-motion` guards around GSAP animations. The globals.css already has a catch-all `@media (prefers-reduced-motion: reduce)` block — keep all new animations covered by it.
- **Do** use Ash (#C8C8C8) for secondary text on dark surfaces. Never pure white for secondary copy — the contrast hierarchy matters.

### Don't:
- **Don't** use gradient text (`background-clip: text` with a gradient background). Prohibited system-wide. `gradient-text-pink` was removed from globals.css for this reason — use solid Electric Magenta for emphasis.
- **Don't** use side-stripe borders (border-left or border-right greater than 1px as a colored accent on cards, callouts, or list items). Blockquotes use full-border tint: `border border-beast-pink/20 bg-beast-pink/5 rounded-xl` — never a left stripe.
- **Don't** use Voltage Yellow as body text, heading text, or decorative color. It is a data and hover-state color only.
- **Don't** use glassmorphism — blurred, frosted, or translucent cards used decoratively. One specific instance exists (nav backdrop-blur); it should not be extended.
- **Don't** build anything that looks like a generic agency template, a pastel soft-sell site, a WordPress layout with stock imagery, or a SaaS marketing page. These are the primary anti-references from PRODUCT.md and the hardest prohibition in the system.
- **Don't** use the hero-metric template (big number, small label, supporting stats, gradient accent in a card). Stats appear in dedicated yellow bars and as full-bleed text moments — never in SaaS-style metric cards.
- **Don't** add an em dash (—) in any copy, headings, or UI text. Use commas, colons, semicolons, or periods.
- **Don't** render a Unicode checkmark (✓) as text or a span. Use the inline SVG path `M5 13l4 4L19 7` with `strokeWidth={2.5}` and `aria-hidden="true"`.
- **Don't** add new top-level color accents without strong justification. The four-color palette (Magenta, Yellow, Green, Neutrals) is the complete system. Signal Green is logo and success only.
- **Don't** use cookie-cutter SaaS landing page patterns — identical card grids with icon + heading + text repeated endlessly, hero-metric dashboards, or floating blob shapes.

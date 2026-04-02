```markdown
# Design System Document

## 1. Overview & Creative North Star

### Creative North Star: "The Golden Alchemist"
This design system is anchored in the concept of **"The Golden Alchemist."** It moves away from the clinical, grid-locked structures of traditional e-commerce to embrace a high-end editorial experience. We are not just selling spices; we are archiving sensory experiences. 

The system utilizes **Organic Asymmetry**—where elements breathe through intentional white space and overlapping layers—to mirror the natural, unrefined beauty of pure spices. By blending the heritage of elegant serifs with a deep, atmospheric canvas, we create a digital environment that feels "crafted with purity" rather than manufactured.

---

## 2. Colors

The color strategy focuses on high-contrast luxury. We use a deep, obsidian base to allow the golden tones of the product to radiate.

*   **Primary (#eec127):** This is our "Liquid Gold." It should be used sparingly for high-impact moments, CTAs, and signature branding elements. 
*   **The "No-Line" Rule:** To maintain a premium, seamless feel, **do not use 1px solid borders for sectioning.** Boundaries must be defined through background color shifts. For example, a `surface_container_low` section should transition into a `surface` background to define a change in content without visual "noise."
*   **Surface Hierarchy & Nesting:** Use the surface tiers to create physical depth.
    *   Place a `surface_container` card inside a `surface_container_low` section to create a soft, nested lift. 
    *   Treat the UI as a series of stacked, fine papers.
*   **The "Glass & Gradient" Rule:** Use Glassmorphism for floating navigation and overlays. Apply `surface` colors at 70-80% opacity with a `24px` backdrop blur. 
*   **Signature Textures:** Use subtle linear gradients (e.g., `primary` to `primary_container`) on primary CTAs. This adds a "metallic" luster that reinforces the high-end nature of the brand.

---

## 3. Typography

The typography scale is designed to feel like a premium culinary magazine.

*   **Display & Headline (Noto Serif):** These are our "Voice" tokens. The elegant serifs convey heritage and the "crafted" nature of the brand. Use `display-lg` for hero statements with tight letter-spacing to create an authoritative, editorial look.
*   **Title & Body (Manrope):** These provide a modern, clean counterpoint. Manrope’s geometric clarity ensures that even complex ingredient lists remain legible.
*   **Label (Manrope):** Use for metadata and overlines. Always set labels in uppercase with increased letter-spacing (`0.05em`) to denote luxury categorization.

---

## 4. Elevation & Depth

We eschew traditional drop shadows in favor of **Tonal Layering.**

*   **The Layering Principle:** Depth is achieved by stacking `surface_container_lowest` through `highest`. A higher container represents an object closer to the user.
*   **Ambient Shadows:** If a floating element (like a product modal) requires a shadow, it must be ultra-diffused. 
    *   **Blur:** 40px–60px.
    *   **Opacity:** 4%–8%.
    *   **Color:** Use a tinted version of `on_surface` (a very dark gold/grey) rather than pure black to simulate natural light.
*   **The "Ghost Border" Fallback:** If a container requires a border for accessibility, use the `outline_variant` token at **15% opacity**. High-contrast, 100% opaque borders are strictly forbidden.
*   **Glassmorphism:** For interactive overlays, use semi-transparent `surface_container_high` colors with backdrop blurs. This allows the atmospheric spice photography to bleed through, softening the edges of the UI.

---

## 5. Components

### Buttons
*   **Primary:** Background `primary_container`, text `on_primary_container`. Use `xl` (0.75rem) roundedness. Apply a subtle "gold-dust" inner glow.
*   **Secondary:** Ghost style. Use a `Ghost Border` (outline-variant at 20%) with `primary` text.
*   **Interaction:** On hover, primary buttons should subtly scale (1.02x) rather than just changing color.

### Chips
*   **Filter Chips:** Use `surface_container_high` with `md` roundedness. For active states, transition to `secondary_container` with `on_secondary_container` text to pull in the rich brand greens.

### Cards & Lists
*   **The Divider Ban:** Never use horizontal lines to separate items. Use the **Spacing Scale** (specifically `8` or `10` units) to create "invisible" dividers via white space.
*   **Product Cards:** Use `surface_container_low` for the card body. Images should slightly bleed over the edges of the container to break the "boxed" feel.

### Input Fields
*   **Text Inputs:** Use a "Minimalist Undersline" approach or a very subtle `surface_container_highest` fill. Labels should use `label-md` and sit above the field.
*   **Error States:** Use the `error` token (#ffb4ab) only for the text and a subtle glow; do not wrap the entire box in a heavy red border.

### Tooltips
*   Use `surface_bright` with `on_surface` text. Keep them small and elegant using `label-sm` typography.

---

## 6. Do's and Don'ts

### Do
*   **DO** use the `20` and `24` spacing units to create dramatic, editorial "breathing room" between sections.
*   **DO** overlap typography on top of photography (using `on_background` or `on_surface_variant` for contrast) to create a layered, "crafted" feel.
*   **DO** utilize `secondary_fixed` (the muted green) for elements related to "Organic" or "Purity" claims.

### Don't
*   **DON'T** use the `DEFAULT` roundedness for large containers; reserve `xl` for a more modern, premium aesthetic.
*   **DON'T** use 100% black backgrounds. Stick to the `surface` token (#121315) to allow for subtle depth and tonal shifting.
*   **DON'T** center-align long blocks of body text. Maintain left-aligned, editorial columns to keep the "magazine" feel.
*   **DON'T** use "hard" animations. All transitions must use long durations (400ms-600ms) with `cubic-bezier(0.2, 0, 0, 1)` for a heavy, luxurious movement.

---
*End of Design System Document*```
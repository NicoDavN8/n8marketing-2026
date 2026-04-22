# Partner Marquee Heading Implementation — Design Spec

**Date**: 2026-04-22  
**Scope**: Add "Ultime collaborazioni" heading above the dynamic partner logos marquee section

---

## Overview

Add a minimalist heading ("Ultime collaborazioni") above the existing partner logos marquee section on the homepage. The heading introduces the dynamic partner section in a sobrio, cohesive manner.

---

## Current State

- **Partner Marquee Location**: `index.html` line 680
- **Dynamic Loading**: Logos loaded from `/assets/loghi/manifest.json`
- **CSS Styling**: Already compliant with requirements (grayscale, opacity 0.5, height 40px, 18s animation)
- **Logos Path**: `/assets/loghi/` (7 partners available in manifest)

---

## Implementation

### HTML Structure

Insert heading **directly above** the `<section id="partner-marquee">` block:

```html
<section id="partner-marquee" class="bg-white border-t border-gray-100 py-4 overflow-hidden">
  <!-- NEW: Heading -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
    <h4 class="text-center text-gray-700 font-semibold text-sm tracking-wide">
      Ultime collaborazioni
    </h4>
  </div>

  <!-- Existing marquee content -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="overflow-hidden">
      <div id="partners-scroll-container" class="partners-scroll"></div>
    </div>
  </div>
</section>
```

### Styling

- **Color**: `text-gray-700` — dark gray, sobrio and integrated
- **Weight**: `font-semibold` — balanced, not heavy
- **Size**: `text-sm` — contained, matches intro text scale
- **Spacing**: `tracking-wide` for readability, `mb-6` for separation from marquee
- **Alignment**: `text-center` — centered above logos

### No CSS Changes

Existing `.partners-scroll` and `.partner-logo` styles remain unchanged. The heading uses only Tailwind utilities already in the project.

---

## Verification Checklist

- [ ] Title is rendered correctly in browser (centered, gray, semibold)
- [ ] Logos appear as images (not alt text) from `/assets/loghi/` paths
- [ ] Marquee animation is smooth and unaffected
- [ ] Spacing between heading and logos is visually balanced
- [ ] Mobile responsiveness is maintained

---

## Deliverables

1. Update `index.html`: add heading above `#partner-marquee` section
2. Commit changes with message: "Feat: Add 'Ultime collaborazioni' heading to partner marquee section"
3. Verify on live environment (all logos load correctly from new paths)


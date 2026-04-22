# Partner Marquee Heading Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a minimalist "Ultime collaborazioni" heading above the partner logos marquee section on the homepage.

**Architecture:** Single-file modification. Insert a centered, gray heading (`<h4>`) directly above the existing `#partner-marquee` section in index.html. No CSS changes required — uses Tailwind utilities already present in the project.

**Tech Stack:** HTML, Tailwind CSS (existing)

---

## File Structure

- **Modify**: `index.html:680-686` — Insert heading div above marquee section

---

## Task 1: Add "Ultime collaborazioni" Heading to Partner Marquee

**Files:**
- Modify: `index.html:680-686`

---

### Step 1: Locate the partner marquee section

Open `/Users/nicolodavidebalzani/Desktop/n8marketing-2026/index.html` and find the line that starts with `<section id="partner-marquee"` (currently line 680).

---

### Step 2: Insert the heading HTML

Replace lines 680-686:

**OLD:**
```html
    <!-- Partner Marquee Section (Dynamic) -->
    <section id="partner-marquee" class="bg-white border-t border-gray-100 py-4 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
                <div id="partners-scroll-container" class="partners-scroll"></div>
            </div>
        </div>
    </section>
```

**NEW:**
```html
    <!-- Partner Marquee Section (Dynamic) -->
    <section id="partner-marquee" class="bg-white border-t border-gray-100 py-8 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
            <h4 class="text-center text-gray-700 font-semibold text-sm tracking-wide">
                Ultime collaborazioni
            </h4>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
                <div id="partners-scroll-container" class="partners-scroll"></div>
            </div>
        </div>
    </section>
```

**Changes:**
- Added `py-8` to section (changed from `py-4`) for better breathing room with heading
- Inserted new `<div>` with heading above the marquee container
- Heading uses Tailwind: `text-center` (centered), `text-gray-700` (dark gray), `font-semibold` (balanced weight), `text-sm` (small size), `tracking-wide` (letter spacing for readability)
- `mb-6` on heading container creates separation from marquee logos

---

### Step 3: Verify in browser

Open the site in a browser and navigate to the homepage. Verify:
- ✓ "Ultime collaborazioni" heading appears centered above the logos
- ✓ Heading is dark gray and sobrio
- ✓ Logos load correctly as images (not alt text) from `/assets/loghi/` paths
- ✓ Marquee animation is smooth and unaffected
- ✓ Mobile responsiveness is maintained (heading centered on mobile too)

---

### Step 4: Commit

```bash
cd /Users/nicolodavidebalzani/Desktop/n8marketing-2026
git add index.html
git commit -m "feat: add 'Ultime collaborazioni' heading to partner marquee section"
```

Expected: Commit succeeds with 1 file changed.

---

### Step 5: Push to remote

```bash
git push origin main
```

Expected: Changes pushed to GitHub successfully.

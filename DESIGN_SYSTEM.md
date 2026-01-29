# JAYAA IT Solution - Design System Documentation

## Overview
This document outlines the design system implemented for the homepage (Option B - Visual Interest) to ensure consistency across all pages.

---

## Color Palette

### Primary Brand Colors
| Name | Hex | Usage |
|------|-----|-------|
| Primary Red | `#9A1B21` | Headlines, CTAs, icons, accents |
| Primary Red Hover | `#7A1519` | Button hover states |
| Secondary Red | `#B83236` | Gradient endpoints, highlights |

### Background Colors
| Name | Hex | Usage |
|------|-----|-------|
| Page Background | `#FAFAFA` | Main page background |
| Card Background | `#FFFFFF` | Cards, elevated surfaces |
| Light Accent | `#9A1B21`/10 | Icon backgrounds (10% opacity) |
| Border Light | `#E8E8E8` | Card borders |

### Soft Gradient Orbs (Background Elements)
Use these for subtle background visual interest:
- **Warm**: `bg-gradient-to-r from-[#F5E6D3]/50 via-[#E8D5C4]/20 to-transparent` - Top-left/left
- **Lavender**: `bg-gradient-to-l from-[#E8E0F0]/50 via-[#E5DDF0]/20 to-transparent` - Right/bottom-right
- **Blue**: `bg-gradient-to-tl from-[#E0E8F5]/50 via-[#D5E0F0]/20 to-transparent` - Right/bottom
- **Brand Accent**: `bg-[#9A1B21]/5` - Subtle brand presence

### Text Colors
| Name | Hex | Usage |
|------|-----|-------|
| Text Primary | `#1A1A1A` | Headlines, important text |
| Text Secondary | `#4A4A4A` | Body text |
| Text Tertiary | `#6A6A6A` | Descriptions, captions |
| Text Muted | `#8A8A8A` | Labels, timestamps |

---

## Typography

### Headlines
- **H1**: `text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight`
  - Gradient: `bg-gradient-to-r from-[#9A1B21] via-[#B83236] to-[#9A1B21] bg-clip-text text-transparent`
- **H2**: `text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]`
  - Gradient accent: `bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent` for highlights

### Labels & Badges
- Section labels: `inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#9A1B21]/10 to-[#9A1B21]/5 text-[#9A1B21] text-sm font-medium border border-[#9A1B21]/20`

### Body Text
- Regular: `text-base text-[#4A4A4A] leading-relaxed`
- Large: `text-lg text-[#6A6A6A] leading-relaxed`
- Small: `text-sm text-[#6A6A6A]`

---

## Components

### Buttons

**Primary Button (Gradient)**
```tsx
<Link
  href="/path"
  className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-[#9A1B21] to-[#B83236] text-white hover:from-[#7A1519] hover:to-[#9A1B21] shadow-lg hover:shadow-xl hover:shadow-[#9A1B21]/25 transition-all duration-300 text-base font-medium"
>
  Button Text
  <ArrowRight className="w-4 h-4" />
</Link>
```

**Secondary Button (Outline)**
```tsx
<Link
  href="/path"
  className="inline-flex items-center gap-2 h-12 px-8 rounded-full border-2 border-[#E8E8E8] text-[#1A1A1A] hover:border-[#9A1B21]/50 hover:bg-[#9A1B21]/5 transition-all duration-300 text-base font-medium"
>
  Button Text
</Link>
```

**Ghost Button (Dark Background)**
```tsx
<Link
  href="/path"
  className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-white text-[#1A1A1A] hover:bg-[#9A1B21] hover:text-white transition-all duration-300 font-medium shadow-lg"
>
  Button Text
  <ArrowRight className="w-5 h-5" />
</Link>
```

### Cards

**Standard Card**
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.1, duration: 0.5 }}
  whileHover={{ y: -4 }}
  className="group"
>
  <div className="p-8 rounded-3xl bg-white border border-[#E8E8E8] hover:border-[#9A1B21]/30 shadow-sm hover:shadow-xl hover:shadow-[#9A1B21]/5 transition-all duration-500 h-full">
    {/* Content */}
  </div>
</motion.div>
```

**Card with Icon Header**
```tsx
<div className="flex items-start gap-6">
  <div className="w-16 h-16 rounded-2xl bg-[#9A1B21]/10 border border-[#9A1B21]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#9A1B21] group-hover:border-[#9A1B21] transition-all duration-300">
    <Icon className="w-8 h-8 text-[#9A1B21] group-hover:text-white transition-colors duration-300" />
  </div>
  <div>
    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">Title</h3>
    <p className="text-[#6A6A6A] leading-relaxed">Description</p>
  </div>
</div>
```

### Section Headers

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="text-center max-w-3xl mx-auto mb-16"
>
  {/* Optional: Section Label Badge */}
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#9A1B21]/10 to-[#9A1B21]/5 text-[#9A1B21] text-sm font-medium mb-6 border border-[#9A1B21]/20">
    <Icon className="w-4 h-4" />
    <span>Section Label</span>
  </div>

  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
    Regular Text{" "}
    <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">
      Gradient Highlight
    </span>
  </h2>
  <p className="text-lg text-[#6A6A6A] leading-relaxed">
    Section description text
  </p>
</motion.div>
```

---

## Section Layout Patterns

### Section Container
```tsx
<section className="py-20 lg:py-32 bg-gradient-to-b from-[#FAFAFA] via-white to-[#FAFAFA] relative overflow-hidden">
  {/* Background Orbs */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-[#E0E8F5]/50 via-[#E5EDF8]/30 to-transparent rounded-full blur-[100px]" />
    <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-to-tl from-[#F5E6D3]/40 via-[#F0DDD0]/20 to-transparent rounded-full blur-[100px]" />
    <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-[#9A1B21]/5 rounded-full blur-[100px]" />
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section Content */}
  </div>
</section>
```

### Grid Layouts
- **3-column cards**: `grid md:grid-cols-3 gap-8 max-w-6xl mx-auto`
- **2-column cards**: `grid md:grid-cols-2 gap-6 lg:gap-8`
- **4-column grid**: `grid sm:grid-cols-2 lg:grid-cols-4 gap-6`

### Animation Pattern
Always use `motion.div` from Framer Motion with consistent props:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.1, duration: 0.5 }}
  whileHover={{ y: -4 }}
>
```

---

## Dark Section (CTA/Highlight)

For sections that need contrast (like Regulatory Compliance bottom):
```tsx
<div className="p-8 lg:p-12 rounded-3xl bg-[#1A1A1A] relative overflow-hidden">
  {/* Subtle pattern overlay */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
      backgroundSize: '40px 40px'
    }} />
  </div>

  <div className="relative z-10">
    {/* Dark section content with white text */}
    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">Title</h3>
    <p className="text-[#9A9A9A] max-w-2xl leading-relaxed">Description</p>
  </div>
</div>
```

---

## Files Modified for Homepage Consistency

1. `components/home/hero.tsx` - Subtle background shapes, gradient buttons
2. `components/home/logo-bar.tsx` - bg-[#FAFAFA] with subtle accent
3. `components/home/cybersecurity-solutions.tsx` - Soft blur orbs, consistent cards
4. `components/home/industries.tsx` - Soft blur orbs, icon containers
5. `components/home/regulatory-compliance.tsx` - Soft blur orbs, dark CTA section
6. `components/home/why-choose-us.tsx` - Soft blur orbs, highlight lists
7. `components/home/final-cta.tsx` - motion.div animations
8. `components/ui/number-ticker.tsx` - Fixed subscription cleanup

---

## Checklist for Applying to Other Pages

- [ ] Page background: `bg-gradient-to-b from-[#FAFAFA] via-white to-[#FAFAFA]`
- [ ] Background orbs: Add 2-3 soft radial gradient orbs with blur
- [ ] Section padding: `py-20 lg:py-32`
- [ ] Container: `container mx-auto px-4 sm:px-6 lg:px-8 relative z-10`
- [ ] Section headers: Label badge + H2 with gradient highlight
- [ ] Cards: `rounded-3xl`, border hover effect, `motion.div` wrapper
- [ ] Icons: Light background `bg-[#9A1B21]/10` with brand icon color
- [ ] Buttons: Gradient primary + outlined secondary pattern
- [ ] Animations: `motion.div` with consistent initial/whileInView props
- [ ] Text colors: Use text-[#1A1A1A], text-[#4A4A4A], text-[#6A6A6A] hierarchy

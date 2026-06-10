# Implementation Plan: Ana Alexandra Cordoș - Legal Landing Page

## Project Overview

A high-end, professional landing page for **Ana Alexandra Cordoș**, a legal expert based in Salaj, Romania. The site emphasizes **"Authoritative yet Accessible"** brand tone with a focus on preventive legal consultation and timely intervention.

**Primary Conversion Metric:** Calendly booking or calls  
**Language:** Romanian  
**SEO Keywords:** "avocat", "salaj", "litigii", "consultanta"

---

## Design Tokens & Visual System

### Color Palette (Trust Blue Theme)

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--background` | `#f8fafc` (slate-50) | `#0f172a` (slate-900) | Page background |
| `--foreground` | `#0f172a` (slate-900) | `#f8fafc` (slate-50) | Primary text |
| `--primary` | `#1e3a8a` (blue-900) | `#3b82f6` (blue-500) | Trust Blue - CTAs, icons |
| `--primary-foreground` | `#ffffff` | `#ffffff` | Text on primary |
| `--secondary` | `#334155` (slate-700) | `#475569` (slate-600) | Secondary elements |
| `--accent` | `#d4af37` (Gold) | `#fbbf24` (amber-400) | CTA accents, highlights |
| `--muted` | `#e2e8f0` (slate-200) | `#1e293b` (slate-800) | Muted backgrounds |
| `--card` | `#ffffff` | `#1e293b` (slate-800) | Card backgrounds |
| `--border` | `#cbd5e1` (slate-300) | `#334155` (slate-700) | Borders |

### Typography

| Element | Font Family | Weight | Size |
|---------|-------------|--------|------|
| Headings (H1-H3) | `Playfair Display` (Serif) | 600-700 | 2.5rem - 4rem |
| Body Text | `Inter` (Sans-serif) | 400-500 | 1rem - 1.125rem |
| Navigation | `Inter` | 500 | 0.875rem |
| CTA Buttons | `Inter` | 600 | 1rem |

### Spacing & Layout

- **Container max-width:** 1280px
- **Section padding:** `py-16 md:py-24`
- **Card border-radius:** `--radius: 0.75rem`
- **Asymmetric grid offsets:** 2-4rem for visual interest

---

## Site Architecture

### Navigation Structure

```
├── Logo (Left)
├── Navigation Links (Center/Right)
│   ├── Servicii (Services) - anchor link
│   ├── Scrisoare de la Ana (Letter from Ana) - anchor link
│   └── Contact - anchor link
└── CTA Button (Right): "Programează o Consultație" → Calendly Modal
```

### Page Sections (Top to Bottom)

1. **Sticky Header** - Transparent → Solid on scroll
2. **Hero Section** - Split layout with hook + architectural image
3. **Philosophy/Letter Section** - "Scrisoare de la Ana"
4. **Services Section** - Bento Grid (5 cards)
5. **Social Proof Section** - Stats counters + Testimonials
6. **Primary CTA Section** - Full-width deep blue
7. **FAQ Section** - Accordion with objection handling
8. **Contact Form Section** - General inquiries
9. **Final CTA Section** - "Ready to start?" massive CTA
10. **Footer** - Contact info, Privacy Policy, watermark background

---

## Component Breakdown

### 1. Header Component (`components/header.tsx`)
- Transparent background, becomes solid on scroll
- Logo + Navigation links + CTA button
- Sticky positioning
- Dark mode toggle (optional)
- Mobile hamburger menu

### 2. Hero Section (`components/hero-section.tsx`)
- Split layout (text left, image right)
- Main hook: *"Dreptatea se câștigă prin decizii luate la timp."*
- Two CTAs: Primary (Calendly) + Secondary ("Află mai multe")
- Architectural background image with subtle overlay
- Fade-in animations

### 3. Letter Section (`components/letter-section.tsx`)
- Centered elegant typography
- Full philosophy text from Ana
- Inline CTA: "Vrei să discuți cazul tău?"
- Serif font for sophisticated feel

### 4. Services Section (`components/services-section.tsx`)
- Header: "Expertiză Juridică Aplicată"
- Bento Grid layout (asymmetric)
- 5 service cards with Lucide icons:
  - `FileText` - Contracte
  - `Landmark` - Materie Fiscală și Administrativă (wide)
  - `Gavel` - Drept Penal
  - `ShieldAlert` - Consultanță Penală Preventivă (wide)
  - `Stethoscope` - Malpraxis Medical
- Hover effects: subtle lift (scale-[1.02])

### 5. Stats Section (`components/stats-section.tsx`)
- 3 counters in a row
- Trust Blue background or text
- Stats: 12+ Ani, 500+ Cazuri, 100% Implicare
- Animated count-up on scroll into view

### 6. Testimonials Section (`components/testimonials-section.tsx`)
- Masonry/Grid of 3 testimonial cards
- Large stylized quote marks (faded blue)
- Glassmorphism or clean white borders
- Placeholder testimonials (to be replaced)

### 7. CTA Section (`components/cta-section.tsx`)
- Full-width deep blue background
- Text: "Prevenția este cheia succesului juridic."
- Large prominent Calendly button
- Reusable for multiple placements

### 8. FAQ Section (`components/faq-section.tsx`)
- Shadcn Accordion component
- 5 questions addressing objections
- Light blue hover state
- High contrast text

### 9. Contact Form (`components/contact-form.tsx`)
- Fields: Name, Email, Phone, Message
- Form validation
- Submit action (can be connected to API later)
- Alternative to Calendly for general inquiries

### 10. Footer (`components/footer.tsx`)
- Large "Ready to start?" heading
- Prominent Calendly CTA
- Contact info (Email/Phone)
- Privacy Policy link
- Architectural watermark background

### 11. Calendly Modal (`components/calendly-modal.tsx`)
- Popup modal integration
- Triggered by all CTA buttons
- Uses react-calendly or iframe embed

---

## Technical Implementation

### Dependencies to Install

```bash
pnpm add react-calendly framer-motion @radix-ui/react-accordion
```

### File Structure

```
/app
  ├── layout.tsx (fonts, metadata, dark mode)
  ├── page.tsx (main landing page)
  └── globals.css (design tokens)
/components
  ├── header.tsx
  ├── hero-section.tsx
  ├── letter-section.tsx
  ├── services-section.tsx
  ├── stats-section.tsx
  ├── testimonials-section.tsx
  ├── cta-section.tsx
  ├── faq-section.tsx
  ├── contact-form.tsx
  ├── footer.tsx
  ├── calendly-modal.tsx
  └── ui/ (existing shadcn components)
/public
  └── images/
      └── (generated architectural images)
```

### SEO Implementation

```tsx
// layout.tsx metadata
export const metadata = {
  title: "Avocat Salaj | Ana Alexandra Cordoș - Consultanță și Litigii",
  description: "Avocat în Salaj cu peste 12 ani experiență. Consultanță juridică, litigii, drept penal, contracte. Programează o consultație.",
  keywords: "avocat, salaj, litigii, consultanta, drept penal, contracte",
  openGraph: { ... },
}
```

### Animation Strategy

- **Fade-in on scroll:** Using Framer Motion's `whileInView`
- **Stagger children:** For service cards and testimonials
- **Smooth scroll:** Native CSS `scroll-behavior: smooth`
- **No flashy animations:** Professional, subtle transitions only

### Dark Mode Implementation

- CSS variables in `globals.css` with `.dark` class variants
- `next-themes` for theme switching (optional toggle)
- All components use semantic tokens (`bg-background`, `text-foreground`)

---

## CTA Placement Strategy (Minimum 3)

| Location | CTA Type | Text |
|----------|----------|------|
| Header (sticky) | Button | "Programează o Consultație" |
| Hero Section | Primary Button | "Programează o Consultație" |
| Hero Section | Secondary Link | "Află mai multe" |
| After Letter Section | Text Link | "Vrei să discuți cazul tău?" |
| Primary CTA Section | Large Button | "Rezervă o ședință prin Calendly" |
| After FAQ | Button | "Începe acum" |
| Footer | Large Button | "Programează o Consultație" |

---

## Implementation Phases

### Phase 1: Foundation
- [ ] Set up design tokens in `globals.css`
- [ ] Configure fonts (Playfair Display + Inter)
- [ ] Update `layout.tsx` with SEO metadata
- [ ] Create base page structure

### Phase 2: Core Components
- [ ] Header with navigation and sticky behavior
- [ ] Hero section with split layout
- [ ] Letter/Philosophy section
- [ ] Services bento grid

### Phase 3: Social Proof
- [ ] Stats counters with animations
- [ ] Testimonials grid
- [ ] Primary CTA section

### Phase 4: Conversion Elements
- [ ] FAQ accordion
- [ ] Contact form
- [ ] Calendly modal integration
- [ ] Footer with final CTA

### Phase 5: Polish
- [ ] Generate architectural images
- [ ] Fade-in animations
- [ ] Dark mode compatibility
- [ ] Mobile responsiveness testing
- [ ] SEO final review

---

## Image Requirements

### Architectural/Legal Imagery Style
- Abstract colonnades, clean lines, structural geometry
- Symbolizes "Structure and Law"
- Used as:
  - Hero section right side
  - Subtle backgrounds with highlighted details
  - Footer watermark (faded)

### Image Generation Prompts
1. **Hero Image:** "Abstract architectural columns in deep navy blue, minimalist legal symbolism, clean geometric lines, professional, high-end photography style"
2. **Background Pattern:** "Subtle architectural blueprint pattern, faded navy lines on light background, structural geometry, elegant and minimal"

---

## Approval Checklist

Before proceeding with implementation, please confirm:

- [ ] Color palette approved (Trust Blue + Gold accents)
- [ ] Typography choices approved (Playfair Display + Inter)
- [ ] Section order and content approved
- [ ] CTA placement strategy approved
- [ ] Calendly integration approach approved (popup modal)

---

**Ready to proceed with implementation upon your approval.**

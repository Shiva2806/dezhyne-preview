# DEZHYNE Digital Agency - Design Guidelines

## Design Approach
**Reference-Based Approach** inspired by premium digital agencies:
- **WeThinkElastic**: Hero section storytelling and portfolio layout
- **Zerocac**: Overall structure and contact page design
- **Schbang**: Color balance and blog creative cards

## Core Design Principles
Modern, minimal, premium aesthetic positioning DEZHYNE as a next-generation creative and tech studio with clean whitespace, bold typography, smooth animations, and cinematic storytelling flow.

---

## Typography
- **Primary Font**: Poppins, Inter, or Satoshi (bold, modern sans-serif)
- **Hierarchy**: 
  - Hero Headlines: Bold, large-scale (3-4rem desktop)
  - Section Titles: Bold, prominent (2-2.5rem)
  - Body Text: Regular weight, comfortable reading size
  - CTAs: Medium-bold weight
- **Color**: Black text as primary, maintaining high contrast on white/pastel backgrounds

## Color System
- **Background**: White base with soft pastel gradients (light gray, beige, cream tones)
- **Accent Colors**: Pastel highlights - blue, peach, lilac for CTAs and hover states
- **Text**: Black primary, gray for secondary information
- **Blog Cards**: Bright gradients (green, purple, orange) for visual impact
- **Client Logos**: Grayscale default, colored on hover

## Layout System
**Spacing Units**: Use Tailwind spacing of 4, 6, 8, 12, 16, 20, 24, 32 for consistent rhythm
- **Container**: Max-width 7xl (80rem) for main content
- **Section Padding**: py-20 to py-32 desktop, py-12 to py-16 mobile
- **Grid Gaps**: gap-6 to gap-8 for cards, gap-12 to gap-16 for sections
- **Wide Spacing**: Generous breathing room throughout, strong visual hierarchy

---

## Component Library

### Navigation
- **Sticky white navbar** with subtle shadow on scroll
- **Center-aligned navigation links** with hover underline animation
- **Logo**: Left-aligned, 30% larger than current size, black on white
- **Links**: Home | Services | Portfolio | Blogs | Contact
- **CTA Button**: "Let's Talk" rounded button with pastel highlight, right-aligned

### Footer
- **Background**: Soft beige or light cream
- **Large heading**: "Let's start something great together"
- **CTA button**: "Let's Talk" with pastel accent
- **Social Icons Row**: Instagram, LinkedIn, Mail, Call (right-aligned)
- **Newsletter signup field** with subtle styling
- **Privacy Policy**: Small link at bottom-right corner only

### Buttons
- **Primary CTA**: Rounded corners, pastel background, black text, arrow icon
- **Hover State**: Slight lift with shadow glow
- **On Images**: Blurred background treatment for readability

### Cards
**Service Cards** (3x2 grid):
- Icon at top, title, short description
- White background with light border
- Hover: lift effect + shadow glow

**Portfolio Cards** (3-column grid):
- Image/video thumbnail with rounded corners
- Title and category tag
- Hover overlay: "View Case Study" with fade-in

**Blog Cards** (3-column grid):
- Bright gradient banners (green, purple, orange)
- Large image, title, short description, read time
- Hover: image zoom + text shift animation

---

## Page-Specific Layouts

### Homepage
1. **Hero Section**: Video montage background with soft gradient waves, center-aligned headline and CTA, smooth scroll fade animation
2. **Trusted Brands**: Single row of 5-6 client logos, grayscale to color on hover
3. **Our Services**: 3x2 grid of service cards with icons
4. **Our Work**: Two-column grid with work thumbnails/looping videos, "We Are The Team — We Think Elastic" title
5. **Our Approach**: Vertical step timeline with animated logo markers (Discovery → Design → Development → Launch)
6. **Blog Preview**: 3 colorful gradient cards
7. **CTA Section**: Clean background with "Let's Build Something Great Together"

### Services Page
1. **Hero**: Clean tagline with accent underline
2. **Category Tabs**: Brand Solutions | Tech Solutions | Media Solutions
3. **Brand Solutions**: Two-column alternating image/content layout
4. **Tech & E-commerce**: Hero-style banner + website template grid (Shopify Experts style)
5. **Media & Marketing**: Horizontal scroll carousel with creative banners
6. **CTA**: Pastel button with strong call-to-action

### Portfolio Page
- **Hero**: Bold title
- **Filter Bar**: All | Branding | E-commerce | Tech | UI/UX
- **3-column grid**: Light cards with hover overlays
- Smooth fade-in transitions, rounded corners

### Blog Listing
- **Hero**: Title + subtitle
- **3-column grid**: Colorful gradient cards
- Consistent card sizing with image, title, description, read time

### Individual Blog Post
- Full-width header image
- Author info, published date
- Social share icons
- Clean reading typography

### Contact Page
- **Hero**: "Drop Us a Message" with subtext about 2-day response
- **Form**: Underline-only style inputs (Name, Email, Phone, Message)
- **Contact Info Row**: Address | Hours | Phone | Email | "View on Google Maps"
- Minimal icons, simple text layout

### FAQ Page
- **Accordion layout** organized by: General, Services, Process, Pricing, Support
- Smooth expand animation
- End CTA: "Still have questions? Let's Talk"

---

## Animation Guidelines
**GSAP/Framer-style smooth animations**:
- **Scroll-triggered reveals**: Fade-in and slide-up on section entry
- **Hover transitions**: Lift, shadow glow, color shifts (300-400ms duration)
- **Parallax effects**: Subtle, on hero sections and large images
- **Page transitions**: Smooth cross-fades
- **Timeline animations**: For "Our Approach" section with animated markers
- **Video autoplay**: Looping background videos with smooth fade-in

**Animation Principles**:
- Smooth, cinematic motion
- Enhance storytelling without distraction
- Performance-optimized for all devices

---

## Images

### Hero Sections
- **Homepage**: Video montage of works/projects (light aesthetic, professional, clean)
- **Services**: Minimal accent imagery with white background
- **Portfolio**: Project showcase imagery
- **Contact**: Clean, minimal or no hero image

### Content Images
- **Unique, non-repeated images** across all pages
- **Light-toned, professional mockups** for services/portfolio
- **Client logos**: High-quality, grayscale with color hover
- **Blog cards**: Vibrant, creative imagery matching gradient themes
- **Work thumbnails**: Clean project screenshots or looping video previews

### Image Treatment
- Rounded corners on all cards and thumbnails
- Light borders on portfolio/work items
- Zoom effect on hover for blog and portfolio cards
- Maintain aspect ratios: 16:9 for hero videos, 4:3 for portfolio cards, 3:2 for blog cards

---

## Responsive Behavior
- **Desktop**: Full multi-column grids (3 columns standard)
- **Tablet**: 2-column grids, maintained spacing
- **Mobile**: Single column, stacked sections, adjusted padding (py-12)
- **Navigation**: Hamburger menu on mobile with smooth slide-in drawer
- **Typography**: Scale down hero headlines by 30-40% on mobile

---

## Technical Considerations
- Fully responsive grid design using Tailwind
- SEO-optimized structure with semantic HTML
- Lazy loading for images and videos
- Performance-optimized animations (GPU-accelerated)
- Smooth scroll behavior throughout
- Each page visually consistent but uniquely structured
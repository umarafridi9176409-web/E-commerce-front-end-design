# 🛍️ ShopVerse – eCommerce Frontend

A premium, fully responsive (desktop) eCommerce frontend built with **HTML5**, **CSS3**, and **Vanilla JavaScript** as part of a 3-week frontend internship project.

---

## 📁 Project Structure

```
front-end/
├── week-01/                   ← Week 1: Header & Footer
│   ├── index.html
│   └── css/
│       └── style.css
│
├── week-02/                   ← Week 2: Home Page + Product Listing
│   ├── index.html             (Home Page)
│   ├── products.html          (Product Listing Page)
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── main.js            (Home page logic)
│       └── products.js        (Listing page logic)
│
└── week-03/                   ← Week 3: Product Details + Interactivity
    ├── product-detail.html
    ├── css/
    │   └── style.css
    └── js/
        └── product-detail.js
```

---

## 🗓️ Week-by-Week Breakdown

### Week 01 – Header & Footer
**File:** `week-01/index.html`

✅ Features implemented:
- Sticky header with scroll shadow effect
- Announcement bar with gradient background
- Logo with SVG icon and gradient text
- Category-aware search bar with rounded design
- Navigation action buttons (Wishlist, Cart, Account) with notification badges
- User account dropdown menu (toggle with accessibility)
- Secondary navigation with mega menu (hover-activated)
- Flash deals category link with highlight
- Full multi-column footer with brand, links, socials, payment methods
- Newsletter signup form with validation
- Legal links and copyright section

---

### Week 02 – Home Page & Product Listing Page
**Files:** `week-02/index.html`, `week-02/products.html`

✅ Home Page features:
- Animated hero section with floating card, stats, and CTA buttons
- Trust badges strip (Free Shipping, Returns, Security, Support)
- 6-category grid with icons and item counts
- Flash deals section with **live countdown timer** (JS)
- Featured products with **tabbed filtering** (All / New / Best Sellers / Sale)
- Promotional banner section (3 promo cards)
- Newsletter subscription with validation

✅ Product Listing Page features:
- Sidebar filters: Category, Price Range, Rating, Availability
- Price slider with range display
- Price presets (Under $50, $50–$200, etc.)
- Sort dropdown (Featured, Price, Rating, Newest)
- Grid / List view toggle
- 24 products with rich cards (image, name, category, rating, price, discount)
- Quick Add to Cart with toast notification
- Wishlist toggle per card
- Active filter tags (removable)
- Full **pagination** with page numbers
- URL parameter support for pre-filtering by category

---

### Week 03 – Product Detail Page & Interactivity
**File:** `week-03/product-detail.html`

✅ Features implemented:
- URL parameter-based product loading (`?id=N`)
- **Image gallery** with 4 thumbnail views and prev/next navigation
- Keyboard navigation for gallery (← → arrow keys)
- **Color selector** with visual swatches and active state
- **Storage selector** (with dynamic price add-ons)
- **RAM selector** (with dynamic price add-ons)
- **Quantity counter** (+/−) with total price update
- **Add to Cart** button with pulse animation and badge counter
- **Buy Now** button
- Wishlist toggle (filled/outline heart)
- Delivery information cards
- **Sticky Add to Cart bar** (appears when scrolling past product section)
- **Product tabs:** Description, Specifications, Reviews, Shipping & Returns
- Specifications table (Processor, Display, Battery, Connectivity, Dimensions)
- **Reviews system** with:
  - Rating overview (score + distribution bars)
  - Filter by rating / sentiment
  - Individual review cards with "Helpful" vote
  - **Write a review form** with interactive star rating input
- **Live search suggestions** dropdown (searches product catalog)
- Related Products grid (4 cards)
- Recently Viewed grid (4 cards)
- Share button (Web Share API with clipboard fallback)
- Scroll-based entrance animations

---

## 🎨 Design System

| Property | Value |
|---|---|
| Primary Color | `#6C63FF` (Electric Violet) |
| Accent Color | `#FF6584` (Coral Pink) |
| Background | `#0A0A14` (Deep Dark) |
| Card Background | `#1A1A2E` |
| Text Primary | `#E2E8F0` |
| Font | Inter (Google Fonts) |
| Border Radius | 6px – 20px – 9999px |
| Gradient | 135deg, `#6C63FF` → `#FF6584` |

---

## 🧰 Technologies Used

- **HTML5** – Semantic structure, ARIA accessibility attributes
- **CSS3** – Custom Properties, Flexbox, Grid, animations, glassmorphism
- **Vanilla JavaScript** – DOM manipulation, event handling, state management
- **Google Fonts** – Inter font family

---

## 🚀 How to Open

Simply open any HTML file directly in a browser:
- `week-01/index.html` – Header & Footer demo
- `week-02/index.html` – Full Home Page
- `week-02/products.html` – Product Listing
- `week-03/product-detail.html` – Product Detail (`?id=1` through `?id=24`)

No build tools or server required.

---

## 📅 Deadline

**June 26, 2026**

---

*Built with ❤️ for the ShopVerse internship frontend challenge.*

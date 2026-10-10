# Nova Store — Responsive E-Commerce Landing Page

A modern, responsive e-commerce landing page built with **HTML5**, **CSS3**, **Bootstrap 5**, and **Vanilla JavaScript**. Developed for **Task 2 – Create a Responsive Web Page** as part of the **Saiket Systems Full Stack Development Internship**.

---

## 📌 Project Overview

**Nova Store** is a clean, contemporary online store landing page showcasing curated lifestyle essentials across four categories: Electronics, Fashion, Accessories, and Home & Living. The user interface emphasizes a warm off-white palette, deep charcoal typography, tasteful teal brand accents, subtle elevation shadows, and responsive grid layouts.

The project demonstrates production-quality frontend fundamentals without external JavaScript frameworks, build tools, or server dependencies. All state management, catalog filtering, cart computations, and form validation logic are implemented in pure vanilla JavaScript.

---

## ✨ Features

### 1. Navigation & Header
- **Brand Identity**: Custom Nova Store branding with styled icon badge and tagline.
- **Navigation Links**: Smooth scrolling to Home, Categories, Shop, About, and Contact sections.
- **Interactive Shopping Bag Trigger**: Dedicated cart button with a live dynamic badge counter and scale bounce animation when items are added.
- **Responsive Mobile Navigation**: Collapsible Bootstrap hamburger navigation with automatic collapse when a navigation link is clicked.
- **Announcement Bar**: Top promotional banner highlighting shipping thresholds and available demonstration promo codes.

### 2. Hero Section
- **Compelling Value Proposition**: Clean headline and typography hierarchy.
- **Call-to-Action Buttons**: Direct smooth scroll to the product catalog ("Shop Collection") and category grid ("Explore Categories").
- **Visual Product Showcase**: Vector illustration card with floating rating and shipping benefit badges.
- **Trust Indicators**: Customer ratings (4.9★), dispatch timelines, and satisfaction guarantees.

### 3. Category Showcase
- **Category Filter Cards**: Interactive cards for All Items, Electronics, Fashion, Accessories, and Home & Living.
- **Two-Way Synchronization**: Clicking any category card activates the corresponding category filter, updates the pill button active state, filters the catalog, and scrolls down to the products grid.

### 4. Products Catalog
- **Diverse Sample Catalog**: 12 sample products spanning multiple categories with high-resolution imagery, pricing, discounts, review counts, and badge labels (*Bestseller*, *New*, *Sale*, *Trending*).
- **Offline & Fault-Tolerant Fallbacks**: Automatic `onerror` fallback triggers custom local SVG illustrations if remote images fail to load.
- **Live Search**: Instant real-time search across product names, categories, and descriptions with a quick-clear button.
- **Interactive Category Filter Pills**: Tab-style filter pills for quick switching.
- **Sorting Mechanism**: Dropdown sorting by Featured, Price (Low to High), Price (High to Low), Customer Rating, and Alphabetical (A–Z).
- **Dynamic Results Counter**: Real-time counter displaying visible items vs. total catalog count.
- **Empty State Display**: User-friendly empty state screen with an illustrative icon and a "Reset All Filters" button when no items match.
- **Quick View Modal**: Modal dialog showcasing high-resolution product photography, full descriptions, ratings, and a quantity selector.

### 5. Shopping Cart Drawer (Offcanvas)
- **Slide-out Offcanvas**: Clean drawer pattern accessible on desktop and mobile.
- **Item Management**: Increment, decrement, or remove items with real-time recalculations.
- **Dynamic Pricing Engine**: Immediate calculation of subtotal, coupon discounts, shipping threshold logic (Free shipping over $75, otherwise flat rate $9.00), and final total.
- **Promo Code System**: Interactive coupon field supporting test codes:
  - `NOVA10`: 10% discount
  - `SAIKET20`: 20% internship discount
- **Cart Persistence**: Cart contents and quantities are preserved across page refreshes via `localStorage`.
- **Empty Cart View**: Dedicated empty illustration and quick call-to-action to browse products.
- **Simulated Checkout**: A dedicated checkout confirmation modal confirming order totals and explicitly clarifying that the checkout is a simulated demonstration.

### 6. About & Benefits Section
- **Brand Philosophy**: Context on craftsmanship and product selection.
- **Core Value Highlights**: 4 feature cards highlighting Curated Quality, Simulated Security, Attentive Support, and Conscious Sourcing.
- **Educational Transparency Notice**: Clear disclaimer stating that Nova Store is an internship frontend showcase.

### 7. Contact & Feedback Section
- **Store Contact Info**: Email address, studio locations, and service hours.
- **Interactive Contact Form**: Fields for Full Name, Email Address, Inquiry Topic dropdown, Message textarea, and Demonstration Consent checkbox.
- **Client-Side JavaScript Validation**:
  - Full Name: Minimum 2 characters.
  - Email Address: Valid email format regex matching (`user@domain.com`).
  - Topic: Selection required.
  - Message: Minimum 10 characters.
  - Consent: Checkbox required.
- **Inline Feedback**: Bootstrap `is-valid` and `is-invalid` visual states with descriptive error messages.
- **Simulated Submission**: Simulated loading spinner, clear success confirmation alert, and form reset.

### 8. Accessibility & Responsiveness
- **Semantic HTML5**: Appropriate use of `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`, and heading hierarchy (`h1` through `h4`).
- **ARIA Attributes & Labels**: `aria-label`, `aria-live="polite"`, `role="toolbar"`, and `role="status"` for dynamic updates.
- **Skip Link**: "Skip to main content" link for keyboard accessibility.
- **Responsive Layout**: Designed with Bootstrap 5's responsive grid system (`col-12`, `col-sm-6`, `col-lg-4`, `col-xl-3`) ensuring proper rendering across mobile devices (320px+), tablets, and desktops without horizontal scrolling.

---

## 🛠️ Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic markup, metadata, accessibility landmarks, and modal scaffolds |
| **CSS3** | Custom properties (CSS variables), typography, animations, responsive media queries |
| **Bootstrap 5.3.3 (CDN)** | Responsive 12-column grid, offcanvas drawer, modals, forms, and flexbox utilities |
| **Bootstrap Icons 1.11.3 (CDN)** | Crisp vector UI icons |
| **Google Fonts** | *Plus Jakarta Sans* typeface for modern, clean readability |
| **Vanilla JavaScript (ES6+)** | State management, cart calculations, search/filtering, modal controls, and validation |

---

## 📁 Project Structure

```text
task-2-responsive-page/
├── index.html                   # Main single-page application entry point
├── css/
│   └── style.css                # Custom CSS styles, theme tokens, and media queries
├── js/
│   └── main.js                  # Vanilla JS logic: catalog, search, filter, cart, validation
├── assets/
│   └── images/                  # Local vector assets & reliable offline fallbacks
│       ├── hero-showcase.svg
│       ├── product-electronics.svg
│       ├── product-fashion.svg
│       ├── product-accessories.svg
│       └── product-home.svg
└── README.md                    # Project documentation
```

---

## 🚀 Instructions to Run Locally

Because this project uses vanilla frontend technologies without build tools, it requires no package installations or backend servers.

### Option 1: Direct File Opening (Easiest)
1. Navigate to the `task-2-responsive-page` folder on your computer.
2. Double-click `index.html` to open it directly in your default web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Using VS Code Live Server
1. Open the `task-2-responsive-page` folder in Visual Studio Code.
2. If installed, right-click `index.html` and select **"Open with Live Server"**.
3. The page will open automatically at `http://127.0.0.1:5500/index.html`.

### Option 3: Using Python Built-in Server
If Python is installed on your machine:
```bash
# Navigate to the folder in PowerShell or Command Prompt
cd "task-2-responsive-page"

# Start a simple local server
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

---

## 🎓 Internship Task Description

- **Task**: Task 2 – Create a Responsive Web Page
- **Program**: Saiket Systems Full Stack Development Internship
- **Objective**: Design and build a fully responsive, professional web page (e-commerce landing page) utilizing HTML, CSS, Bootstrap, and interactive vanilla JavaScript.
- **Scope**: Frontend implementation emphasizing responsive design, interactive cart mechanics, product catalog search/filter, and client-side form validation.
- **Constraints**: No backend, database, payment processing, or build tools required. All features are client-side simulations.


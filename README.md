# E-commerce Website

## Tech Stack

- React.js
- Tailwind CSS
- Vite

---

## Components

### Responsive Navbar Component

A responsive React navbar that includes:

- Logo
- Search bar
- Action icons (e.g., cart, profile)

The layout adjusts based on screen size for better user experience across devices.

---

## Filter Sidebar Component (Desktop)

A sidebar component used for filtering products. It contains multiple filter sections, each displaying a title, checkboxes, and item counts.

### FilterSidebar

- Acts as the wrapper component for all filter sections.
- Renders multiple `FilterSection` components, including:
  - Department
  - Category
  - Tshirt Type
  - Cloth Type

- Also integrates:
  - ColorSelector
  - SizeSelector

---

### FilterSection

A reusable component that:

- Accepts props:
  - `title` – Section heading
  - `options` – Array of objects containing `{ label, count }`

- Renders:
  - Section title
  - List of checkboxes with counts
  - Divider line after each section

---

### ColorSelector

- Allows users to select a product color.
- Dynamically renders color options using the `map()` method.

---

### SizeSelector

- Allows users to select a product size.
- Dynamically renders available sizes (S, M, L, XL, XXL) using the `map()` method.

---

## Mobile Filter Drawer Component

### MobileFilterDrawer

A slide-in drawer component designed for small screens.

### Features:

- Appears when the user clicks the filter button on mobile view.
- Includes:
  - Overlay background
  - Close button
  - Scrollable filter content
  - Clear All and Apply Filters buttons

### State Management

Drawer visibility is controlled in `App.jsx` using React’s `useState`.

- Initially hidden
- Opens when the mobile filter button is clicked
- Closes when the overlay or close button is clicked

This ensures centralized control of the drawer’s visibility from the parent component.

---

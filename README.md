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

## **Filtering Logic**

**Category filter using productLabel**

### Step 1

- Data should live in the highest component that needs to control it.
- Since filters and products both affect each other,
- their common parent (App.jsx here) must own them.
- moved products from productGrid to app.jsx so,
  App.jsx
  ↓ (props)
  ProductSection
  ↓ (props)
  ProductGrid
  ↓
  Display products

### step 2

- Create filter state in App.jsx
- Because user can select:
  One checkbox
  Multiple checkboxes
  Or none
- we need empty arrays to store Selected Filter State.

### step 3

- Connect FilterSidebar to App
  1. Pass a function from App → FilterSidebar
  - FilterSection must call that function on checkbox change

  - function logic:
    When checkbox changes:
    If value already exists in array
    remove it
    else
    add it
  2. Receive It in FilterSidebar
  - pass it to Category section only

### step 4

- Modify FilterSection
- pass prop onChange to it.
- Now modify checkbox input
- FilterSection calls handler function on checkbox change this
- updates state in App -> App re-renders. BUT Products are still not filtered.

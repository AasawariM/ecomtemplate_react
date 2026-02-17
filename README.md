# E-commerce Website

## Tech Stack

- React.js
- Tailwind CSS
- Vite

## Components

### Responsive Navbar Component

A React navbar component with a logo, search bar, and action icons.

### Filter Sidebar Component

A React sidebar component for filtering items with multiple sections. Each section displays a title, checkboxes, and counts.

#### Components

**FilterSidebar**

- Wrapper component for all filter sections.
- Renders multiple `FilterSection` components:
  - Department
  - Category
  - Tshirt Type
  - Cloth Type

**FilterSection**

- Accepts props:
  - `title` – Section title
  - `options` – Array of objects with `{ label, count }`

- Renders:
  - Section title
  - Checkboxes for each option with count
  - Divider line after options

**ColorSelector**

- Allows users to pick a color for products.
- Uses the map() method to dynamically render a list of color options from an array

**Size Selector**

- Allows users to pick a size for products.
- Uses the map() method to dynamically render available sizes (S, M, L, XL, XXL) from an array

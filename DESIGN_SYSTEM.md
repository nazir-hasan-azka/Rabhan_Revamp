# RABHAN Design System - Implementation Guide

## 🎨 Design Tokens

### Colors

Based on the Figma design system, all colors are configured in `tailwind.config.ts`:

#### Primary Color (Teal)
- `rabhan-primary-50`: #d9f0ef (Lightest)
- `rabhan-primary-400`: #42B2B1 (Main)
- `rabhan-primary-800`: #0d2423 (Darkest)

#### Secondary Color (Dark Teal)
- `rabhan-secondary-50`: #cce5e5
- `rabhan-secondary-400`: #007D7D (Main)
- `rabhan-secondary-800`: #001919

#### Status Colors
- **Error**: `rabhan-error-400` (#BB2124)
- **Warning**: `rabhan-warning-400` (#F0AD4E)
- **Success**: `rabhan-success-400` (#22BB33)
- **Info**: `rabhan-info-400` (#5BC0DE)

#### Grey Scale
- `rabhan-grey-50` to `rabhan-grey-800`
- Main text: `rabhan-grey-800` (#222222)

### Typography

**Font Family**: Poppins (imported from Google Fonts)

**Type Scale** (based on 1.25 ratio):
- `text-rabhan-xs`: 10px / 12px line-height
- `text-rabhan-sm`: 13px / 16px
- `text-rabhan-base`: 16px / 19px
- `text-rabhan-md`: 20px / 24px (Buttons, H6)
- `text-rabhan-lg`: 25px / 30px (H5)
- `text-rabhan-xl`: 31px / 37px (H4)
- `text-rabhan-2xl`: 39px / 47px (H3)
- `text-rabhan-3xl`: 49px / 59px (H2)
- `text-rabhan-4xl`: 61px / 73px (H1)

### Spacing Scale

Based on 4px grid:
- `spacing-1`: 4px
- `spacing-2`: 8px
- `spacing-3`: 12px
- `spacing-4`: 16px
- `spacing-5`: 20px
- `spacing-6`: 24px
- `spacing-7`: 28px
- `spacing-8`: 32px

### Border Radius
- `rounded-[4px]`: Small radius (Primary buttons, inputs)
- `rounded-[8px]`: Medium radius (Secondary buttons)
- `rounded-[20px]`: Large radius (Shopping cart button)

---

## 🧩 Components

### Navbar Component

**File**: `components/layout/Navbar.tsx`

**Specifications**:
- Fixed position at top
- Height: 116px
- Padding: 100px horizontal on desktop
- White background with shadow
- Responsive: Desktop/Tablet/Mobile variants

**Desktop Layout**:
```
[Logo] ---------------------------------- [Language] [Cart] [Register] [Login]
```

**Components Used**:
- Logo: 147px × 100px
- Language Selector
- Shopping Cart Button
- Register Button (Secondary)
- Login Button (Primary)

---

### Button Component

**File**: `components/ui/button.tsx`

**Variants**:

1. **Primary Button**
   - Background: `bg-rabhan-primary-400`
   - Text: White
   - Hover: `bg-rabhan-primary-500`
   - Border Radius: 4px

2. **Secondary Button**
   - Border: 2px `border-rabhan-secondary-400`
   - Text: `text-rabhan-grey-800`
   - Background: White
   - Hover: `bg-rabhan-secondary-50`
   - Border Radius: 8px

3. **Tertiary Button**
   - No border or background
   - Text: `text-rabhan-grey-800`
   - Hover: `bg-rabhan-grey-50`

**Sizes**:
- `default`: 48px height, 20px font size
- `sm`: 40px height, 16px font size
- `lg`: 56px height, 25px font size

**Usage Example**:
```tsx
<Button variant="primary" size="default">
  Login
</Button>

<Button variant="secondary" leftIcon={<Icon />}>
  Register
</Button>
```

---

### Language Selector

**File**: `components/layout/LanguageSelector.tsx`

**Specifications**:
- Width: 137px
- Height: 45px
- Border: 1px `border-rabhan-grey-100`
- Border Radius: 4px
- Dropdown animation

**Languages**:
- English (🇬🇧)
- Arabic (🇸🇦)

**States**:
- Default: Grey border
- Hover: Primary color border
- Open: Dropdown with options
- Focus: Ring with primary color

---

### Shopping Cart Button

**File**: `components/layout/ShoppingCartButton.tsx`

**Specifications**:
- Background: `bg-rabhan-primary-400`
- Size: 48px × 48px (with padding)
- Border Radius: 20px
- Icon: Shopping cart (24px)
- Badge: Item count (if > 0)

**Badge Specifications**:
- Background: `bg-rabhan-error-400`
- Position: Top-right corner
- Min width: 20px
- Height: 20px
- Font: 12px, semibold

---

## 🎯 Design Principles

### 1. Consistency
- Use design tokens from Tailwind config
- Follow the component library
- Maintain spacing scale (4px grid)

### 2. Accessibility
- All interactive elements have focus states
- Proper ARIA labels
- Keyboard navigation support
- Color contrast WCAG AA compliant

### 3. Responsiveness
- Desktop: Full navbar (lg:)
- Tablet: Adjusted spacing
- Mobile: Hamburger menu

### 4. Performance
- Optimized images with Next.js Image
- Minimal re-renders with React.memo where needed
- Lazy loading for heavy components

---

## 📦 Assets Needed

### Logo
**Location**: `/public/images/rabhan-logo.png`
**Specifications**: 
- Transparent background
- High resolution (2x for retina)
- Dimensions: 147px × 100px display size

### Icons
All icons use **Lucide React** library:
- `ShoppingCart` - Cart button
- `ChevronDown` - Language selector
- `Menu` - Mobile menu toggle

---

## 🚀 Implementation Checklist

### ✅ Completed:
- [x] Tailwind configuration with RABHAN design tokens
- [x] Color palette implementation
- [x] Typography scale
- [x] Spacing system
- [x] Button component with all variants
- [x] Navbar component (desktop)
- [x] Language Selector component
- [x] Shopping Cart Button component

### 📋 Next Steps:
- [ ] Add RABHAN logo to `/public/images/`
- [ ] Mobile Menu component implementation
- [ ] Text Field/Input component
- [ ] Icon library components
- [ ] Toggle switch component
- [ ] Card components
- [ ] Modal/Dialog components
- [ ] Toast/Notification system

---

## 🎨 Figma Design Reference

**File**: `Rabhan Design System`
**Key Frames**:
- `2:1141` - Components and Icons
- `2:1314` - Navbar (Desktop)
- `2:1327` - Navbar (Mobile)
- `2:1338` - Navbar (Tablet)

---

## 📝 Usage Notes

### Importing Components
```tsx
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from '@/components/layout/LanguageSelector';
```

### Theme Usage
```tsx
// Use RABHAN colors
className="bg-rabhan-primary-400 text-white"

// Use typography
className="text-rabhan-md font-poppins"

// Use spacing
className="p-4 gap-4" // 16px
```

### Best Practices
1. Always use design tokens (don't use arbitrary values)
2. Follow the component API (don't modify core styles)
3. Test on all breakpoints (sm, md, lg, xl)
4. Ensure accessibility with proper ARIA labels
5. Use semantic HTML elements

---

**Last Updated**: January 2025
**Maintainer**: Azkashine Development Team
**Design Owner**: Alpha Power

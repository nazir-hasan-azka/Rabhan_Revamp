# Icons Directory

This directory should contain the icon assets for the Solar Calculator.

## Required Icons:

### Calculator Form Icons:
- `house.svg` - Residential icon
- `building.svg` - Commercial icon
- `electrical.svg` - Usage (KWH) icon
- `dollar.svg` - Bill (SAR) icon

### Results Section Icons:
- `waveform-monitor.svg` - System Price icon
- `calendar.svg` - Monthly Payment icon
- `panel.svg` - System Size card icon
- `bill.svg` - Monthly Bill card icon
- `solar-panel.svg` - Power Production card icon

## Icon Specifications:

- **Format**: SVG (preferred) or PNG
- **Size**: 30px × 30px to 36px × 36px
- **Color**: Can be single color or multi-color
- **Background**: Transparent

## Current Status:

Currently using emoji placeholders in the UI. Replace the emoji placeholders in `app/solar-calculator/page.tsx` with proper icon components once assets are available.

## How to Use:

Once you add the icon files here, update the Image components in the Solar Calculator page:

```tsx
// Replace emoji placeholder:
<div className="w-[30px] h-[30px] bg-gray-200 rounded">🏠</div>

// With actual icon:
<Image
  src="/icons/house.svg"
  alt="Residential"
  width={30}
  height={30}
  className="object-contain"
/>
```

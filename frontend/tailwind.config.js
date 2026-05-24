/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
          "surface-container-low": "#1c1b1c",
          "surface-variant": "#353436",
          "tertiary-container": "#9a6d00",
          "on-tertiary-fixed-variant": "#5e4100",
          "secondary": "#ecffe3",
          "surface": "#131314",
          "surface-bright": "#3a393a",
          "surface-container-high": "#2a2a2b",
          "outline-variant": "#4d4353",
          "on-background": "#e5e2e3",
          "background": "#131314",
          "secondary-fixed": "#72ff70",
          "primary-fixed": "#f2daff",
          "primary-container": "#9d4edd",
          "on-primary-container": "#fffdff",
          "on-tertiary-fixed": "#271900",
          "tertiary-fixed-dim": "#ffba27",
          "secondary-fixed-dim": "#00e639",
          "on-primary": "#4c007d",
          "error-container": "#93000a",
          "inverse-on-surface": "#313031",
          "surface-dim": "#131314",
          "on-error-container": "#ffdad6",
          "tertiary": "#ffba27",
          "primary-fixed-dim": "#e0b6ff",
          "on-error": "#690005",
          "on-secondary-container": "#007117",
          "inverse-primary": "#8433c4",
          "on-secondary-fixed-variant": "#00530e",
          "on-surface": "#e5e2e3",
          "surface-container-lowest": "#0e0e0f",
          "on-surface-variant": "#d0c2d5",
          "on-tertiary": "#422c00",
          "tertiary-fixed": "#ffdea9",
          "inverse-surface": "#e5e2e3",
          "on-tertiary-container": "#fffdff",
          "outline": "#998d9e",
          "on-primary-fixed-variant": "#6a0baa",
          "surface-container": "#201f20",
          "error": "#ffb4ab",
          "surface-tint": "#e0b6ff",
          "on-secondary": "#003907",
          "on-primary-fixed": "#2e004e",
          "secondary-container": "#13ff43",
          "primary": "#e0b6ff",
          "surface-container-highest": "#353436",
          "on-secondary-fixed": "#002203"
      },
      "borderRadius": {
          "DEFAULT": "0.25rem",
          "lg": "0.5rem",
          "xl": "0.75rem",
          "full": "9999px"
      },
      "spacing": {
          "margin-page": "24px",
          "sidebar-width": "220px",
          "stack-gap": "12px",
          "player-height": "80px",
          "gutter": "16px",
          "section-gap": "32px"
      },
      "fontFamily": {
          "body-md": ["Inter"],
          "label-sm": ["Geist"],
          "display-lg": ["Inter"],
          "headline-sm": ["Inter"],
          "label-md": ["Geist"],
          "display-lg-mobile": ["Inter"],
          "body-lg": ["Inter"],
          "headline-md": ["Inter"]
      },
      "fontSize": {
          "body-md": ["14px", { "lineHeight": "1.5", "fontWeight": "400" }],
          "label-sm": ["11px", { "lineHeight": "1.2", "letterSpacing": "0.1em", "fontWeight": "600" }],
          "display-lg": ["36px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800" }],
          "headline-sm": ["20px", { "lineHeight": "1.3", "fontWeight": "600" }],
          "label-md": ["12px", { "lineHeight": "1.4", "letterSpacing": "0.05em", "fontWeight": "500" }],
          "display-lg-mobile": ["24px", { "lineHeight": "1.1", "fontWeight": "800" }],
          "body-lg": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
          "headline-md": ["24px", { "lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700" }]
      }
    }
  }
}

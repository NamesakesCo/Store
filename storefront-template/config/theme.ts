
export const theme = {
  brand: {
    name: "Your Brand",
    logo: "/assets/logo.svg",
    favicon: "/assets/favicon.ico"
  },
  color: {
    primary: "#111111",
    secondary: "#c94b32",
    background: "#faf9f7",
    surface: "#ffffff",
    text: "#111111",
    muted: "#6b6b6b",
    border: "#e5e2dd"
  },
  layout: {
    maxWidth: "1280px",
    gridColumnsDesktop: 4,
    gridColumnsTablet: 2,
    gridColumnsMobile: 1,
    cardGap: "24px",
    sectionSpacing: "96px",
    headerHeight: "72px",
    borderRadius: "2px"
  },
  image: {
    productAspectRatio: "3 / 4",
    heroAspectRatio: "16 / 9"
  },
  typography: {
    headingFont: "'Neue Montreal', sans-serif",
    bodyFont: "'Inter', sans-serif",
    h1: "clamp(2.5rem, 6vw, 4.5rem)",
    h2: "clamp(1.75rem, 3vw, 2.5rem)",
    body: "1rem",
    letterSpacing: "0.01em",
    textTransform: "none"
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
    wide: "1440px"
  }
};

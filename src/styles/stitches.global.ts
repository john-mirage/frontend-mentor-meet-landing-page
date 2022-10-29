import { globalCss } from "@stitches/react";

const globalStyles = globalCss({
  "*, *::before, *::after": { boxSizing: "border-box" },
  "body, h1, h2, h3, h4, p, figure, blockquote, dl, dd, ul, ol": { margin: 0 },
  "ul, ol": { padding: 0, listStyle: "none" },
  "body": {
    minHeight: "100vh",
    textRendering: "optimizeSpeed",
    lineHeight: 1.5,
    fontFamily: "$mySansFont",
  },
  "a": { textDecoration: "none" },
  "img, picture, svg": { display: "block" },
  "img, picture": { maxWidth: "100%" },
  "input, button, textarea, select": { font: "inherit" },
  "input, textarea, button": {
    padding: 0,
    border: "none",
    backgroundColor: "transparent",
  },
  "button": { cursor: "pointer" },
});

export default globalStyles;

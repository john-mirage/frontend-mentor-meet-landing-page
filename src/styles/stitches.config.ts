import { createStitches, defaultThemeMap } from "@stitches/react";

const SPACE_TOKEN = "space";

const FONT_SANS_FALLBACK =
  "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji";
/*
const FONT_SERIF_FALLBACK =
  "ui-serif, Georgia, Cambria, Times New Roman, Times, serif";
const FONT_MONO_FALLBACK =
  "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace";
*/

const SCREEN_SM = "576px";
const SCREEN_MD = "768px";
const SCREEN_LG = "992px";
const SCREEN_XL = "1200px";

const pxToRem = (sizeInPx: number) => {
  return `${String(sizeInPx / 16)}rem`;
};

export const { styled, css } = createStitches({
  theme: {
    colors: {
      transparent: "transparent",
      teal: "#4D96A9",
      tealHover: "#71C0D4",
      tealText: "#8FE3F9",
      violet: "#855FB1",
      violetHover: "#B18BDD",
      violetText: "#D9B8FF",
      darkGray: "#28283D",
      gray: "#87879D",
      grayBorder: "rgba(135, 135, 157, 0.25)",
      cyan: "#8FE3F9",
      pink: "#D9B8FF",
      white: "#FAFAFA",
    },
    space: {
      minus28: pxToRem(-28),
      1: pxToRem(1),
      16: pxToRem(16),
      18: pxToRem(18),
      24: pxToRem(24),
      25: pxToRem(25),
      26: pxToRem(26),
      28: pxToRem(28),
      30: pxToRem(30),
      32: pxToRem(32),
      36: pxToRem(36),
      40: pxToRem(40),
      44: pxToRem(44),
      48: pxToRem(48),
      54: pxToRem(54),
      56: pxToRem(56),
      64: pxToRem(64),
      66: pxToRem(66),
      72: pxToRem(72),
      84: pxToRem(84),
      92: pxToRem(92),
      120: pxToRem(120),
      152: pxToRem(152),
      340: pxToRem(340),
      414: pxToRem(414),
      456: pxToRem(456),
      574: pxToRem(574),
    },
    fonts: {
      redHatDisplay: `Red Hat Display, ${FONT_SANS_FALLBACK}`,
    },
    fontWeights: {
      500: 500,
      900: 900,
    },
    letterSpacings: {
      4: pxToRem(4),
    },
  },
  media: {
    sm: `(min-width: ${SCREEN_SM})`,
    md: `(min-width: ${SCREEN_MD})`,
    lg: `(min-width: ${SCREEN_LG})`,
    xl: `(min-width: ${SCREEN_XL})`,
    hover: "(hover: hover)",
  },
  utils: {
    paddingX: (value: string) => ({ paddingLeft: value, paddingRight: value }),
    paddingY: (value: string) => ({ paddingTop: value, paddingBottom: value }),
    marginX: (value: string) => ({ marginLeft: value, marginRight: value }),
    marginY: (value: string) => ({ marginTop: value, marginBottom: value }),
    square: (value: string) => ({ width: value, height: value }),
  },
  themeMap: {
    ...defaultThemeMap,
    blockSize: SPACE_TOKEN,
    minBlockSize: SPACE_TOKEN,
    maxBlockSize: SPACE_TOKEN,
    inlineSize: SPACE_TOKEN,
    minInlineSize: SPACE_TOKEN,
    maxInlineSize: SPACE_TOKEN,
    width: SPACE_TOKEN,
    minWidth: SPACE_TOKEN,
    maxWidth: SPACE_TOKEN,
    height: SPACE_TOKEN,
    minHeight: SPACE_TOKEN,
    maxHeight: SPACE_TOKEN,
    flexBasis: SPACE_TOKEN,
    gridTemplateColumns: SPACE_TOKEN,
    gridTemplateRows: SPACE_TOKEN,
    fontSize: SPACE_TOKEN,
    lineHeight: SPACE_TOKEN,
    borderWidth: SPACE_TOKEN,
    borderTopWidth: SPACE_TOKEN,
    borderRightWidth: SPACE_TOKEN,
    borderBottomWidth: SPACE_TOKEN,
    borderLeftWidth: SPACE_TOKEN,
    borderRadius: SPACE_TOKEN,
    borderTopLeftRadius: SPACE_TOKEN,
    borderTopRightRadius: SPACE_TOKEN,
    borderBottomRightRadius: SPACE_TOKEN,
    borderBottomLeftRadius: SPACE_TOKEN,
  },
});

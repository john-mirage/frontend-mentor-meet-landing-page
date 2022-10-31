import { css } from "@styles/stitches.config";

export const screenReaderOnly = css({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: 0,
});

export const container = css({
  "width": "100%",
  "paddingX": "$24",
  "@sm": {
    marginX: "auto",
    maxWidth: "576px",
  },
  "@md": {
    maxWidth: "768px",
  },
  "@lg": {
    maxWidth: "992px",
  },
  "@xl": {
    maxWidth: "1200px",
  },
});

export const headline = css({
  fontSize: "$32",
  lineHeight: "$36",
  fontWeight: 900,
});

export const body = css({
  fontSize: "$16",
  lineHeight: "$26",
  fontWeight: 500,
});

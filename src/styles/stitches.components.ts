import { styled } from "@styles/stitches.config";

export const ScreenReaderOnly = styled("span", {
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

export const Container = styled("div", {
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

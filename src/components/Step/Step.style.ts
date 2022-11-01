import { styled } from "@styles/stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "$56",
});

export const Line = styled("div", {
  width: "$1",
  height: "$84",
  backgroundColor: "$grayBorder",
});

export const Circle = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  square: "$56",
  borderRadius: "9999px",
  border: "$space$1 solid $grayBorder",
  backgroundColor: "$white",
});

export const StepNumber = styled("div", {
  fontSize: "$16",
  fontWeight: 900,
  lineHeight: "$26",
  color: "$gray",
});

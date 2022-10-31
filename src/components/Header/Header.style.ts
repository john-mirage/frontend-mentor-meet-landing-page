import { styled } from "@styles/stitches.config";
import { screenReaderOnly } from "@styles/stitches.mixins";

export const Header = styled("header", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Title = styled("h1", screenReaderOnly);

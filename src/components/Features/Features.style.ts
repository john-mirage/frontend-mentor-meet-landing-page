import { styled } from "@styles/stitches.config";
import { Container } from "@styles/stitches.components";

export const Section = styled(Container, {
  marginBottom: "$minus28",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
});

export const ImageGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "$24",
});

export const Overline = styled("p", {
  marginBottom: "$24",
  maxWidth: "$456",
  fontSize: "$16",
  lineHeight: "$26",
  fontWeight: 900,
  letterSpacing: "$4",
  textTransform: "uppercase",
  color: "$teal",
});

export const Title = styled("h2", {
  marginBottom: "$32",
  maxWidth: "$456",
  fontSize: "$32",
  lineHeight: "$36",
  fontWeight: 900,
  color: "$darkGray",
});

export const Subtitle = styled("p", {
  marginBottom: "$64",
  maxWidth: "$574",
  fontSize: "$16",
  fontWeight: 500,
  lineHeight: "$26",
  color: "$gray",
});

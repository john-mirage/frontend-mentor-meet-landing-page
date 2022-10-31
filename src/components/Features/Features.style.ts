import { styled } from "@styles/stitches.config";
import BasePlaceholder from "@components/Placeholder";
import { body, container, headline } from "@styles/stitches.mixins";

export const Container = styled("section", container, {
  marginBottom: "$minus28",
  position: "relative",
  zIndex: 100,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
});

export const ImageGrid = styled("div", {
  marginBottom: "$64",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "$24",
});

export const Placeholder = styled(BasePlaceholder, {
  width: "$151",
  height: "$143",
  borderRadius: "$8",
  overflow: "hidden",
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

export const Title = styled("h2", headline, {
  marginBottom: "$32",
  maxWidth: "$456",
  color: "$darkGray",
});

export const Subtitle = styled("p", body, {
  marginBottom: "$64",
  maxWidth: "$574",
  color: "$gray",
});

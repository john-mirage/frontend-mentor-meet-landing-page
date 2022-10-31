import { styled } from "@styles/stitches.config";
import { container, headline } from "@styles/stitches.mixins";

export const Footer = styled("footer", {
  position: "relative",
  zIndex: 10,
  paddingTop: "$92",
  paddingBottom: "$72",
  textAlign: "center",
  backgroundColor: "$teal",
});

export const Container = styled("div", container, {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Title = styled("h2", headline, {
  marginBottom: "$24",
  maxWidth: "$456",
  color: "$white",
});

export const Subtitle = styled("p", {
  marginBottom: "$32",
  maxWidth: "$574",
  fontSize: "$18",
  lineHeight: "$26",
  fontWeight: 500,
  color: "$white",
});

export const Version = styled("span", {
  color: "$tealText",
});

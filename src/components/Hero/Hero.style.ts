import BasePlaceholder from "@components/Placeholder";
import BaseImage from "@components/Image";
import BaseButton from "@components/Button";
import { Container } from "@styles/stitches.components";
import { styled } from "@styles/stitches.config";

export const Section = styled("section", {
  textAlign: "center",
});

export const Placeholder = styled(BasePlaceholder, {
  marginX: "auto",
  marginBottom: "$48",
  maxWidth: "$414",
  height: "$152",
});

export const Image = styled(BaseImage, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

export const Column = styled(Container, {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Title = styled("h2", {
  marginBottom: "$24",
  maxWidth: "$340",
  fontSize: "$40",
  lineHeight: "$44",
  fontWeight: 900,
  color: "$darkGray",
});

export const Subtitle = styled("p", {
  marginBottom: "$32",
  maxWidth: "$456",
  fontSize: "$16",
  lineHeight: "$26",
  fontWeight: 500,
  color: "$gray",
});

export const ButtonGroup = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const DownloadButton = styled(BaseButton, {
  marginBottom: "$16",
});

export const Version = styled("span", {
  color: "$tealText",
});

export const AboutButton = styled(BaseButton, {
  marginBottom: "$64",
});

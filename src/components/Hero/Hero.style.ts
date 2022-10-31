import BasePlaceholder from "@components/Placeholder";
import BaseImage from "@components/Image";
import BaseButton from "@components/Button";
import { styled } from "@styles/stitches.config";
import { body, container } from "@styles/stitches.mixins";

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
});

export const Container = styled("div", container, {
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

export const Subtitle = styled("p", body, {
  marginBottom: "$32",
  maxWidth: "$456",
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

export const AboutButton = styled(BaseButton, {
  marginBottom: "$64",
});

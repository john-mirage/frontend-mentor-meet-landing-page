import BaseLogo from "@components/Logo";
import BasePlaceholder from "@components/Placeholder";
import BaseImage from "@components/Image";
import { styled } from "@styles/stitches.config";

export const Container = styled("header", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Logo = styled(BaseLogo, {
  marginBottom: "$54",
});

export const Placeholder = styled(BasePlaceholder, {
  marginX: "auto",
  maxWidth: "$414",
  height: "$154",
});

export const Image = styled(BaseImage, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

import BasePlaceholder from "@components/Placeholder";
import BaseImage from "@components/Image";
import BaseButton from "@components/Button";
import { styled } from "@styles/stitches.config";
import { body, container } from "@styles/stitches.mixins";

export const Section = styled("section", {
  "textAlign": "center",
  "@xl": {
    position: "relative",
  },
});

export const Placeholder = styled(BasePlaceholder, {
  "marginX": "auto",
  "marginBottom": "$48",
  "maxWidth": "$414",
  "height": "$152",
  "@md": {
    marginBottom: "$72",
    maxWidth: "$820",
    height: "$303",
  },
  "@xl": {
    marginX: "0",
    position: "absolute",
    zIndex: 10,
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    maxWidth: "$1504",
    height: "$358",
  },
});

export const Image = styled(BaseImage, {
  width: "100%",
  height: "100%",
});

export const Container = styled("div", container, {
  "display": "flex",
  "flexDirection": "column",
  "alignItems": "center",
  "@xl": {
    position: "relative",
    zIndex: 100,
    paddingTop: "$44",
  },
});

export const Title = styled("h2", {
  "marginBottom": "$24",
  "maxWidth": "$340",
  "fontSize": "$40",
  "lineHeight": "$44",
  "fontWeight": 900,
  "color": "$darkGray",
  "@md": {
    fontSize: "$48",
    lineHeight: "$48",
  },
  "@lg": {
    maxWidth: "$445",
    fontSize: "$64",
    lineHeight: "$64",
  },
  "@xl": {
    marginBottom: "$34",
  },
});

export const Subtitle = styled("p", body, {
  "marginBottom": "$32",
  "maxWidth": "$456",
  "color": "$gray",
  "@xl": {
    maxWidth: "$540",
  },
});

export const ButtonGroup = styled("div", {
  "display": "flex",
  "flexDirection": "column",
  "alignItems": "center",
  "@md": {
    marginBottom: "$80",
    flexDirection: "row",
  },
  "@xl": {
    marginBottom: "$117",
  },
});

export const DownloadButton = styled(BaseButton, {
  "marginBottom": "$16",
  "@md": {
    marginRight: "$16",
    marginBottom: 0,
  },
});

export const AboutButton = styled(BaseButton, {
  "marginBottom": "$64",
  "@md": {
    marginBottom: 0,
  },
});

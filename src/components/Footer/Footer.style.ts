import { styled } from "@styles/stitches.config";
import BasePlaceholder from "@components/Placeholder";
import BaseImage from "@components/Image";
import BaseButton from "@components/Button";
import { container, headline } from "@styles/stitches.mixins";

export const Footer = styled("footer", {
  "position": "relative",
  "zIndex": 10,
  "paddingTop": "$92",
  "paddingBottom": "$72",
  "textAlign": "center",
  "backgroundColor": "$teal",
  "@md": {
    paddingBottom: "$66",
  },
  "@xl": {
    paddingTop: "$116",
    paddingBottom: "$104",
    textAlign: "left",
  },
});

export const Placeholder = styled(BasePlaceholder, {
  position: "absolute",
  zIndex: 10,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  opacity: 0.1,
});

export const Image = styled(BaseImage, {
  width: "100%",
  height: "100%",
});

export const Container = styled("div", container, {
  "position": "relative",
  "zIndex": 100,
  "display": "flex",
  "flexDirection": "column",
  "alignItems": "center",
  "@xl": {
    flexDirection: "row",
  },
});

export const Title = styled("h2", headline, {
  "marginBottom": "$24",
  "maxWidth": "$456",
  "color": "$white",
  "@md": {
    marginBottom: "$32",
  },
  "@xl": {
    marginBottom: "0",
    flex: "none",
    maxWidth: "$350",
  },
});

export const Subtitle = styled("p", {
  "marginBottom": "$32",
  "maxWidth": "$574",
  "fontSize": "$18",
  "lineHeight": "$26",
  "fontWeight": 500,
  "color": "$white",
  "@md": {
    marginBottom: "$40",
  },
  "@xl": {
    marginBottom: "0",
    flex: "1",
    paddingLeft: "$125",
    paddingRight: "$92",
  },
});

export const Button = styled(BaseButton, {
  "@xl": {
    flex: "none",
  },
});

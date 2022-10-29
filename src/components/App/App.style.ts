import { styled } from "@styles/stitches.config";

export const Container = styled("main", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  padding: "$48 $24",
  background: "linear-gradient(to bottom right, $cyan800, $violet800)",
});

export const Card = styled("div", {
  maxWidth: "$340",
  width: "100%",
  padding: "$24",
  backgroundColor: "$gray900",
  borderRadius: "$16",
  boxShadow:
    "0 0 0 0.5rem $colors$gray800, 0 25px 50px -12px rgb(0 0 0 / 0.25)",
});

export const Title = styled("h2", {
  marginBottom: "$24",
  fontSize: "$32",
  lineHeight: "$32",
  color: "$gray100",
});

export const Subtitle = styled("p", {
  fontSize: "$16",
  lineHeight: "$24",
  color: "$gray500",
});

export const Divider = styled("div", {
  marginY: "$24",
  width: "100%",
  height: "1px",
  backgroundColor: "$gray800",
});

export const ButtonGroup = styled("div", {
  margin: "$minus8",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexWrap: "wrap",
});

export const Button = styled("button", {
  margin: "$8",
  color: "$gray50",
  borderRadius: "$8",
  lineHeight: "$12",
  fontSize: "$12",
  letterSpacing: "$1",
  fontWeight: 600,
  textTransform: "uppercase",
  border: "0",
  padding: "$12 $24",
  transition: "background-color 150ms",
  variants: {
    color: {
      cyan: {
        "backgroundColor": "$cyan700",
        "@hover": {
          "&:hover": {
            backgroundColor: "$cyan900",
          },
        },
      },
      violet: {
        "backgroundColor": "$violet700",
        "@hover": {
          "&:hover": {
            backgroundColor: "$violet900",
          },
        },
      },
    },
  },
});

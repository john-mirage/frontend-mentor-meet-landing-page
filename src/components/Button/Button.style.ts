import { styled } from "@styles/stitches.config";

export const Button = styled("button", {
  borderRadius: "9999px",
  fontSize: "$16",
  fontWeight: 900,
  lineHeight: "$26",
  color: "$white",
  transition: "background-color 150ms",
  variants: {
    size: {
      md: {
        padding: "$16 $30",
      },
      lg: {
        padding: "$16 $40",
      },
    },
    color: {
      teal: {
        "backgroundColor": "$teal",
        "@hover": {
          "&:hover": {
            backgroundColor: "$tealHover",
          },
        },
        "& > span": {
          color: "$tealText",
        },
      },
      violet: {
        "backgroundColor": "$violet",
        "@hover": {
          "&:hover": {
            backgroundColor: "$violetHover",
          },
        },
        "& > span": {
          color: "$violetText",
        },
      },
    },
  },
});

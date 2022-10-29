import { styled } from "@styles/stitches.config";

export const Button = styled("button", {
  borderRadius: "9999px",
  fontSize: "$16",
  fontWeight: 900,
  lineHeight: "$26",
  color: "$white",
  transition: "background-color 150ms",
  variants: {
    color: {
      teal: {
        "padding": "$16 $40",
        "backgroundColor": "$teal",
        "@hover": {
          "&:hover": {
            backgroundColor: "$tealHover",
          },
        },
      },
      violet: {
        "padding": "$16 $30",
        "backgroundColor": "$violet",
        "@hover": {
          "&:hover": {
            backgroundColor: "$violetHover",
          },
        },
      },
    },
  },
});

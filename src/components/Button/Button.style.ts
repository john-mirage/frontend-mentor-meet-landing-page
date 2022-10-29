import { styled } from "@styles/stitches.config";

export const Button = styled("button", {
  padding: "$16 $40",
  borderRadius: "9999px",
  fontSize: "$16",
  fontWeight: 900,
  lineHeight: "$26",
  color: "$white",
  transition: "background-color 150ms",
  variants: {
    color: {
      teal: {
        "backgroundColor": "$teal",
        "@hover": {
          "&:hover": {
            backgroundColor: "$tealHover",
          },
        },
      },
      violet: {
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

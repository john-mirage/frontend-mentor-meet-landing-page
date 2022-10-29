import { styled } from "@styles/stitches.config";
import BaseHeader from "@components/Header";

export const Container = styled("div", {
  minHeight: "100vh",
  paddingTop: "$48",
  backgroundColor: "$white",
});

export const Header = styled(BaseHeader, {
  marginBottom: "$54",
});

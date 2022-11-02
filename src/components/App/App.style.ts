import { styled } from "@styles/stitches.config";
import BaseHeader from "@components/Header";
import BaseHero from "@components/Hero";

export const Container = styled("div", {
  "paddingTop": "$48",
  "@lg": {
    paddingTop: "$80",
  },
});

export const Header = styled(BaseHeader, {
  "marginBottom": "$54",
  "@md": {
    marginBottom: "$64",
  },
});

export const Hero = styled(BaseHero, {
  marginBottom: "$64",
});

import { styled } from "@styles/stitches.config";

export const Container = styled("div", {
  position: "relative",
  width: "100%",
  height: "auto",
});

const Ground = styled("div", {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
});

export const Background = styled(Ground, {
  zIndex: 10,
});

export const Foreground = styled(Ground, {
  zIndex: 100,
});

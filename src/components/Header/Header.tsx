import * as Styled from "./Header.style";
import { ScreenReaderOnly } from "@styles/stitches.components";
import Logo from "@components/Logo";

interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  return (
    <Styled.Container className={className}>
      <Logo />
      <ScreenReaderOnly as="h1">Meet landing page</ScreenReaderOnly>
    </Styled.Container>
  );
};

export default Header;

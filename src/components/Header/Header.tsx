import * as Styled from "./Header.style";
import Logo from "@components/Logo";

interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  return (
    <Styled.Header className={className}>
      <Logo />
      <Styled.Title>Meet landing page</Styled.Title>
    </Styled.Header>
  );
};

export default Header;

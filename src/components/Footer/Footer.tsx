import Button from "@components/Button";
import * as Styled from "./Footer.style";

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.Container>
        <Styled.Title>Experience more together</Styled.Title>
        <Styled.Subtitle>
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </Styled.Subtitle>
        <Button type="button" size="lg" color="violet">
          Download <span>v1.3</span>
        </Button>
      </Styled.Container>
    </Styled.Footer>
  );
};

export default Footer;

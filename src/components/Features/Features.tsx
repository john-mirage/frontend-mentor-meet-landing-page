import Step from "@components/Step";
import * as Styled from "./Features.style";

const Features = () => {
  return (
    <Styled.Container>
      <Styled.ImageGrid></Styled.ImageGrid>
      <Styled.Overline>Built for modern use</Styled.Overline>
      <Styled.Title>Smarter meetings, all in one place</Styled.Title>
      <Styled.Subtitle>
        Send messages, share files, show your screen, and record your meetings —
        all in one workspace. Control who can join with invite-only team access,
        data encryption, and data export.
      </Styled.Subtitle>
      <Step stepNumber="02" />
    </Styled.Container>
  );
};

export default Features;

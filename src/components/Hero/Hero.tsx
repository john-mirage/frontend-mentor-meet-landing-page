import Step from "@components/Step";
import * as Styled from "./Hero.style";

const Hero = () => {
  return (
    <Styled.Section>
      <Styled.Placeholder>
        <Styled.Image />
      </Styled.Placeholder>
      <Styled.Column>
        <Styled.Title>Group Chat for Everyone</Styled.Title>
        <Styled.Subtitle>
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </Styled.Subtitle>
        <Styled.ButtonGroup>
          <Styled.DownloadButton type="button" color="teal">
            Download <Styled.Version>v1.3</Styled.Version>
          </Styled.DownloadButton>
          <Styled.AboutButton type="button" color="violet">
            What is it?
          </Styled.AboutButton>
        </Styled.ButtonGroup>
        <Step stepNumber="01" />
      </Styled.Column>
    </Styled.Section>
  );
};

export default Hero;

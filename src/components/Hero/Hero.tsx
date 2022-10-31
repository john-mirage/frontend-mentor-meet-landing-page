import Step from "@components/Step";
import * as Styled from "./Hero.style";
import heroMobileImage from "@images/tablet/image-hero.png";

interface Props {
  className?: string;
}

const Hero = ({ className }: Props) => {
  return (
    <Styled.Section className={className}>
      <Styled.Placeholder>
        <Styled.Image
          src={heroMobileImage}
          alt=""
          width="820"
          height="303"
          loading="eager"
          decoding="async"
          ariaHidden="true"
        />
      </Styled.Placeholder>
      <Styled.Container>
        <Styled.Title>Group Chat for Everyone</Styled.Title>
        <Styled.Subtitle>
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </Styled.Subtitle>
        <Styled.ButtonGroup>
          <Styled.DownloadButton type="button" size="lg" color="teal">
            Download <span>v1.3</span>
          </Styled.DownloadButton>
          <Styled.AboutButton type="button" size="md" color="violet">
            What is it?
          </Styled.AboutButton>
        </Styled.ButtonGroup>
        <Step stepNumber="01" />
      </Styled.Container>
    </Styled.Section>
  );
};

export default Hero;

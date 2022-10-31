import Button from "@components/Button";
import * as Styled from "./Footer.style";
import footerMobileImage from "@images/mobile/image-footer.jpg";
import footerTabletImage from "@images/tablet/image-footer.jpg";

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.Placeholder>
        <Styled.Image
          src={footerMobileImage}
          alt=""
          width="750"
          height="856"
          loading="lazy"
          decoding="async"
          ariaHidden="true"
          sources={[
            {
              srcSet: footerTabletImage,
              media: "(min-width: 768px)",
              width: "768",
              height: "428",
            },
          ]}
        />
      </Styled.Placeholder>
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

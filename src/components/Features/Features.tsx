import Step from "@components/Step";
import * as Styled from "./Features.style";
import { Blurhash } from "react-blurhash";
import womanInVideocallImage from "@images/desktop/image-woman-in-videocall.jpg";
import womenVideochattingImage from "@images/desktop/image-women-videochatting.jpg";
import menInMeetingImage from "@images/desktop/image-men-in-meeting.jpg";
import manTextingImage from "@images/desktop/image-man-texting.jpg";
import Image from "@components/Image";

const images = [
  {
    blurHash: "LGJQ~200~q^*xZxuR*xu00bIWB9F",
    src: womanInVideocallImage,
    alt: "woman in video call",
  },
  {
    blurHash: "LML;53?w?bE1%ft9tlRjo~WYM_t7",
    src: womenVideochattingImage,
    alt: "women videochatting",
  },
  {
    blurHash: "LSH__V~qD%-;^+RjM|xu9ZWDV@jY",
    src: menInMeetingImage,
    alt: "men in meeting",
  },
  {
    blurHash: "L6F=s]-7~pxuEL%g9F9F00OGkWM_",
    src: manTextingImage,
    alt: "man texting",
  },
];

const Features = () => {
  return (
    <Styled.Container>
      <Styled.ImageGrid>
        {images.map((image) => (
          <Styled.Placeholder
            key={image.alt}
            background={
              <Blurhash hash={image.blurHash} width="100%" height="100%" />
            }
          >
            <Image
              src={image.src}
              alt={image.alt}
              width="510"
              height="484"
              loading="lazy"
              decoding="async"
            />
          </Styled.Placeholder>
        ))}
      </Styled.ImageGrid>
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

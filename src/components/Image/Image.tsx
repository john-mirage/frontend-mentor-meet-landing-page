import { useCallback } from "react";
import heroMobileImage from "@images/tablet/image-hero.png";

interface Props {
  className?: string;
}

const Image = ({ className }: Props) => {
  const imageRef = useCallback((element: HTMLImageElement) => {
    if (element !== null) {
      element.addEventListener(
        "load",
        () => {
          const customEvent = new CustomEvent("placeholder-foreground-loaded", {
            bubbles: true,
          });
          element.dispatchEvent(customEvent);
        },
        { once: true }
      );
    }
  }, []);

  return (
    <img
      ref={imageRef}
      className={className}
      src={heroMobileImage}
      alt=""
      loading="eager"
      decoding="async"
    />
  );
};

export default Image;

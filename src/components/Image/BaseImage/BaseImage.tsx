import { useCallback } from "react";
import * as Styled from "./BaseImage.style";

const BaseImage = ({
  className,
  src,
  alt,
  width,
  height,
  loading,
  decoding,
  ariaHidden,
}: image.BaseImage) => {
  const imageRef = useCallback((element: HTMLImageElement) => {
    if (element !== null) {
      element.addEventListener(
        "load",
        () => {
          const customEvent = new CustomEvent("image-loaded", {
            bubbles: true,
          });
          element.dispatchEvent(customEvent);
        },
        { once: true }
      );
    }
  }, []);

  return (
    <Styled.Image
      ref={imageRef}
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      aria-label={ariaHidden}
      draggable="false"
    />
  );
};

export default BaseImage;

import { useCallback } from "react";

interface Props {
  className?: string;
}

const Picture = ({ className }: Props) => {
  const imageRef = useCallback((element: HTMLImageElement) => {
    if (element !== null) {
      element.addEventListener(
        "load",
        () => {
          const customEvent = new CustomEvent("placeholder-content-loaded", {
            bubbles: true,
          });
          element.dispatchEvent(customEvent);
        },
        { once: true }
      );
    }
  }, []);

  return (
    <picture className={className}>
      <img ref={imageRef} src="" alt="" />
    </picture>
  );
};

export default Picture;

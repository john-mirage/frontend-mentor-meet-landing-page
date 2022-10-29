import { ReactNode, useCallback, useState } from "react";
import * as Styled from "./Placeholder.style";
import { motion, useAnimation } from "framer-motion";

interface Props {
  className?: string;
  background?: ReactNode;
  children: ReactNode;
}

const MotionForeground = motion(Styled.Foreground);

const Placeholder = ({ className, background, children }: Props) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const controls = useAnimation();

  const handleLoadedForeground = () => {
    setTimeout(() => {
      controls.start({
        opacity: 1,
        transition: { duration: 0.8 },
      });
    }, 0);
  };

  const placeholderRef = useCallback((element: HTMLImageElement) => {
    if (element !== null) {
      element.addEventListener(
        "placeholder-foreground-loaded",
        handleLoadedForeground,
        { once: true }
      );
    }
  }, []);

  return (
    <Styled.Container ref={placeholderRef} className={className}>
      {!isLoaded && background && (
        <Styled.Background>{background}</Styled.Background>
      )}
      <MotionForeground
        initial={{ opacity: 0 }}
        animate={controls}
        onAnimationComplete={() => {
          setIsLoaded(true);
        }}
      >
        {children}
      </MotionForeground>
    </Styled.Container>
  );
};

export default Placeholder;

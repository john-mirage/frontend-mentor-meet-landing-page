import * as Styled from "./BasePicture.style";

interface Props extends image.BaseImage {
  sources: image.Source[];
}

const BasePicture = ({
  className,
  src,
  alt,
  width,
  height,
  loading,
  decoding,
  ariaHidden,
  sources,
}: Props) => {
  return (
    <picture className={className}>
      {sources.map((source) => (
        <source
          srcSet={source.srcSet}
          media={source.media}
          width={source.width}
          height={source.height}
        />
      ))}
      <Styled.Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        ariaHidden={ariaHidden}
      />
    </picture>
  );
};

export default BasePicture;

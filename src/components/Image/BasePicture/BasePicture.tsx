import BaseImage from "../BaseImage";

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
          key={source.srcSet}
          srcSet={source.srcSet}
          media={source.media}
          width={source.width}
          height={source.height}
        />
      ))}
      <BaseImage
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

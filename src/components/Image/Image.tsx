import BaseImage from "./BaseImage";
import BasePicture from "./BasePicture";

interface Props extends image.BaseImage {
  sources?: image.Source[];
}

const Image = ({
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
  if (sources) {
    return (
      <BasePicture
        className={className}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        ariaHidden={ariaHidden}
        sources={sources}
      />
    );
  }
  return (
    <BaseImage
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      ariaHidden={ariaHidden}
    />
  );
};

export default Image;

import BaseImage from "./BaseImage";
import BasePicture from "./BasePicture";

interface Source {
  srcSet: string;
  media: string;
  width: string;
  height: string;
}

interface Image {
  className?: string;
  src: string;
  alt: string;
  width: string;
  height: string;
  loading: "eager" | "lazy";
  decoding: "async" | "auto" | "sync";
  ariaHidden?: string;
}

interface Props extends Image {
  sources?: Source[];
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

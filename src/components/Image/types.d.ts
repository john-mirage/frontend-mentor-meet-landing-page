namespace image {
  interface Source {
    srcSet: string;
    media: string;
    width: string;
    height: string;
  }

  interface BaseImage {
    className?: string;
    src: string;
    alt: string;
    width: string;
    height: string;
    loading: "eager" | "lazy";
    decoding: "async" | "auto" | "sync";
    ariaHidden?: Booleanish | undefined;
  }

  interface BasePicture extends BaseImage {
    sources: Source[];
  }
}

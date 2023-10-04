import { ImagenResponsive } from "./ImagenResponsive";

export const ImagenHistoria = ({ src, alt, srcSet }) => {
  // console.log({item})
  return (
    <div className="mb-5 p-2">
      <ImagenResponsive
        src={src}
        alt={alt}
        srcSet={srcSet}
        styles={{boxShadow: "5px 5px 6px 5px rgba(128, 128, 128, 0.443)"}}
      />
    </div>
  );
};


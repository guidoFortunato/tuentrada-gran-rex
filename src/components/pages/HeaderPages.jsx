import { ImagenResponsive } from "../ImagenResponsive";

export const HeaderPages = ({ src, srcSet, alt, title }) => {
  return (
    <section className="relative mb-2">
      <ImagenResponsive
        src={src}
        srcSet={srcSet}
        alt={alt}
        className={"h-[35vh] w-full object-cover brightness-[50%]"}
      />
      <h2 className="absolute top-0 bottom-0 left-0 right-0 text-2xl lg:text-3xl flex lg:justify-start justify-center items-center lg:items-end text-white p-10 my-3">
        {title}
      </h2>
    </section>
  );
};

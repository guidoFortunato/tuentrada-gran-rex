export const ImagenResponsive = ({ src, srcSet, alt, className }) => {
  return (
    <img
      src={src ? src : undefined}
      srcSet={srcSet ? srcSet : undefined}
      alt={alt ? alt : undefined}
      className={className ? className : undefined}
    />
  );
};

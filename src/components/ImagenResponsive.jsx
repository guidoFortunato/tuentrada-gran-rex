import PropTypes from 'prop-types';

export const ImagenResponsive = ({  alt, className, src, srcSet, styles }) => {
  return (
    <img
      alt={alt ? alt : undefined}
      className={className ? className : undefined}
      src={src ? src : undefined}
      srcSet={srcSet ? srcSet : undefined}
      style={ styles ? styles : undefined }
    />
  );
};

ImagenResponsive.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  srcSet: PropTypes.string,
  styles: PropTypes.object, // PropTypes para asegurar que styles sea un objeto
};

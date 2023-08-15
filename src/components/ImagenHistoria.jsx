export const ImagenHistoria = ({ src, alt }) => {
  // console.log({item})
  return (
    <div className="mb-5 p-2">
      <img
        style={{
          boxShadow: "5px 5px 6px 5px rgba(128, 128, 128, 0.443)",
        }}
        src={src}
        alt={alt}
      />
    </div>
  );
};

export const ImagenHistoria = ({ src }) => {
  return (
    <div className="mb-5 p-2">
      <img
        style={{
          boxShadow: "5px 5px 6px 5px rgba(128, 128, 128, 0.443)",
        }}
        src={src}
        alt="img-rex"
      />
    </div>
  );
};

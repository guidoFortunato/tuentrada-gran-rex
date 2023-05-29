export const ImagenHistoria = ({ src }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-5 p-2 galeria-img">
      <img
        style={{
          boxShadow: "5px 5px 6px 5px rgba(128, 128, 128, 0.443)",
          width: "250px",
        }}
        src={src}
        alt="img-rex"
      />
    </div>
  );
};

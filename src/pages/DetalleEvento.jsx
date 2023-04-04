import '../css/detalleevento.css'

export const DetalleEvento = () => {
  return (
    <>
      <div className="container my-5">
        <h2 style={{ fontSize: "25px" }}>Título del evento</h2>
        <hr />
        <div className="row">
          <div className="col-12 col-lg-6 text-center">
            <h3>Imagen</h3>
          </div>
          <div className="col-12 col-lg-6 text-center">
            <h3>Información general</h3>
          </div>
        </div>
      </div>
    </>
  );
};

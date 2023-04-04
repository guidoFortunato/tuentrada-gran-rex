export const CardEvento = ({ img, status, title, date, time }) => {
  return (
    <article
      className="col-12 col-md-6 col-lg-4 col-xl-3"
      style={{ textAlign: "center" }}
    >
      <div className="card" style={{ position: "relative" }}>
        <img
          src={img}
          className="card-img-top card-img-bottom"
          alt="img logo"
          // style={{ width: "80%" }}
        />
        <div>
          <h5
            className="btn"
            style={{
              border: `1px solid ${status === "Agotado" ? "orange" : status === "Reprogramado" ? "blue" : status === "Cancelado" ? "red" : "green"}`,
              background: `${status === "Agotado" ? "orange" : status === "Reprogramado" ? "blue" : status === "Cancelado" ? "red" : "green"}`,
              color: "white",
              position: "absolute",
              top: "10px",
              left: "10px",
              fontSize: "10px",
            }}
          >
            {status}
          </h5>
        </div>
        <div style={{ padding: "5px" }}>
          <h3 style={{ fontWeight: "bold", padding: "5px" }}>{title}</h3>
          <h4 style={{ padding: "5px 0" }}>
            {date} <br /> {time}
          </h4>
        </div>
      </div>
    </article>
  );
};

export const EventCanceled = () => {
  return (
    <Link to={linkEvento} className={`${"linkEvento"}`}>
      <img
        src={img}
        className={`${"card-img-top card-img-bottom"}`}
        alt="img logo"
      />
      <div>
        <h5
          className="btn-status"
          style={{
            border: "1px solid green",
            background: "green",
            color: "#fff",
            position: "absolute",
            top: "10px",
            left: "10px",
            fontSize: "10px",
          }}
        >
          {reasonSoldOut
            ? "Agotado"
            : reasonCanceled
            ? "Cancelado"
            : reasonSuspended
            ? "Suspendido"
            : "No disponible"}
        </h5>
      </div>
      <div style={{ padding: "5px" }}>
        <h3 className="h3-card" style={{ fontWeight: "bold", padding: "5px" }}>
          {title.toUpperCase()}
        </h3>
      </div>
    </Link>
  );
};

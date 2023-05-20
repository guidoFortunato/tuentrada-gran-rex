export const EventNotAvailable = ({ img, title }) => {
  return (
    <div className={"linkEvento cursor-default"}>
      <img
        src={img}
        className={"card-img-top card-img-bottom cursor-default img-disabled"}
        alt="img logo"
      />
      <div>
        <h5
          className="btn-status"
          style={{
            border: `1px solid grey`,
            background: "gray",
            color: "#fff",
            position: "absolute",
            top: "10px",
            left: "10px",
            fontSize: "10px",
          }}
        >
          No disponible
        </h5>
      </div>
      <div style={{ color: "gray", padding: "5px" }}>
        <h3 className="h3-card" style={{ fontWeight: "bold", padding: "5px" }}>
          {title.toUpperCase()}
        </h3>
      </div>
    </div>
  );
};

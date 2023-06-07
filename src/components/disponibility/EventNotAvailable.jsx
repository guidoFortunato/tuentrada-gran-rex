export const EventNotAvailable = ({ img, title }) => {
  return (
    <>
    <figure className="relative max-w-sm cursor-default">
        <div>
          <img className="rounded-lg md:rounded-none opacity-40" src={img} alt={title} />
        </div>
        <button type="button" className="absolute top-1 left-1 text-white bg-red-600 cursor-default rounded-2xl text-xs px-3 py-1.5 text-center mr-2 mb-2">No disponible</button>
        {/* <figcaption className="absolute px-4 text-lg text-white bottom-6">
              <p>
                Do you want to get notified when a new component is added to
                Flowbite?
              </p>
            </figcaption> */}
      </figure>
    {/* <div className={"linkEvento cursor-default"}>
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
    </div> */}
          </>
  );
};

import { useContext } from "react";
import { Link } from "react-router-dom";
import { EventosContext } from "../../context/EventosProvider";

export const EventAvailable = ({ linkEvento, img, title, data }) => {
  const { setIdProducto } = useContext(EventosContext);

  return (
    <>
      <figure className="relative max-w-sm cursor-pointer">
        <Link to={linkEvento}>
          <img className="rounded-lg md:rounded-none" src={img} alt={title} />
        </Link>
        <button type="button" className="absolute top-1 left-1 text-white bg-green-600 rounded-2xl text-xs px-3 py-1.5 text-center mr-2 mb-2">Disponible</button>
        {/* <figcaption className="absolute px-4 text-lg text-white bottom-6">
              <p>
                Do you want to get notified when a new component is added to
                Flowbite?
              </p>
            </figcaption> */}
      </figure>
      {/* <Link to={linkEvento} className={"linkEvento"} onClick={()=>setIdProducto(data.id)} >
      <img
        src={img}
        className={"card-img-top card-img-bottom"}
        alt={title}
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
          Disponible
        </h5>
      </div>
      <div style={{ padding: "5px" }}>
        <h3 className="h3-card" style={{ fontWeight: "bold", padding: "5px" }}>
          {title.toUpperCase()}
        </h3>
      </div>
    </Link> */}
    </>
  );
};

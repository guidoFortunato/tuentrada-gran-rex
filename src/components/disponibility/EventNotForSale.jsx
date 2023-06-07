import { useContext } from "react";
import { Link } from "react-router-dom";
import { EventosContext } from "../../context/EventosProvider";

export const EventNotForSale = ({ img, title, reasonSoldOut, linkEvento, reasonCanceled, reasonSuspended, data, }) => {
  const { handleIdProducto } = useContext(EventosContext);
  return (
    <>
      <figure className="relative max-w-sm cursor-pointer">
        <Link to={linkEvento}>
          <img className="rounded-lg md:rounded-none" src={img} alt={title} />
        </Link>
        <button
          type="button"
          className="absolute top-1 left-1 text-white bg-gray-600 rounded-2xl text-xs px-3 py-1.5 text-center mr-2 mb-2"
          style={{
            border: `1px solid ${
              reasonSoldOut
              ? "#E02424"
              : "#4B5563"
            }`,
            background: `${
              reasonSoldOut
              ? "#E02424"
              : "#4B5563"
            }`,
          }}
        >
          {
            reasonSoldOut
            ? "Agotado"
            : reasonCanceled
            ? "Cancelado"
            : reasonSuspended
            ? "Suspendido"
            : "No disponible"
          }
        </button>
        {/* <figcaption className="absolute px-4 text-lg text-white bottom-6">
              <p>
                Do you want to get notified when a new component is added to
                Flowbite?
              </p>
            </figcaption> */}
      </figure>
      {/* <Link to={linkEvento} className={`${"linkEvento"}`} onClick={()=>handleIdProducto(data.id)}>
      <img
        src={img}
        className={`${"card-img-top card-img-bottom"}`}
        alt="img logo"
        />
      <div>
        <h5
          className="btn-status"
          style={{
            border: `1px solid ${
              reasonSoldOut
              ? "red"
              : reasonCanceled
              ? "grey" 
              : reasonSuspended
              ? "grey"
              : "grey"
            }`,
            background: `${
              reasonSoldOut
              ? "red"
              : reasonCanceled
              ? "grey" 
              : reasonSuspended
              ? "grey"
              : "grey"
            }`,
            color: "#fff",
            position: "absolute",
            top: "10px",
            left: "10px",
            fontSize: "10px",
          }}
          >
          {
            reasonSoldOut
            ? "Agotado"
            : reasonCanceled
            ? "Cancelado"
            : reasonSuspended
            ? "Suspendido"
            : "No disponible"
          }
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

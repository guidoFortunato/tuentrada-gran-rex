import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import DOMPurify from "dompurify";

import { EventosContext } from "../context/EventosProvider";
import { Accordion, Spinner } from "./";
import { getData, getEnvVariables } from "../helpers";

// import "../css/detalleevento.css";

const { VITE_API_EVENTOS, VITE_EMAIL, VITE_PASS } = getEnvVariables();

export const DetalleEvento = () => {
  const [data, setData] = useState(null);
  const [itemsAccordion, setItemsAccordion] = useState(null);
  const { idVenue, dataInfoGeneral, idProducto } = useContext(EventosContext);
  const { url } = dataInfoGeneral;
  const { name, id } = useParams();
  const navigate = useNavigate();
  // console.log({ data });
  // console.log({name})
  // console.log({idProducto})

  const lastPath = localStorage.getItem("lastPath") || "/";

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  const returnLastPath = () => {
    navigate(lastPath);
  };

  useEffect(() => {
    if (idVenue !== "") {
      const getInfo = async () => {
        const { data } = await getData(
          VITE_API_EVENTOS + idVenue + "/details/" + id,
          VITE_EMAIL,
          VITE_PASS
        );
        // console.log({ data });
        setData(data);
        setItemsAccordion({
          performances: data.performances,
          history: data.history,
          promotion: data.promotion,
          recomendation: data.recomendation,
          extra: data.extra,
          mediaJson: data.mediaJson,
          socialNetworks: data.socialNetworks,
          disponibility: data.disponibility,
        });
      };
      getInfo();
    }
  }, [idVenue, id, name]);

  // console.log({dataInfoGeneral})

  // itemsAccordion.forEach( item => console.log(item) )

  if (data === null || dataInfoGeneral.length === 0) return <Spinner />;

  if (itemsAccordion === null) return <Spinner />;

  if (data === undefined || data.length === 0) return <Navigate to="/" />;

  return (
    <>
      <div className="container mx-auto mb-5 px-3 xl:w-2/3">
        <section
          className={`bg-[url("assets/images/responsive.jpg")]  lg:bg-[url("assets/images/desktop.jpg")]  bg-no-repeat bg-cover bg-center mx-auto`}
        >
          <div
            className={`min-h-[40vh] flex justify-center items-start flex-col`}
          ></div>
        </section>
        <h2
          // style={{ color: dataInfoGeneral.colorSiteName }}
          className="text-3xl  mt-4 mb-2"
        >
          {data?.name}
        </h2>
        <div className="grid grid-cols-1">
          <p
            className="text-base"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?.description),
            }}
          ></p>
        </div>

        <Accordion itemsAccordion={itemsAccordion} dataEvento={data} />
      </div>
          
    </>
  );
};

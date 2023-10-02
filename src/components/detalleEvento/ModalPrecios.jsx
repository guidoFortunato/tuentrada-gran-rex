import React, { useContext } from "react";
import { Modal } from "flowbite-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { EventosContext } from "../../context/EventosProvider";
import { TablaPrecios } from "./TablaPrecios";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { RiRestartFill } from "react-icons/ri";
import { Spinner } from "../Spinner";
import { BotonCompra } from "../accordion";

const nombresMeses = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];

export const ModalPrecios = ({
  performances,
  openModal,
  setOpenModal,
  dataEvento,
}) => {
  const { dataInfoGeneral } = useContext(EventosContext);
  // console.log({ dataInfoGeneral });
  // console.log({ performances });
  console.log({ dataEvento });

  if (dataEvento === null) return <Spinner />;

  const venueImagePerformance = performances?.venueImage;
  const venueImageProduct = dataEvento?.product.venueImage;
  const venueImageSite = dataInfoGeneral?.venueImage;
  const enableVenueImage = dataEvento?.product.enableVenueImage;
  const fecha = new Date(performances?.start);


  const dia = fecha.getDate();
  const mes = fecha.getMonth();
  const año = fecha.getFullYear();
  const hora = fecha.getHours();
  const minutos = performances?.start.split("T")[1].split(":")[1]


  const fechaFormateada = `${dia} ${nombresMeses[mes]} ${año} - ${hora}:${minutos}hs`;

  return (
    <>
      <Modal
        dismissible
        show={openModal}
        size={
          enableVenueImage === 1 &&
          (venueImagePerformance || venueImageProduct || venueImageSite)
            ? "7xl"
            : "3xl"
        }
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>
          <div className="flex flex-col justify-between">
            <div className="mb-3">
              <span className="text-base">{fechaFormateada}</span>
            </div>

            <div className="mt-3">
              <BotonCompra performances={performances} />
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6 w-full">
            <div
              className={`${
                enableVenueImage === 1 &&
                (venueImagePerformance ||
                  venueImageProduct ||
                  venueImageSite) &&
                "grid grid-cols-1 lg:grid-cols-2 gap-6"
              }  relative overflow-x-auto`}
            >
              <div>
                <TablaPrecios
                  performances={performances}
                  dataEvento={dataEvento}
                />
              </div>

              {enableVenueImage === 0 ? null : venueImagePerformance.length ===
                  0 &&
                venueImageProduct.length === 0 &&
                venueImageSite.length === 0 ? null : (
                <div className="relative mt-10 lg:mt-0">
                  {/* <img
                    src={
                      venueImagePerformance
                        ? venueImagePerformance
                        : venueImageProduct
                    }
                    alt={`plano ${dataInfoGeneral.pages[0].title.toLowerCase()}`}
                  /> */}
                  <TransformWrapper>
                    {({ zoomIn, zoomOut, resetTransform }) => (
                      <div className="relative">
                        <div className="absolute  top-0 mt-1  z-50">
                          <button
                            onClick={() => zoomIn()}
                            className="text-2xl mr-1"
                          >
                            <AiFillPlusCircle />
                          </button>
                          <button
                            onClick={() => zoomOut()}
                            className="text-2xl mr-1"
                          >
                            <AiFillMinusCircle />
                          </button>
                          <button
                            onClick={() => resetTransform()}
                            className="text-2xl"
                          >
                            <RiRestartFill />
                          </button>
                        </div>
                        <TransformComponent>
                          <img
                            src={
                              venueImagePerformance
                                ? venueImagePerformance
                                : venueImageProduct
                                ? venueImageProduct
                                : venueImageSite
                            }
                            alt={`plano ${dataInfoGeneral.pages[0].title.toLowerCase()}`}
                          />
                        </TransformComponent>
                      </div>
                    )}
                  </TransformWrapper>
                </div>
              )}
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer></Modal.Footer> */}
      </Modal>
    </>
  );
};

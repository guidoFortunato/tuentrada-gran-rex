import React, { useContext } from "react";
import { Modal } from "flowbite-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { EventosContext } from "../../context/EventosProvider";
import { TablaPrecios } from "./TablaPrecios";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { RiRestartFill } from "react-icons/ri";
import { Spinner } from "../Spinner";

export const ModalPrecios = ({
  performances,
  openModal,
  setOpenModal,
  dataEvento,
}) => {
  const { dataInfoGeneral } = useContext(EventosContext);
  // console.log({ dataInfoGeneral });
  // console.log({ performances });
  // console.log({dataEvento})

  if (dataEvento === null) return <Spinner />;

  const venueImagePerformance = performances?.venueImage;
  const venueImageProduct = dataEvento?.product.venueImage;

  return (
    <>
      <Modal
        dismissible
        show={openModal}
        size={venueImagePerformance || venueImageProduct ? "7xl" : "3xl"}
        onClose={() => setOpenModal(false)}
      >
        {/* <Modal.Header className="uppercase">{dataEvento?.product.name.toLowerCase().includes("meet and greet") ? "precio" : "precios y ubicaciones"}</Modal.Header> */}
        <Modal.Body>
          <div className="space-y-6 w-full">
            <div
              className={`${
                (venueImagePerformance || venueImageProduct) &&
                "grid grid-cols-1 lg:grid-cols-2 gap-6"
              }  relative overflow-x-auto`}
            >
              <div>
                <TablaPrecios
                  performances={performances}
                  dataEvento={dataEvento}
                />
              </div>

              {venueImagePerformance.length === 0 &&
              venueImageProduct.length === 0 ? null : (
                <div className="relative">
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

import React, { useContext } from "react";
import { Modal } from "flowbite-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { EventosContext } from "../../context/EventosProvider";
import { TablaPrecios } from "./TablaPrecios";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { RiRestartFill } from "react-icons/ri";


export const ModalPrecios = ({ performances, openModal, setOpenModal, dataEvento }) => {
  const { dataInfoGeneral } = useContext(EventosContext);
  // console.log({ dataInfoGeneral });
  // console.log({ performances });
  // console.log({dataEvento})

  return (
    <>
      <Modal
        dismissible
        show={openModal}
        size={"7xl"}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>Precios y Ubicaciones</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 w-full">
            <div className="relative overflow-x-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <TablaPrecios performances={performances} />
              </div>

              {/* <img
                  src={performances.venueImage}
                  alt={`plano ${dataInfoGeneral.pages[0].title.toLowerCase()}`}
                  className="w-full object-cover"
                /> */}
              <TransformWrapper>
                {({ zoomIn, zoomOut, resetTransform }) => (
                  <div className="relative">
                    <div className="absolute  top-0 mt-1  z-50">
                     
                      
             
                     <button onClick={() => zoomIn()} className="text-2xl mr-1"><AiFillPlusCircle /></button>
                      <button onClick={() => zoomOut()} className="text-2xl mr-1"><AiFillMinusCircle /></button>
                      <button onClick={() => resetTransform()} className="text-2xl"><RiRestartFill /></button> 
                    </div>
                    <TransformComponent>
                      <img
                        src={performances.venueImage ? performances.venueImage : dataEvento.product.venueImage}
                        alt={`plano ${dataInfoGeneral.pages[0].title.toLowerCase()}`}
                      />
                    </TransformComponent>
                  </div>
                )}
              </TransformWrapper>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

import React, { useContext } from "react";
import { Modal } from "flowbite-react";
import { TablaPrecios } from "./";
import { EventosContext } from "../context/EventosProvider";

export const ModalPrecios = ({ performances, openModal, setOpenModal }) => {
  const { dataInfoGeneral } = useContext(EventosContext);
  // console.log({ dataInfoGeneral });
  // console.log({ performances });
  return (
    <>
      <Modal dismissible show={openModal} size={"4xl"} onClose={() => setOpenModal(false)}>
        <Modal.Header>Precios y Ubicaciones</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 w-full">
            <div className="relative overflow-x-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <TablaPrecios performances={performances} />
              </div>
              <div>
                <img
                  src={performances.venueImageMedium}
                  alt={`plano ${dataInfoGeneral.pages[0].title.toLowerCase()}`}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

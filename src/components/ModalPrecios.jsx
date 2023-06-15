import React from "react";
import { Modal } from "flowbite-react";
import { TablaPrecios } from "./";

export const ModalPrecios = ({ performances, openModal, setOpenModal }) => {
  return (
    <>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Precios y Ubicaciones</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="relative overflow-x-auto">
              <TablaPrecios performances={performances} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

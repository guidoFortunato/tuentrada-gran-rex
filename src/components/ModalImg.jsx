import ubicaciones from "../assets/images/rex2.jpg";

import '../css/modal.css'

export const ModalImg = ({id, imgPlano}) => {
  return (
    <>
      <div
        className="modal fade"
        id={id}
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content custom-size">
            <div className="modal-body h-modal">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <img
                src={imgPlano}
                alt="mapa ubicaciones"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

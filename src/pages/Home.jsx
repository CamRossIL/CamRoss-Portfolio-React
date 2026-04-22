import Hero from "../components/Hero";
import SectionHome from "../components/SectionHome";
import { useState } from "react";

function Home() {
  /*créer state affichage modal*/
  const [showModal, setShowModal] = useState(false);

  /*créer fonctions ouvrir modal */
  function openModal() {
    setShowModal(true);
  }

  function closeModal(){
    setShowModal(false)
  }

  return (
    <div>
      <Hero openModal={openModal} />
      <SectionHome />
      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title"></h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

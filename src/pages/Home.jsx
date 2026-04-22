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

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div>
      <Hero openModal={openModal} />
      <SectionHome />
      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog modal-lg">
            <div className="modal-content bg-dark text-white">
              <div className="modal-header">
                <h5 className="modal-title">Mon profil GitHub</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={closeModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12 col-md-6"></div>
                  <div className="col-12 col-md-6">
                    <p className="border-bottom">1</p>
                    <p className="border-bottom ">2</p>
                    <p className="border-bottom ">3</p>
                    <p className="border-bottom ">4</p>
                    <p className="border-bottom ">5</p>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={closeModal}>
                  Fermer
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

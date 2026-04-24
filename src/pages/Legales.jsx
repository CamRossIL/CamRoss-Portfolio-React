import Title from "../components/Title";
import { Helmet } from "react-helmet-async";

function Legales() {
  return (
    <div>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Title title="Mentions légales" text="" />
      <div className="container my-5">
        <div className="col-lg-12">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Editeur du site
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div>
                    <h3>John Doe</h3>
                    <p className="mb-0 p-1">
                      <i className="bi bi-map fst-normal"></i>
                      <span> 40 rue Laure Diebold </span>
                    </p>
                    <p className="mb-0">
                      <i className="bi bi-geo-alt fst-normal"></i>
                      <span> 69009,Lyon France </span>
                    </p>
                    <p className="mb-0">
                      <i className="bi bi-phone"></i>
                      <span> 10 20 30 40 50</span>
                    </p>
                    <p>
                      <i className="bi bi-envelope-at"></i>
                      <span> john.doe@gmail.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Hébergeur
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <h3 className="fw-bold">alwaysdata</h3>
                  <address>
                    91 rue du Faubourg Saint-Honoré, 75008 Paris
                  </address>
                  <i className="bi bi-globe"></i>
                  <a href="https://www.alwaysdata.com"> www.alwaysdata.com</a>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Crédits
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <h3 className="fw-bold">Crédits</h3>
                  <p>
                    Ce site a été réalisé par John Doe, étudiant au{" "}
                    <a href="https://www.centre-europeen-formation.fr/">
                      Centre européen de formation
                    </a>
                  </p>
                  <p className="fst-italic">
                    Les images utilises sur ce site sont libres de droits et ont
                    été obtenues sur le site{" "}
                    <a href="https://pixabay.com/fr/">Pixabay</a>
                  </p>
                  <p className="fst-italic">
                    Le favicon de ce site a été fourni par{" "}
                    <a
                      href="https://www.flaticon.com/de/kostenlose-icons/john-doe"
                      className="fst-italic"
                    >
                      John Doe icons erstellt von Freepik - Flaticon
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Legales;

import Title from "../components/Title";

function Legales() {
  return (
    <div>
      <div>
        <Title title="Mentions légales" text="" />
      </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Legales;

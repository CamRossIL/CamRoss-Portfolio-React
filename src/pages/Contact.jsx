import Title from "../components/Title";
import Soustitle from "../components/Soustitle";

function Contact() {
  return (
    <div>
      <Title
        title="Contact"
        text="Pour me contacter en vue d'un entretien ou d'une future collaboration, 
      merci de remplir le formulaire de contact."
      />
      <div className="container my-5 p-3">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-md-6">
                <Soustitle title="Formulaire de contact" />
                {/* formulaire de contact */}
                <form className="mt-5">
                  <div className="mb-2">
                    <label
                      htmlFor="name"
                      className="form-label visually-hidden"
                    >
                      {/*visually-hidden pour garder accessibilité avec label 
                      mais sans le voir à l'écran */}
                      Nom
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div className="mb-2">
                    <label
                      htmlFor="email"
                      className="form-label visually-hidden"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Votre adresse email"
                    />
                  </div>

                  <div className="mb-2">
                    <label htmlFor="tel" className="form-label visually-hidden">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="tel"
                      id="tel"
                      className="form-control"
                      placeholder="Votre numéro de téléphone"
                    />
                  </div>

                  <div className="mb-2">
                    <label
                      htmlFor="object"
                      className="form-label visually-hidden"
                    >
                      Object
                    </label>
                    <input
                      type="text"
                      name="object"
                      id="object"
                      className="form-control"
                      placeholder="Sujet"
                    />
                  </div>

                  <div className="mb-2">
                    <label
                      htmlFor="message"
                      className="form-label visually-hidden"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="12"
                      placeholder="Votre message"
                    ></textarea>
                  </div>
                  <div className="text-center mt-2">
                    <button type="submit" className="btn btn-primary">
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-12 col-md-6">
                <Soustitle title="Mes coordonnées" />
                <div>
                  <h3 className="fw-bold mt-5">John Doe</h3>
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
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626965754038!2d4.796403975777966!3d45.77866571240285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1775637719813!5m2!1sfr!2sfr"                    
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

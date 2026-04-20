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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

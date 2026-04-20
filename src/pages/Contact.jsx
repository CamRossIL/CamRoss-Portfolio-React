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

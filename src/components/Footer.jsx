import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <h4 className="fw-bold py-2">John Doe</h4>
            <address className="mb-0">
              40 rue Laure Diebold <br />
              69009,Lyon France
            </address>
            <p className="mb-0">10 20 30 40 50</p>
            <p>john.doe@gmail.com</p>
            <a
              className="linkssocials"
              href="https://github.com/github-john-doe"
              target="_blank"
              rel="noopener noreferrer no follow"
            >
              <i className="bi bi-github me-3"></i>
            </a>

            <a
              className="linkssocials"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer no follow"
            >
              <i className="bi bi-twitter me-3"></i>
            </a>

            <a
              className="linkssocials"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer no follow"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
          <div className="col-12 col-md-4">
            <h4 className="fw-bold py-2">Liens utiles</h4>
            <Link to="/" className="d-block links linksfooter">
              Accueil
            </Link>
            <Link to="/services" className="d-block links linksfooter">
              Services
            </Link>
            <Link to="/portfolio" className="d-block links linksfooter">
              Portfolio
            </Link>
            <Link to="/contact" className="d-block links linksfooter">
              Me contacter
            </Link>
            <Link to="/legales" className="d-block links linksfooter">
              Mentions Légales
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <h4 className="fw-bold py-2">Mes dernières réalisations</h4>
            <Link to="/portfolio" className="d-block links linksfooter">
              Fresh Food
            </Link>
            <Link to="/portfolio" className="d-block links linksfooter">
              Restaurant Akira
            </Link>
            <Link to="/portfolio" className="d-block links linksfooter">
              Espace bien-etre
            </Link>
            <Link to="/portfolio" className="d-block links linksfooter">
              SEO
            </Link>
            <Link to="/portfolio" className="d-block links linksfooter">
              Création d'une API
            </Link>
            <Link to="/portfolio" className="d-block links linksfooter">
              Maquette d'un site
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

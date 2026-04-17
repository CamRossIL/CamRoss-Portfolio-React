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
              
              href="https://github.com/github-john-doe"
              target="_blank"
              rel="noopener noreferrer no follow"
            >
              <i className="bi bi-github me-3"></i>
            </a>

            <a
  
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer no follow"
            >
              <i className="bi bi-twitter me-3"></i>
            </a>

            <a
              
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer no follow"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
          <div className="col-12 col-md-4">
            <h4 className="fw-bold py-2">Liens utiles</h4>
            <Link to="/" className="d-block">
              Accueil
            </Link>
            <Link to="/services" className="d-block">
              Services
            </Link>
            <Link to="/portfolio" className="d-block">
              Portfolio
            </Link>
            <Link to="/contact" className="d-block">
              Me contacter
            </Link>
            <Link to="/legales" className="d-block">
              Mentions Légales
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <h4 className="fw-bold py-2">Mes dernières réalisations</h4>
            <Link to="/portfolio" className="d-block">
              Fresh Food
            </Link>
            <Link to="/portfolio" className="d-block">
              Restaurant Akira
            </Link>
            <Link to="/portfolio" className="d-block">
              Espace bien-etre
            </Link>
            <Link to="/portfolio" className="d-block">
              SEO
            </Link>
            <Link to="/portfolio" className="d-block">
              Création d'une API
            </Link>
            <Link to="/portfolio" className="d-block">
              Maquette d'un site
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

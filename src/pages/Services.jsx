import Banniere from "../components/Banniere";
import Title from "../components/Title";
import CardService from "../components/CardService";

function Services() {
  return (
    <div>
      <Banniere />
      <Title
        title="Mon offre de service"
        text="Voici les prestations sur lesquelles je peux intervenir"
      />
      <div className="p-5 me-5">
        <div className="row g-3">
          <div className="col-12 col-md-4">
            <CardService
              icon="brush"
              title="UX design"
              text="L'UX design est une discipline qui consiste à 
              concevoir des produits (sites web, applications mobiles, logiciels, objets connectés etc.)
               en placant l'utilisateur au centre des préoccupations. 
               L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible. "
            />
          </div>
          <div className="col-12 col-md-4">
            <CardService
              icon="code-slash"
              title="Développement web"
              text="Le développement des sites web consiste à créer des sites internet 
              en utilisant des languages de programmation (HTML, CSS, Javascript, PHP, etc.) 
              et des frameworks (Bootstrap, React, Angular, etc.)"
            />
          </div>
          <div className="col-12 col-md-4">
            <CardService
              icon="search"
              title="Référencement"
              text="Le Référencement naturel (SEO) est une technique qui consiste à optimiser
              un site web pour le faire remonter dans les résultats des moteurs de recherche
              (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs
              qualifiés sur le site."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

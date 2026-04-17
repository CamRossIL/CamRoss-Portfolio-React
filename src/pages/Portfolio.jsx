import Banniere from "../components/Banniere";
import Title from "../components/Title";
import CardPortfolio from "../components/CardPortfolio";
import freshfood from "../assets/images/portfolio/fresh-food.jpg";
import restjap from "../assets/images/portfolio/restaurant-japonais.jpg";
import espacebienetre from "../assets/images/portfolio/espace-bien-etre.jpg";
import seo from "../assets/images/portfolio/seo.jpg";
import coder from "../assets/images/portfolio/coder.jpg";
import screens from "../assets/images/portfolio/screens.jpg";

function Portfolio() {
  return (
    <div>
      <Banniere />
      <Title
        title="Portfolio"
        text="Voici quelques-unes de mes réalisations."
      />
      <div className="p-5 m-5">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <CardPortfolio
              img={freshfood}
              imgname="freshfood"
              title="Fresh Food"
              text="Site de vente de produits frais en ligne"
              note="Site réalisé avec PHP et MySQUL"
            />
          </div>
          <div className="col-12 col-md-4">
            <CardPortfolio
              img={restjap}
              imgname="restaurantjaponais"
              title="Restaurant Akira"
              text="Site de vente de produits frais en ligne"
              note="Site réalisé avec Wordpress"
            />
          </div>
          <div className="col-12 col-md-4">
            <CardPortfolio
              img={espacebienetre}
              imgname="espacebienetre"
              title="Espace bien-etre"
              text="Site de vente de produits frais en ligne"
              note="Site réalisé avec LARAVEL"
            />
          </div>
          <div className="col-12 col-md-4">
            <CardPortfolio
              img={seo}
              imgname="seo"
              title="SEO"
              text="Amélioration du référencement d'un site e-commerce"
              note="Utilisation des outils SEO"
            />
          </div>
          <div className="col-12 col-md-4">
            <CardPortfolio
              img={coder}
              imgname="coder"
              title="Création d'une API"
              text="Création d'une API RESTFULL publique"
              note="PHP et SYMFONY"
            />
          </div>
          <div className="col-12 col-md-4">
            <CardPortfolio
              img={screens}
              imgname="screens"
              title="Maquette d'un site web"
              text="Création d'un prototipe d'un site"
              note="Realisé avec FIGMA"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

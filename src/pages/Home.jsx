import Hero from "../components/Hero";
import SectionHome from "../components/SectionHome";
import { useState, useEffect } from "react";

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
  /*créer le state pour stocker données GitHub du user, 
  initialement il n'y a aucune donnée */
  const [user, setUser] = useState(null);

   /*créer fonction pour aller chercher et stocker les données, puis executér fonction */ 
/*utiliser useEffect pour que donnees une seule fois au chargement */
 useEffect(() => {
    const getUser = async () => {
      const res = await fetch("https://api.github.com/users/github-john-doe");
      const json = await res.json();
      setUser(json);
    };
    getUser();
  }, []);

  

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
                   <div className="col-12 col-md-6">
                {user && (
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="img-fluid"
                  />
                )}
              </div>
                  <div className="col-12 col-md-6">
                <p className="border-bottom">
                  <i className="bi bi-person me-2"></i>
                  {user && (
                    <a href={user.html_url} target="_blank" rel="noreferrer">
                      {user.name}
                    </a>
                  )}
                </p>
                <p className="border-bottom ">
                  <i className="bi bi-geo-alt me-2"></i>
                  <span>{user && user.location}</span>
                </p>
                <p className="border-bottom ">
                  <i className="bi bi-card-text me-2"></i>
                  {user && user.bio}
                </p>
                <p className="border-bottom ">
                  <i className="bi bi-box me-2"></i>
                  <span>Repositories : {user && user.public_repos}</span>
                </p>
                <p className="border-bottom ">
                  <i className="bi bi-people me-2"></i>
                  <span>Followers : {user && user.followers}</span>
                </p>
                <p>
                  <i className="bi bi-people me-2"></i>
                  <span>Following : {user && user.following}</span>
                </p>
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

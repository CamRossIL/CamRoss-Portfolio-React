import Hero from "../components/Hero";
import SectionHome from "../components/SectionHome";
import { useState, useEffect } from "react";
import Modal from "../components/Modal";

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
      {showModal && <Modal user={user} closeModal={closeModal} />}
    </div>
  );
}

export default Home;

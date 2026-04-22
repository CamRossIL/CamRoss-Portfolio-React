import Hero from "../components/Hero";
import SectionHome from "../components/SectionHome";
import { useState } from "react";

function Home() {
 /*créer state affichage modal*/
  const [showModal, setShowModal] = useState(false);

/*créer fonctions ouvrir modal */
  function openModal() {
    setShowModal(true);
  }
 

  return (
    <div>
      <Hero />
      <SectionHome/>
    </div>
  );
}

export default Home;

function Hero({openModal}) {
  return (
    <section className="hero d-flex flex-column justify-content-center align-items-center">
      <h1 className="fw-bold text-white text-center mb-4">
        Bonjour, je suis John Doe
      </h1>
      <h2 className="fw-bold text-white text-center mb-4">
        Développeur web full-stack
      </h2>
      <button className="btn btn-danger" onClick={openModal}>
        En savoir plus
      </button>
    </section>
  );
}

export default Hero;

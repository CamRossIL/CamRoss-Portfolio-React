function CardService({ icon, title, text }) {
  return (
    <div className="card h-100">
      <div className="card-body text-center mt-3">
        <i
          className={`bi bi-${icon} text-primary`}
          style={{ fontSize: "2rem" }}
        ></i>
        <h3 className="card-title fw-bold m-0 pt-4">{title}</h3>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default CardService;

function CardPortfolio({ img, imgname, title, text, note }) {
  return (
    <div className="card text-center">
      <img className="card-img-top" src={img} alt={imgname} />
      <div className="card-body">
        <h2 className="card-title fw-bold">{title}</h2>
        <p className="card-text">{text}</p>
        <button className="btn btn-primary">Voir le site</button>
      </div>
      <div className="card-footer bg-light text-muted">
        <p className="mb-0">{note}</p>
      </div>
    </div>
  );
}

export default CardPortfolio;

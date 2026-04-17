function Title({ title, text }) {
  return (
    <div className="text-center mt-5">
      <h1 className="fw-bold">{title}</h1>
      {text && <p>{text}</p>}
      <div className="d-inline-block w-25 border-bottom border-primary border-5"></div>
    </div>
  );
}

export default Title;
 
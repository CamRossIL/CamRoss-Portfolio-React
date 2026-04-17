function ProgressBar() {
  return (
    <div>
      <p className="mt-5 mb-1">HTML5 90%</p>
      <div
        className="progress mb-3"
        role="progressbar"
        aria-label="HTML5"
        aria-valuenow="90"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar bg-danger" style={{ width: "90%" }}></div>
      </div>

       <p className="mb-1">CSS3 80%</p>
      <div
        className="progress mb-3"
        role="progressbar"
        aria-label="HTML5"
        aria-valuenow="80"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar bg-info" style={{ width: "80%" }}></div>
      </div>

       <p className="mb-1">JAVASCRIPT 70%</p>
      <div
        className="progress mb-3"
        role="progressbar"
        aria-label="HTML5"
        aria-valuenow="70"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar bg-warning" style={{ width: "70%" }}></div>
      </div>

       <p className="mb-1">PHP 60%</p>
      <div
        className="progress mb-3"
        role="progressbar"
        aria-label="HTML5"
        aria-valuenow="60"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar bg-success" style={{ width: "60%" }}></div>
      </div>

       <p className="mb-1">REACT 50%</p>
      <div
        className="progress mb-3"
        role="progressbar"
        aria-label="HTML5"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar bg-primary" style={{ width: "50%" }}></div>
      </div>
    </div>
  );
}

export default ProgressBar;

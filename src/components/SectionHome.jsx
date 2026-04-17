import johndoeimg from "../assets/images/john-doe-about.jpg";

function SectionHome() {
  return (
    <div>
      <section className="container my-5">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-md-6">
                <img src={johndoeimg} alt="John Doe" className="card-img-top mt-5 mb-2" />
                <div className="card-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer iaculis eros vitae lectus gravida tempor. Sed
                    pellentesque interdum metus at elementum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer iaculis eros vitae lectus gravida tempor. Sed
                    pellentesque interdum metus at elementum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer iaculis eros vitae lectus gravida tempor. Sed
                    pellentesque interdum metus at elementum.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionHome;
 
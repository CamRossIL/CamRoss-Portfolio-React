function Modal({ user, closeModal }) {
  return (
    <>
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
      <div className="modal-backdrop show"></div>
    </>
  );
}

export default Modal;

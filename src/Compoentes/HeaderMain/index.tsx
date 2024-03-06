import { NavLink} from "react-router-dom";


export default function HeaderMain() {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
      <div className="container px-5">
        <a className="navbar-brand" href="index.html">
          <span className="fw-bolder text-primary">Start Bootstrap</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
            <NavLink className="nav-item" to={'/'}>
              <a className="nav-link" >Home</a>
            </NavLink>
            <NavLink className="nav-item" to={'/resume'}>
              <a className="nav-link">Resume</a>
            </NavLink>
            <NavLink className="nav-item" to={"/projects"}>
              <a className="nav-link" href="projects.html">Projects</a>
            </NavLink>
            <NavLink className="nav-item" to={"/contact"}>
              <a className="nav-link" href="contact.html">Contact</a>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

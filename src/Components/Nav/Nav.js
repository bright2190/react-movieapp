import { Link, NavLink } from "react-router-dom"
import "./Nav.css"
export default function Nav(){

    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">MoviesHub</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          {/* <a className="p-2 text-dark" href="#">
            How it works
          </a> */}
          {/* <a className="p-2 text-dark" href="#">Collections</a> */}
          <NavLink to="/" className="p-2 text-dark">
            Home
          </NavLink>

          <NavLink to="/collection" className="p-2 text-dark">
            Collections
          </NavLink>
        </nav>
        
        <Link to="" className="btn btn-outline-primary">Log in</Link>
      </div>
    );


}


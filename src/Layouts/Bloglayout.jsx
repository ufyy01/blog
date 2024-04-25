import { Container } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const Bloglayout = () => {
    return (
        <Container>
            <header className="header">
            <nav className="navbar navbar-expand-lg navbar-dark mt-5">
                <NavLink className="navbar-brand" href="#" >
                    TECHCRUNCH
                </NavLink>
                    <button
                    className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-robot fa-bounce"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item ps-lg-3">
                            <NavLink className="nav-link ps-lg-4" aria-current="page" href="#"
                            >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ps-lg-5" to="#">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ps-lg-5" to="/blog">Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ps-lg-5" to="#">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ps-lg-5" to="#">News</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
            <main className="main mt-4">
                <Outlet />
            </main>
        </Container>
    );
}
 
export default Bloglayout;
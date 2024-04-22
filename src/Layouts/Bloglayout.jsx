import { Container } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const Bloglayout = () => {
    return (
        <Container>
            <header className="d-flex justify-content-between mt-2">
                <div>
                    <h1>TECHCRUNCH</h1>
                </div>
                <div>
                    <NavLink to="#" className="me-3">Home</NavLink>
                    <NavLink to="blog" className="me-3">Blog</NavLink>
                    <NavLink to="#" className="me-3">About</NavLink>
                    <NavLink to="#" className="me-3">Contact</NavLink>
                </div>
            </header>
            <main className="mt-4">
                <Outlet />
            </main>
        </Container>
    );
}
 
export default Bloglayout;
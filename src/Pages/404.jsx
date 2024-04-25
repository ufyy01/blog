import { Button } from "react-bootstrap";

const Error = () => {
    return (
        <div className="filler d-flex flex-column justify-content-center text-center mx-lg-4">
        <h1 className="my-3">WELCOME TO TECHCRUNCH</h1>
        <h2 className="my-3">Seems like you've lost your way</h2>
        <p className="my-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ullam porro deleniti sequi facilis delectus ea placeat. Iusto reiciendis libero soluta doloremque nisi.</p>
        <div className="text-center mt-3">
            <Button size="lg" href="/" variant="light">Go Home</Button>
        </div>
    </div>
    );
}
 
export default Error;
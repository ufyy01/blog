import { Button } from "react-bootstrap";

const Filler = () => {
    return (
        <div className="filler d-flex flex-column justify-content-center text-center mx-lg-4">
            <h1 className="my-3">WELCOME TO TECHCRUNCH</h1>
            <p className="my-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ullam porro deleniti sequi facilis delectus ea placeat. Iusto reiciendis libero soluta doloremque nisi.</p>
            <div className="text-center mt-4">
                <Button size="lg" href="/blog" variant="light">Find More Here</Button>
            </div>
        </div>
    );
}
 
export default Filler;
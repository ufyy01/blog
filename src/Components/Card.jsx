import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import './css/card.css'

const Cards = ({ blog}) => {
    return (
            <div className="card">
                <img className="card-img-top img-fluid" src={blog.yoast_head_json.og_image[0].url} alt="blog" />
                <div className="card-body">
                    <div className="d-lg-flex justify-content-between">
                        <p className="card-small-text">{blog.yoast_head_json.og_type}</p>
                        <p className="card-small-text">{blog.yoast_head_json.article_published_time}</p>
                    </div>
                    <h5 className="card-title">{blog.yoast_head_json.og_title}</h5>
                    <p className="card-text mt-4">{blog.yoast_head_json.description}</p> 
                </div>
                <div className="d-flex justify-content-between mx-3">
                    <p className="card-small-text">2 mins</p>
                    <Link to={blog.id.toString()} className="card-small-text">Read full <BsArrowRight /></Link>
                </div>
            </div>
    );
}
 
export default Cards; 
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import './css/card.css'

const FirstCard = ({blog}) => {
    return (
        <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="first-card d-lg-flex mx-auto mt-5 p-lg-3">
                <img className="card-img-top img-fluid" src={blog.yoast_head_json.og_image[0].url} alt="blog" />
                <div className="card-body mx-lg-3 w-100 d-flex flex-column justify-content-between">
                    <div className="mt-lg-4 d-lg-flex justify-content-between">
                        <p className="card-small-text">{blog.yoast_head_json.og_type}</p>
                        <p className="card-small-text">{blog.yoast_head_json.article_published_time}</p>
                    </div>
                    <h5 className="card-title">{blog.yoast_head_json.og_title}</h5>
                    <p className="card-text">{blog.yoast_head_json.description}</p> 
                    <div className="action d-flex justify-content-between">
                        <p className="card-small-text">2 mins</p>
                        <Link to={blog.id.toString()} className="card-small-text">Read full <BsArrowRight /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default FirstCard;
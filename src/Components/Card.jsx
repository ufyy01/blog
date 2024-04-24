import { Link } from "react-router-dom";
import './css/card.css'

const Cards = ({ blog }) => {
    return (
            <div className="card">
                <img className="card-img-top img-fluid" src={blog.yoast_head_json.og_image[0].url} alt="blog" />
                <div className="card-body">
                    <div className="about d-flex justify-content-between">
                        <p className="card-small-text">{blog.yoast_head_json.og_type}</p>
                        <p className="date">{blog.yoast_head_json.article_published_time}</p>
                    </div>
                    <h5 className="card-title">{blog.yoast_head_json.og_title}</h5>
                    <p className="card-text">{blog.yoast_head_json.description}</p> 
                </div>
                <div className="action d-flex justify-content-between">
                    <p className="card-small-text">2 mins</p>
                    <Link to="/">Read full</Link>
                </div>
            </div>
        // <div className="col-sm-12 col-md-6 col-lg-3">
        // </div>
    );
}
 
export default Cards;
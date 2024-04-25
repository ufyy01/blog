import { useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";
import { Button } from "react-bootstrap";
import './css/BlogDetail.css'
import CardSkeleton from "../Skeleton/CardSkeleton";
import '../Components/css/card.css'


const BlogDetail = () => {
    const details = useLoaderData()
    const sanitizedDetails = DOMPurify.sanitize(details.content.rendered)

    return (
        <div className="m-4">
            {details.content.rendered &&
                <div>
                    <div className="w-100 mb-4">
                        <img src={details.yoast_head_json.og_image[0].url} alt="blog" className="img-fluid mx-auto"/>
                    </div>
                    <div className="text-justify w-100">
                        <div dangerouslySetInnerHTML={{ __html: sanitizedDetails}} />
                    </div>
                    <div className="text-center">
                        <Button size="lg" href="/blog" className="bttn">Read More</Button>
                    </div>
                </div>
            }
            {!details.content.rendered &&  <CardSkeleton /> }
        </div>
    );
}
 
export default BlogDetail;

//loader function
export const blogDetailsLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch(`https://techcrunch.com/wp-json/wp/v2/posts/${id}?per_page=1`)
    return res.json()
}
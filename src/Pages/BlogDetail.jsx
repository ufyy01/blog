import { useLoaderData, useParams } from "react-router-dom";

const BlogDetail = () => {
    const { id } = useParams()
    const details = useLoaderData()

    console.log(details)
    return (
        <h1>hello</h1>
    );
}
 
export default BlogDetail;

//loader function
export const blogDetailsLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch(`https://techcrunch.com/wp-json/wp/v2/posts/${id}?per_page=1`)
    return res.json()
}
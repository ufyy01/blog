import { useLoaderData } from "react-router-dom";

const Blog = () => {
    const blogs = useLoaderData()
    return ( 
        <div className="blogs">
            {blogs.map(blog => (
                <p>{blog.title.rendered}</p>
            ))}
        </div>
    );
}

//loader function
export const blogLoader = async () => {
    const res = await fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=10')
    return res.json()
}



export default Blog;
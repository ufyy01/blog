import Pagination from "../Components/Pagination";
import { useEffect, useState } from "react";

const Blog = () => {
    const [items, setItems] = useState([])
    const [pageCount, setPageCount] = useState(0)

    const fetchBlogs = async (currentPage) => {
        const res = await fetch(`https://techcrunch.com/wp-json/wp/v2/posts?per_page=7&page=${currentPage}`)
        const data = await res.json()    
        return data
    }

    const handleClick = async (data) => {
        let currentPage = data.selected + 1
        console.log(currentPage)
        const blogsFromServer = await fetchBlogs(currentPage)
        setItems(blogsFromServer)
    }

    //load function
    useEffect( () => {
        const getBlog = async () => {
            const res = await fetch(`https://techcrunch.com/wp-json/wp/v2/posts?per_page=7&page=1`)
            const data = await res.json()
            setPageCount(Math.ceil(200/7))
            setItems(data)
        }
        getBlog()
    }, []);

    return ( 
        <div className="blogs">
            {items.map(blog => (
                <p key={blog.id}>{blog.title.rendered}</p>
            ))}
            <Pagination pageCount={pageCount} handleClick={handleClick} />
        </div>
    );
}


export default Blog;
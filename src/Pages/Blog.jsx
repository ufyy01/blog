import Cards from "../Components/Card";
import Pagination from "../Components/Pagination";
import { useEffect, useState } from "react";
import '../Components/css/card.css'
import FirstCard from "../Components/FirstCard";

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
        // console.log(items)
    }

    //load function
    useEffect( () => {
        const getBlog = async () => {
            const res = await fetch(`https://techcrunch.com/wp-json/wp/v2/posts?per_page=7&page=1`)
            const data = await res.json()
            setPageCount(Math.ceil(200/7))
            // console.log(data)
            setItems(data)
        }
        getBlog()
    }, []);

    return (
        <>
            <div className="blogs d-flex flex-wrap justify-content-between px-4 pb-4">
                {items.map((blog, index) => {
                    if (index === 0 ) {
                        return <FirstCard blog={blog} key={index} data-aos="fade-left"/>
                    }
                    else {
                        return  <Cards blog={blog} key={index} data-aos="fade-right"/>
                    }
                })}
            </div>
            <div className="paginate">
                <Pagination pageCount={pageCount} handleClick={handleClick} />
            </div>
        </>
    );
}


export default Blog;
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, handleClick}) => {
    return ( 
        <ReactPaginate 
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={4}
            pageRangeDisplayed={3}
            onPageChange={handleClick}
            containerClassName="pagination justify-content-center"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            activeClassName="active"

        />
    );
}
 
export default Pagination;
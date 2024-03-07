import * as s from './Pagination.style';

function Pagination({ totalPages, currentPage, onPageChange }) {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <s.Pagination className="pagination">
            {pages.map((page) => (
                <s.PaginationButton
                    type="button"
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={currentPage === page ? 'active' : ''}
                >
                    {page}
                </s.PaginationButton>
            ))}
        </s.Pagination>
    );
}

export default Pagination;

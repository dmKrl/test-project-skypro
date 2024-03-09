import * as s from './Pagination.style';

function Pagination({ totalPages, onPageChange }) {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1); // Массив с номерами страниц

    return (
        <s.Pagination className="pagination">
            {pages.map((page) => (
                <s.PaginationButton
                    type="button"
                    key={page}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </s.PaginationButton>
            ))}
        </s.Pagination>
    );
}

export default Pagination;

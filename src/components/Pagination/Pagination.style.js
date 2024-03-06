import styled from 'styled-components';

export const Pagination = styled.div`
    display: flex;
    gap: 10px;
    max-width: 500px;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
`;
export const PaginationButton = styled.button`
    padding: 4px 6px;
    border: 20px;
    border-radius: 20px;
    background-color: rgb(0 0 0 / 0.69);
    color: white;
    text-align: center;
    transition: all 0.2s ease;
    :hover {
        transition: all 0.2s ease;
        background-color: rgba(0, 0, 0, 0.2);
    }
`;

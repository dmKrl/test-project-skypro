import styled from 'styled-components';

export const SortDropdown = styled.div`
    position: relative;
    cursor: pointer;
    max-width: 250px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    gap: 20px;
    color: white;
    transition: all 0.2s ease;
`;
export const SortHeader = styled.div`
    position: relative;
    font-size: 16px;
`;
export const Options = styled.div`
    position: absolute;
    top: 30px;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    border: 1px solid #ccc;
    width: fit-content;
    div {
        padding: 8px;
    }
    div:hover {
        background-color: rgba(0, 0, 0, 0.7);

    }
`;

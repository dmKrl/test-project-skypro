import styled from 'styled-components';

export const SortDropdown = styled.div`
    position: relative;
`;
export const SortHeader = styled.div`
    position: relative;
`;
export const Options = styled.div`
    position: absolute;
    top: 30px;
    left: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    width: fit-content;
    div {
        padding: 8px;
    }
    div:hover {
        background-color: lightgray;
    }
`;

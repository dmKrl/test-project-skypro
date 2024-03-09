import styled, { css } from 'styled-components';

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
export const SortHeaderText = styled.p``;
export const SortTextSpan = styled.span`
    display: inline-block;
    transition: all 0.4s ease;
    transform: ${(props) =>
        props.$isOpen ? 'rotateX(0deg)' : 'rotateX(-180deg)'};
`;
export const Options = styled.div`
    position: absolute;
    top: 30px;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    border: 1px solid #ccc;
    width: fit-content;
`;
export const OptionsSortBlock = css`
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.4);
    :hover {
        transition: all 0.2s ease;
        background-color: rgba(255, 255, 255, 0.8);
        color: 'black';
    }
`;
export const OptionsSortBlockAsc = styled.div`
    ${OptionsSortBlock}
    color: ${(props) => (props.$isActiveAsc ? 'black' : 'white')};

    background-color: ${(props) =>
        props.$isActiveAsc ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 0.8)'};
`;
export const OptionsSortBlockDesc = styled.div`
    ${OptionsSortBlock}
    color: ${(props) => (props.$isActiveDesc ? 'black' : 'white')};

    background-color: ${(props) =>
        props.$isActiveDesc ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 0.8)'};
`;

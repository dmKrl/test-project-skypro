import styled from 'styled-components';

export const SearchForm = styled.form`
    max-width: 1080px;
    display: flex;
    align-items: center;
    padding: 30px 10px;
    border-radius: 8px;
    gap: 20px;
    flex-wrap: wrap;
}
`;
export const SearchFormInput = styled.input`
    max-width: 1080px;
    display: flex;
    align-items: center;
    padding: 10px 30px;
    border-radius: 8px;
    gap: 20px;
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 0.2);
    color: white;
    transition: all 0.2s ease;
    :focus {
        outline:none;
        transition: all 0.2s ease;
        box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0);
    }
}
`;
export const SearchFormButton = styled.button`
    max-width: 1080px;
    display: flex;
    align-items: center;
    padding: 10px 30px;
    border-radius: 8px;
    gap: 20px;
    box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.8);
    color: #000;
    font-family: "Segoe UI";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    transition: all 0.2s ease;
    :hover {
    transition: all 0.2s ease;
        box-shadow: 0px 0px 2px 2px rgba(255, 255, 255,  0);
        background-color: rgba(255, 255, 255, 0.45);
    }
}
`;
export const MainHeading = styled.h1``;

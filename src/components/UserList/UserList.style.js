import styled from 'styled-components';

export const UserListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 26px;
`;
export const UserListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1080px;
    gap: 26px;
`;
export const UserListItem = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    max-width: 100px;
    max-height: 200px;
    word-break: break-all;
    box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 0.2);
    transition: all 0.2s ease;
    border-radius: 4px 4px 0px 0px;
    :hover {
        transition: all 0.2s ease;
        box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 0.4);
    }
    :active {
        transition: all 0.2s ease;
        box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 0.6);
    }
    p {
        text-align: center;
    }
`;
export const UserListItemImg = styled.img`
    height: 100px;
    width: 100%;
    border-radius: 4px 4px 0px 0px;
`;
export const SelectedUserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    gap: 20px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 12px 12px 0px 0px;
    box-shadow: 0px 0px 2px 4px rgba(255, 255, 255, 0.2);
`;
export const SelectedUserDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;
export const SelectedUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;
export const SelectedUserQuantity = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    max-width: 300px;
`;
export const SelectedUserImg = styled.img`
    width: 100px;
    height: 100px;
`;

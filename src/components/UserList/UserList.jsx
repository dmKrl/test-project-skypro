/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as s from './UserList.style';

function UserList({ users, selectedUser, handleChangeSelectedUser }) {
    const showDetails = (user) => {
        handleChangeSelectedUser(user);
    };

    return (
        <s.UserListContainer>
            <s.UserListWrapper>
                {users?.map((user) => (
                    <s.UserListItem
                        key={user.id}
                        onClick={() => showDetails(user)}
                    >
                        <s.UserListItemImg
                            src={user.avatar_url}
                            alt={user.login}
                        />
                        <p>Логин: {user.login}</p>
                    </s.UserListItem>
                ))}
            </s.UserListWrapper>
            {selectedUser && (
                <s.SelectedUserInfo>
                    <h2>Детали пользователя</h2>
                    <s.SelectedUserDetails>
                        <s.SelectedUserQuantity>
                            <p>Логин: {selectedUser.login}</p>
                            <p>
                                Кол-во репозиториев:
                                {selectedUser.public_rep.length}
                            </p>
                            <p>Айди: {selectedUser.id}</p>
                            <p>
                                Ссылка на репозиторий:{' '}
                                <a href={selectedUser.html_url}>
                                    {selectedUser.html_url}
                                </a>
                            </p>
                        </s.SelectedUserQuantity>
                        <s.SelectedUserImg
                            src={selectedUser.avatar_url}
                            alt={selectedUser.login}
                        />
                    </s.SelectedUserDetails>
                </s.SelectedUserInfo>
            )}
        </s.UserListContainer>
    );
}

export default UserList;

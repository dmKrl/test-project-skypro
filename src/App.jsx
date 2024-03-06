import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import UserList from './components/UserList/UserList';
import GlobalStyle from './GlobalStyle.styles';
import * as s from './App.style';

function App() {
    const [users, setUsers] = useState([]);
    console.log(users);

    const handleSearch = async (username) => {
        const response = await fetch(
            `https://api.github.com/search/users?q=${username}`,
        );
        const data = await response.json();
        setUsers(data.items);
    };

    const handleSearchUsers = async (username) => {
        const response = await fetch(
            `https://api.github.com/users/${username}`,
        );
        const data = await response.json();
        console.log(data);
    };

    const sortUsersByRepos = (order) => {
        const sortedUsers = [...users].sort((a, b) => {
            if (order === 'asc') {
                return a.public_repos - b.public_repos;
            }
            return b.public_repos - a.public_repos;
        });
        setUsers(sortedUsers);
    };

    return (
        <s.App>
            <s.Container>
                <GlobalStyle />
                <h1>Поиск пользователей на GitHub</h1>
                <SearchBar
                    users={users}
                    onSearch={handleSearch}
                    handleSearchUsers={handleSearchUsers}
                />
                <button type="button" onClick={() => sortUsersByRepos('asc')}>
                    Sort by Repos Asc
                </button>
                <button type="button" onClick={() => sortUsersByRepos('desc')}>
                    Sort by Repos Desc
                </button>
                <UserList users={users} />
            </s.Container>
        </s.App>
    );
}

export default App;

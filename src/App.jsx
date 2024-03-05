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

    return (
        <s.App>
            <s.Container>
                <GlobalStyle />
                <h1>Поиск пользователей на GitHub</h1>
                <SearchBar onSearch={handleSearch} />
                <UserList users={users} />
            </s.Container>
        </s.App>
    );
}

export default App;

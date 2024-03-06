import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import UserList from './components/UserList/UserList';
import GlobalStyle from './GlobalStyle.styles';
import * as s from './App.style';
import Pagination from './components/Pagination/Pagination';

function App() {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const PERSON_PAGE = 15;
    const MAX_PAGES = 20;

    const handleSearch = async (username) => {
        setSearchQuery(username);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSearchUser = async (username) => {
        const response = await fetch(
            `https://api.github.com/users/${username}`,
        );
        const data = await response.json();
        console.log(data);
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://api.github.com/search/users?q=${searchQuery}&per_page=${PERSON_PAGE}&page=${currentPage}`,
            );
            const data = await response.json();

            let totalPageCount = Math.ceil(data.total_count / PERSON_PAGE);
            if (totalPageCount > MAX_PAGES) {
                totalPageCount = MAX_PAGES;
            }

            setUsers(data.items);
            setTotalPages(totalPageCount);
        };

        if (searchQuery) {
            fetchData();
        }
    }, [currentPage, searchQuery]);

    return (
        <s.App>
            <GlobalStyle />
            <s.Container>
                <h1>Поиск пользователей на GitHub</h1>
                <SearchBar
                    users={users}
                    onSearch={handleSearch}
                    handleSearchUser={handleSearchUser}
                />
                <UserList users={users} />
                {totalPages !== 1 && (
                    <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                )}
            </s.Container>
        </s.App>
    );
}

export default App;

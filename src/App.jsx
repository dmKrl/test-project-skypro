import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import UserList from './components/UserList/UserList';
import GlobalStyle from './GlobalStyle.styles';
import * as s from './App.style';
import Pagination from './components/Pagination/Pagination';

const accessToken = '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';

function App() {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedUser, setSelectedUser] = useState(false);

    const PERSON_PAGE = 15;
    const MAX_PAGES = 20;
    const handleChangeSelectedUser = (user) => {
        setSelectedUser(user);
    };
    const handleSearchQueryChange = (username) => {
        setSearchQuery(username);
    };
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const handleChangeUsers = (someUsers) => {
        setUsers(someUsers);
    };

    const handleSearchUserRepos = async (usernameForGetRepos) => {
        try {
            const response = await axios.get(
                `https://api.github.com/users/${usernameForGetRepos}/repos`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                },
            );
            return response.data;
        } catch (error) {
            return null;
        }
    };

    const handleChangeUserArray = (data) => {
        const newData = data?.items?.map(async (user) => {
            const userWithRep = {
                ...user,
                public_rep: await handleSearchUserRepos(user.login),
            };
            return userWithRep;
        });
        Promise.all(newData)
            .then((result) => {
                handleChangeUsers(result);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `https://api.github.com/search/users?q=${searchQuery}&per_page=${PERSON_PAGE}&page=${currentPage}`,
            );

            let totalPageCount = Math.ceil(
                response.data.total_count / PERSON_PAGE,
            );
            if (totalPageCount > MAX_PAGES) {
                totalPageCount = MAX_PAGES;
            }
            setTotalPages(totalPageCount);
            handleChangeUserArray(response.data);
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
                    handleSearchQueryChange={handleSearchQueryChange}
                    handleChangeUsers={handleChangeUsers}
                    handleChangeSelectedUser={handleChangeSelectedUser}
                />
                <UserList
                    users={users}
                    selectedUser={selectedUser}
                    handleChangeSelectedUser={handleChangeSelectedUser}
                />
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

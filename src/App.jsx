import { useEffect, useState } from 'react';
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
    const [isShowingList, setIsShowingList] = useState(false);

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
    const handleChangeIsShowingList = () => {
        setIsShowingList(!isShowingList);
    };

    const handleSearchUserRepos = async (usernameForGetRepos) => {
        try {
            const response = await fetch(
                `https://api.github.com/users/${usernameForGetRepos}/repos`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                },
            );
            const responseData = await response.json();
            return responseData;
        } catch (error) {
            return null;
        }
    };

    const handleAddReposForUsers = (data) => {
        const newData = data?.map(async (user) => {
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
            const response = await fetch(
                `https://api.github.com/search/users?q=${searchQuery}&per_page=${PERSON_PAGE}&page=${currentPage}`,
            );
            const responseData = await response.json();

            let totalPageCount = Math.ceil(
                responseData.total_count / PERSON_PAGE,
            );
            if (totalPageCount > MAX_PAGES) {
                totalPageCount = MAX_PAGES;
            }
            setTotalPages(totalPageCount);
            handleAddReposForUsers(responseData.items);
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
                    handleChangeIsShowingList={handleChangeIsShowingList}
                    handleSearchQueryChange={handleSearchQueryChange}
                    handleChangeUsers={handleChangeUsers}
                    handleChangeSelectedUser={handleChangeSelectedUser}
                />
                <UserList
                    users={users}
                    isShowingList={isShowingList}
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

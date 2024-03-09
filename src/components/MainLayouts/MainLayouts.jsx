import { useEffect, useState } from 'react';
import * as s from './MainLayouts.style';
import SearchBar from '../SearchBar/SearchBar';
import UserList from '../UserList/UserList';
import Pagination from '../Pagination/Pagination';

function MainLayouts() {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedUser, setSelectedUser] = useState(false);
    const [isShowingList, setIsShowingList] = useState(false);
    const [isShowErrorLimit, setIsShowErrorLimit] = useState(false);

    const PERSON_PAGE = 15; // Число пользователей, которые могут одновременно выводиться на главном экране приложения
    const MAX_PAGES = 20; // Максимальное количество страниц отображаемое в пагинации, даже учитывая что их может быть больше

    const handleChangeSelectedUser = (user) => {
        setSelectedUser(user);
    };

    const handleSearchQueryChange = (username) => {
        setSearchQuery(username);
    };

    const handleChangeUsers = (someUsers) => {
        setUsers(someUsers);
    };

    const handleChangeIsShowingList = (isShowing) => {
        setIsShowingList(isShowing);
    };

    const handlePageChange = (page) => {
        handleChangeUsers([]);
        handleChangeIsShowingList(true);
        setCurrentPage(page);
    };

    const fetchSearchUserRepos = async (usernameForGetRepos) => {
        try {
            const response = await fetch(
                `https://api.github.com/users/${usernameForGetRepos}/repos`,
            );
            const responseData = await response.json();
            if (responseData.message) {
                return setIsShowErrorLimit(true);
            }
            setIsShowErrorLimit(false);
            return responseData;
        } catch (error) {
            return null;
        }
    };

    const fetchAddReposForUsers = (data) => {
        const newData = data?.map(async (user) => {
            const userWithRep = {
                ...user,
                public_rep: await fetchSearchUserRepos(user.login),
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
        const fetchDataUser = async () => {
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
            fetchAddReposForUsers(responseData.items);
            handleChangeIsShowingList(false);
        };
        if (searchQuery) {
            fetchDataUser();
        }
    }, [currentPage, searchQuery]);

    return (
        <s.Wrapper>
            <h1>Поиск пользователей на GitHub</h1>
            <SearchBar
                users={users}
                handleChangeIsShowingList={handleChangeIsShowingList}
                handleSearchQueryChange={handleSearchQueryChange}
                handleChangeUsers={handleChangeUsers}
                handleChangeSelectedUser={handleChangeSelectedUser}
                handlePageChange={handlePageChange}
            />
            {isShowErrorLimit && (
                <s.MainLayoutsText>
                    <strong>Предупреждение:</strong> Произошла ошибка запроса,
                    на получение количества репозиториев, вы превысили
                    количество бесплатных попыток. Функции сортировки и
                    отображения количества репозиториев не работают. Повторите
                    попытку через час.
                </s.MainLayoutsText>
            )}
            <UserList
                users={users}
                isShowingList={isShowingList}
                selectedUser={selectedUser}
                handleChangeSelectedUser={handleChangeSelectedUser}
            />
            {totalPages !== 1 && (
                <Pagination
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </s.Wrapper>
    );
}

export default MainLayouts;

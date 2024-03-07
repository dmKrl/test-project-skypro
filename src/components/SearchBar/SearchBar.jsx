import { useState } from 'react';
import * as s from './SearchBar.style';
import SortDropdown from '../SortDropdown/SortDropdown';

function SearchBar(props) {
    const {
        users,
        handleSearchQueryChange,
        handleChangeUsers,
        handleChangeSelectedUser,
        handleChangeIsShowingList,
    } = props;
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleChangeSelectedUser(false);
        handleSearchQueryChange(username);
        handleChangeIsShowingList();
    };

    return (
        <s.SearchForm onSubmit={handleSubmit}>
            <s.SearchFormButton type="submit">Искать</s.SearchFormButton>
            <s.SearchFormInput
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Введите логин пользователя"
                required
            />
            <SortDropdown users={users} handleChangeUsers={handleChangeUsers} />
        </s.SearchForm>
    );
}

export default SearchBar;

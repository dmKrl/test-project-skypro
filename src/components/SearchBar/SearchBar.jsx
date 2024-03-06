import { useState } from 'react';
import * as s from './SearchBar.style';
import SortDropdown from '../SortDropdown/SortDropdown';

function SearchBar({ users, onSearch, handleSearchUser }) {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(username);
        handleSearchUser(username);
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
            <SortDropdown users={users} />
        </s.SearchForm>
    );
}

export default SearchBar;

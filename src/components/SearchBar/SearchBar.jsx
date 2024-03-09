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
        handlePageChange,
    } = props;
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const isLatin = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/;

        if (!isLatin.test(username)) {
            return setError('Введите только латинские символы');
        }
        setError('');
        handleChangeSelectedUser(false);
        handleSearchQueryChange(username);
        handleChangeUsers([]);
        handlePageChange(1)
        return handleChangeIsShowingList(true);
    };

    return (
        <>
            <s.SearchForm onSubmit={handleSubmit}>
                <s.SearchFormButton type="submit">Искать</s.SearchFormButton>
                <s.SearchFormInput
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Введите логин пользователя"
                    required
                />
                <SortDropdown
                    users={users}
                    handleChangeUsers={handleChangeUsers}
                />
            </s.SearchForm>
            {error && <span style={{ color: 'red' }}>{error}</span>}
        </>
    );
}

export default SearchBar;

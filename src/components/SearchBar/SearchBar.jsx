import { useState } from 'react';
import * as s from './SearchBar.style';

function SearchBar({ onSearch }) {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(username);
    };

    return (
        <s.SearchForm onSubmit={handleSubmit}>
            <s.SearchFormInput
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Введите логин пользователя"
                required
            />
            <s.SearchFormButton type="submit">Искать</s.SearchFormButton>
        </s.SearchForm>
    );
}

export default SearchBar;

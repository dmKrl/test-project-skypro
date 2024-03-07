/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import * as s from './SortDropdown.style';

function SortDropdown({ users, handleChangeUsers }) {
    const [showOptions, setShowOptions] = useState(false);

    const sortByRepositoriesAscending = () => {
        setShowOptions(false);
        const sortedUsers = [...users].sort(
            (a, b) => a.public_rep.length - b.public_rep.length,
        );
        handleChangeUsers([...sortedUsers]);
    };

    const sortByRepositoriesDescending = () => {
        setShowOptions(false);
        const sortedUsers = [...users].sort(
            (a, b) => b.public_rep.length - a.public_rep.length,
        );
        handleChangeUsers([...sortedUsers]);
    };

    return (
        <s.SortDropdown>
            <s.SortHeader onClick={() => setShowOptions(!showOptions)}>
                <s.SortHeaderText>
                    Сортировать{' '}
                    <s.SortTextSpan $isOpen={showOptions}>
                        &#8744;
                    </s.SortTextSpan>
                </s.SortHeaderText>
            </s.SortHeader>
            {showOptions && (
                <s.Options className="options">
                    <div onClick={sortByRepositoriesAscending}>
                        По возрастанию репозиториев
                    </div>
                    <div onClick={sortByRepositoriesDescending}>
                        По убыванию репозиториев
                    </div>
                </s.Options>
            )}
        </s.SortDropdown>
    );
}

export default SortDropdown;

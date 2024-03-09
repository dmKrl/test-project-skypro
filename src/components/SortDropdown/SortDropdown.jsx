/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import * as s from './SortDropdown.style';

function SortDropdown({ users, handleChangeUsers }) {
    const [showOptions, setShowOptions] = useState(false);
    const [Ascending, setAscending] = useState(false);
    const [Descending, setDescending] = useState(false);

    const changeSortForAscending = (sortState) => {
        if (sortState === 'asc') {
            setAscending(true);
            setDescending(false);
        } else {
            setAscending(false);
            setDescending(true);
        }
    };

    const sortByRepositoriesAscending = (sortState) => {
        changeSortForAscending(sortState);
        setShowOptions(false);
        const sortedUsers = [...users].sort(
            (a, b) => a.public_rep.length - b.public_rep.length,
        );
        handleChangeUsers([...sortedUsers]);
    };

    const sortByRepositoriesDescending = (sortState) => {
        changeSortForAscending(sortState);
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
                <s.Options>
                    <s.OptionsSortBlockAsc
                        onClick={() => sortByRepositoriesAscending('asc')}
                        $isActiveAsc={Ascending}
                    >
                        По возрастанию репозиториев
                    </s.OptionsSortBlockAsc>
                    <s.OptionsSortBlockDesc
                        onClick={() => sortByRepositoriesDescending('desc')}
                        $isActiveDesc={Descending}
                    >
                        По убыванию репозиториев
                    </s.OptionsSortBlockDesc>
                </s.Options>
            )}
        </s.SortDropdown>
    );
}

export default SortDropdown;

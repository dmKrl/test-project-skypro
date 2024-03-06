/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import * as s from './SortDropdown.style';

function SortDropdown({ users }) {
    const [showOptions, setShowOptions] = useState(false);
    const [sortOrder, setSortOrder] = useState('');
    const handleSortChange = (order) => {
        setSortOrder(order);
        setShowOptions(false);
    };
    const sortedUsers = [...users].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.followers - b.followers;
        }
        if (sortOrder === 'desc') {
            return b.followers - a.followers;
        }
        return 0;
    });
    console.log(sortedUsers);
    return (
        <s.SortDropdown className="sort-dropdown">
            <s.SortHeader
                className="sort-header"
                onClick={() => setShowOptions(!showOptions)}
            >
                <span>Sort by:</span>
                <span>&#x25BE;</span>
            </s.SortHeader>
            {showOptions && (
                <s.Options className="options">
                    <div onClick={() => handleSortChange('asc')}>
                        Followers Asc
                    </div>
                    <div onClick={() => handleSortChange('desc')}>
                        Followers Desc
                    </div>
                </s.Options>
            )}
        </s.SortDropdown>
    );
}

export default SortDropdown;

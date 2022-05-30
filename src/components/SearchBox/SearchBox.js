import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from '../../redux/actions/dataAction';
import './SearchBox.css';

function SearchBox() {
    const [searchLine, setSearchLine] = useState('');
    const searchLineChangeHandler = (e) => {
        setSearchLine(e.target.value);
    }
    const dispatch = useDispatch()
    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
    }
    const handleClick = ()=>{
        dispatch(getData(searchLine))
    }

    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    Искать фильм по названию:
                    <input
                        value={searchLine}
                        type="text"
                        className="search-box__form-input"
                        placeholder="Например, Shawshank Redemption"
                        onChange={searchLineChangeHandler}
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!searchLine}
                    onClick={handleClick}
                >
                    Искать
                </button>
            </form>
        </div>
    );
}

export default SearchBox;
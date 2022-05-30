import React from 'react';
import './ListPage.css';
import { useSelector } from 'react-redux';

function ListPage() {
    const List = useSelector(state=>state.api)
    return (
        <div className="list-page">
            <h1 className="list-page__title">{List.data.title}</h1>
            <ul>
                {List.data.movies? List.data.movies.map((item) => {
                    return (
                        <li key={item.imdbID}>
                            <a href={`https://www.imdb.com/title/${item.imdbID}/`} target="_blank">{item.Title} ({item.Year})</a>
                        </li>
                    );
                }):null}
            </ul>
        </div>
    );
}

export default ListPage;
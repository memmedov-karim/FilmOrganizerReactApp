import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/listAction';
import './MovieItem.css';
function MovieItem(props) {
    const dispatch =  useDispatch()
    const { Title, Year, Poster ,imbdId } = props;
    return (
        <article className="movie-item" key={imbdId}>
            <img className="movie-item__poster" src={Poster} alt={Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                <button type="button" className="movie-item__add-button" onClick={()=>{dispatch(addToCart(props))}}>Добавить в список</button>
            </div>
        </article>
    );
}

export default MovieItem;
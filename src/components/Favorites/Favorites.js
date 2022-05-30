import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import apidenGelenData from '../../redux/actions/apiInfo';
import { deleteFromCart } from '../../redux/actions/listAction';
import './Favorites.css';

function Favorites() {
    const dispatch = useDispatch()
    const card = useSelector(state => state.card)
        const [titlevalue, setTitle] = useState({
        titlee: '',
        class1: 'none',
        class2: 'notactive',
        class3: "favorites__save",
        class4: 'block',
        clicked: false
    });
    const handleChange = (e) => {
        setTitle({titlee:e.target.value})
    }
    const dispatch4 = useDispatch()
    const Lnk = useSelector(state=>state.api)
    const SubmitHandle=()=>{
        
        setTitle({clicked: true})

        let object1 = {
            "title": titlevalue.titlee,
            "movies": [{

            }]
        }

        const obj = card.map((card,index) =>{
            object1.movies[index] = {
                "Title": card.Title,
                "Year": card.Year,
                "imdbID": card.imdbID,
                "Type": card.Type,
                "Poster": card.Poster  
            }

        })


        fetch('https://acb-api.algoritmika.org/api/movies/list',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(object1)
        })
        .then(response => response.json())
        .then(data => dispatch4(apidenGelenData(data)))
        .catch(err => console.log(err))
    }
    return (
        <div className="favorites">
            <input value={titlevalue.titlee} className="favorites__name" placeholder='Введите название списка' onChange={handleChange} />
            <ul className="favorites__list">
                {card.map((item) => {
                    return <li className='item' key={item.imdbID}>{item.Title} ({item.Year}) <button className='delete_item' onClick={() => { dispatch(deleteFromCart(item.imdbID)) }}>X</button></li>;
                })}
            </ul>
            {titlevalue.clicked ? <Link to= {`/list/${Lnk.data.id}`}>Перейти к списку</Link> : <button type="button"  className="favorites__save" onClick = {SubmitHandle}>Сохранить список</button>}
        </div>
    );
}

export default Favorites;
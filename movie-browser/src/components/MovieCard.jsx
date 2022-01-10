import React from 'react';
import { Link } from 'react-router-dom';
import './styles/MovieCard.scss';

export function MovieCard({movie}) {
    const imageUrl = 'https://image.tmdb.org/t/p/w500/'+ movie.poster_path;
    
    return (
        <li className="movieCard">
            <Link to={"/movies/" + movie.id}>
            <img src={imageUrl} width={300} height={450} alt={movie.title}/>
            <div>{movie.title}</div> 
            </Link>
        </li>
        
    );
}



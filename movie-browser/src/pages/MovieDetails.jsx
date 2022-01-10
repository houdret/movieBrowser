import React, {useEffect, useState} from 'react'
import '../components/styles/MovieDetails.scss';
import { useParams } from 'react-router-dom'
import { get } from '../utils/HttpClient';
import { Spinner } from '../components/Spinner';

export default function MovieDetails() {
    const {movieId} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] =  useState(null);

    useEffect(() => {
        setIsLoading(true);        
        get("/movie/" + movieId).then((data) => {
            setMovie(data); 
            console.log(data)
            setIsLoading(false);          
        });
    }, [movieId]);

    if(isLoading) {
        return <Spinner />
    }
    
    
 
    const imageUrl = 'https://image.tmdb.org/t/p/w500/' + movie.poster_path ;
    return (
        <div className="movieDetails">
           <img src={imageUrl} alt={movie.title} className="col" />
           <div className="col">
               <p id="first"><strong>Title: </strong>{movie.title}</p>
               <p>
                    <strong>Genres: </strong>
                    {movie.genres.map((genre) => genre.name).join(", ")}
               </p>
               <p><strong>Description: </strong>{movie.overview}</p>
               

           </div>
        </div>
    )
}

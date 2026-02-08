
import Movie from '../components/Movie'
import './MoviesPage.css'
import jsonMovies from '../data/movies.json'
import { useState } from 'react';

export default function MoviesPage() {
  const [movies, setMovies] = useState(jsonMovies);
  const [comedyOnly, setComedyOnly] = useState(false);

  let displayMovies = movies;
  if (comedyOnly) {
    displayMovies = movies.filter(movie => movie.genres.includes('Comedy'))
  }

  return (
    <div className='movies-page'>
      <h1>Movies Page</h1>
      <button onClick={() => setComedyOnly(!comedyOnly)}>{comedyOnly ? "Show All" : "Comedy Only"}</button>
      {displayMovies.map(movie => <Movie key={movie.id} movie={movie} />)}
    </div>
  )
}
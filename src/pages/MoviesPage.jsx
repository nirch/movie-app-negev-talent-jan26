
import Movie from '../components/Movie'
import './MoviesPage.css'
import jsonMovies from '../data/movies.json'

export default function MoviesPage() {
  const movies = jsonMovies;

  return (
    <div className='movies-page'>
      <h1>Movies Page</h1>
      {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
    </div>
  )
}
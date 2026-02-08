
import Movie from '../components/Movie'
import './MoviesPage.css'

export default function MoviesPage() {
  return (
    <div className='movies-page'>
      <h1>Movies Page</h1>
      <Movie />
      <Movie />
    </div>
  )
}
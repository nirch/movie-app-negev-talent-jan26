
import Movie from '../components/Movie'
import './MoviesPage.css'
import { useEffect, useState } from 'react';
import { Container } from '@mantine/core';
import { Navbar } from '../components/Navbar';
import { supabase } from '../data/supabase';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [comedyOnly, setComedyOnly] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);


  useEffect(() => {
    fetchMovies();

    async function fetchMovies() {
      let { data, error } = await supabase
        .from('movies')
        .select('*');

      if (!error) {
        console.log(data);
        setMovies(data);
      }
    }
  }, [])

  let displayMovies = movies;
  if (comedyOnly) {
    displayMovies = movies.filter(movie => movie.genres.includes('Comedy'))
  }

  if (filterText) {
    displayMovies = displayMovies.filter(movie => movie.name.toLowerCase().includes(filterText.toLowerCase()));
  }

  function handleMovieSelection(movie) {
    if (selectedMovie === movie) {
      setSelectedMovie(null);
    } else {
      setSelectedMovie(movie)
    }
  }

  return (
    <>
      <Navbar />
      <Container size="md" className='movies-page'>
        <h1>Movies Page</h1>
        <div className="filter-movies">
          <input type="text" placeholder='Filter Movies...' value={filterText} onChange={e => setFilterText(e.target.value)} />
          <button onClick={() => setComedyOnly(!comedyOnly)}>{comedyOnly ? "Show All" : "Comedy Only"}</button>
        </div>
        {displayMovies.map(movie =>
          <Movie key={movie.id}
            movie={movie}
            selected={selectedMovie === movie}
            onSelected={handleMovieSelection} />)}
      </Container>
    </>
  )
}
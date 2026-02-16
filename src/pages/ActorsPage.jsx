import { Container, Grid } from "@mantine/core";
import SearchBox from "../components/SearchBox";
import { useEffect, useState } from "react";
import axios from "axios";
import ActorCard from "../components/ActorCard";
import { Navbar } from "../components/Navbar";

export default function ActorsPage({ onLogout }) {
  const [actors, setActors] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {

    async function fetchActors(searchText) {
      const searchURL = `https://api.themoviedb.org/3/search/person?api_key=53d2ee2137cf3228aefae083c8158855&query=${searchText}`;
      const response = await axios.get(searchURL);
      setSearchResults(response.data.results);
    }

    if (searchText) {
      fetchActors(searchText)
    } else {
      setSearchResults([]);
    }
  }, [searchText])

  function addActor(index) {
    setActors([...actors, searchResults[index]]);
    setSearchText("");
  }

  return (
    <>
      <Navbar onLogout={onLogout} />
      <Container size="md">
        <h1>Actors Page</h1>
        <SearchBox
          placeholder="Search Actors..."
          searchText={searchText}
          onSearchChange={newSearchText => setSearchText(newSearchText)}
          results={searchResults.map(result => result.name)}
          onResultClicked={addActor} />
        <Grid >
          {actors.map(actor =>
            <Grid.Col key={actor.id} span={{ base: 12, sm: 6, md: 3 }}>
              <ActorCard actor={actor} />
            </Grid.Col>
          )}
        </Grid>
      </Container>
    </>
  )
}
import { Container } from "@mantine/core";
import SearchBox from "../components/SearchBox";
import { useEffect, useState } from "react";

export default function ActorsPage() {
  const [actors, setActors] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    if (searchText) {
      setSearchResults(["Item1", "Item2", "Item3"]);
    } else {
      setSearchResults([]);
    }
  }, [searchText])


  function addActor(actor) {
    setActors([...actors, actor]);
    setSearchText("");
  }


  return (
    <Container size="md">
      <h1>Actors Page</h1>
      <SearchBox
        placeholder="Search Actors..."
        searchText={searchText}
        onSearchChange={newSearchText => setSearchText(newSearchText)}
        results={searchResults}
        onResultClicked={addActor} />
      {actors.map(actor => <div>{actor}</div>)}
    </Container>
  )
}
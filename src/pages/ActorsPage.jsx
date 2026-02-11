import { Container } from "@mantine/core";
import SearchBox from "../components/SearchBox";
import { useState } from "react";

export default function ActorsPage() {
  const [searchText, setSearchText] = useState("");

  const results = ["Item1", "Item2", "Item3"]; //[];

  return (
    <Container size="md">
      <h1>Actors Page</h1>
      <SearchBox
        placeholder="Search Actors..."
        searchText={searchText}
        onSearchChange={newSearchText => setSearchText(newSearchText)}
        results={results} />
    </Container>
  )
}
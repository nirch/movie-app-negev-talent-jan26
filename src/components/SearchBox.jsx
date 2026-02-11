import { Box, Paper, TextInput } from "@mantine/core"
import "./SearchBox.css"


export default function SearchBox({ placeholder, searchText, onSearchChange, results, onResultClicked }) {

  return (
    <>
      <Box pos="relative">
        <TextInput
          placeholder={placeholder}
          value={searchText}
          onChange={e => onSearchChange(e.target.value)} />
        {results && results.length > 0 &&
          <Paper withBorder shadow="sm" w="100%" className="results" pos="absolute">
            {results.map((result, index) =>
              <Box key={index} p="sm" className="result-item">
                {result}
              </Box>
            )}
          </Paper>
        }
      </Box>
    </>
  )


}
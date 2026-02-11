import { TextInput } from "@mantine/core"
import "./SearchBox.css"


export default function SearchBox({ placeholder, searchText, onSearchChange, results, onResultClicked }) {

  return (
    <>
      <TextInput
        placeholder={placeholder}
        value={searchText}
        onChange={e => onSearchChange(e.target.value)} />
    </>
  )


}
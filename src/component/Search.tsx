import React, {useState} from 'react'

interface SearchProps {
    search: (arg: string) => void
}

const Search: React.FC<SearchProps> = ({search}) => {
    const [searchValue, setSearchValue] = useState('')

    const handleSearchInputChanges = (e: any) => {
        setSearchValue(e.target.value)
    }

    const resetInputField = () => {
        setSearchValue('')
    }

    const callSearchFunction = (e: any) => {
        e.preventDefault()
        search(searchValue)
        resetInputField()
    }

    return (
        <form>
            <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
            />
            <input
                onClick={callSearchFunction}
                type="submit"
                value="SEARCH"
            />
        </form>
    )
}

export default Search

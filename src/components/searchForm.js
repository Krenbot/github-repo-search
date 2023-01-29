import Button from './button'
import Input from './input'

const SearchForm = () => {
    return (
        <form>
            <Input
                name='search'
                className='form-control bg-dark text-light'
                placeholder='Search Repos by Keyword'
                type='search'
            />
            <Button>
                Search
            </Button>
        </form>
    )
}

export default SearchForm
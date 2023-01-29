import Button from './button'
import Input from './input'

const SearchForm = ({ term, setTerm, handleSubmit }) => {
    return (
        //onSubmit for form also listens for 'enter' key for submission, preventDefault prevents page refresh
        <form onSubmit={(event) => {
            event.preventDefault()
            handleSubmit()
        }}>
            <div className='input-group input-group-lg'>
                <Input
                    value={term}
                    onChange={event => setTerm(event.target.value)}
                    name='search'
                    className='form-control bg-dark text-light'
                    placeholder='Search Repos by Keyword'
                    type='search'
                />
                {/* 'disabled' prevents button from being clicked w/o an input */}
                <Button
                    disabled={!term}>
                    Search
                </Button>
            </div>
        </form>
    )
}

export default SearchForm
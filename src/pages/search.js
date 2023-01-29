import { useState } from 'react'
import Container from '../components/container'
import SearchForm from '../components/searchForm'
import API from '../utils/api'

const SearchPage = props => {
    const [term, setTerm] = useState('React')
    const [loading, setLoading] = useState(false)
    const [repos, setRepos] = useState([])
    const [savedRepos, setSavedRepos] = useState([])

    const searchRepos = async () => {
        console.log('searching repos...', term)
        const response = await API.searchRepos(term)
        console.log(response)
    }

    return (
        <Container className="mt-3">
            <h1>Search GitHub Repos: <span className='badge bg-secondary'>{term}</span></h1>

            <SearchForm
                term={term}
                setTerm={setTerm}
                handleSubmit={searchRepos}
            />

            {/* list */}


        </Container>
    )
}

export default SearchPage
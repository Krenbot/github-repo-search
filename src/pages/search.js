import { useState } from 'react'
import Container from '../components/container'
import SearchForm from '../components/searchForm'
import API from '../utils/api'
import Spinner from '../components/spinner'
import List from '../components/list'
import ListItem from '../components/listItem'

const SearchPage = props => {
    const [term, setTerm] = useState('React')
    const [loading, setLoading] = useState(false)
    const [repos, setRepos] = useState([])
    const [savedRepos, setSavedRepos] = useState([])

    const searchRepos = async () => {
        if (term) {
            try {
                setLoading(true)
                console.log('searching repos...', term)
                const response = await API.searchRepos(term)
                setRepos(response.data.items)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
    }

    const toggleSaved = repo => {
        console.log('Toggle Saved', repo)
    }

    return (
        <Container className="mt-3">
            <h1>Search GitHub Repos: <span className='badge bg-secondary'>{term}</span></h1>

            <SearchForm
                term={term}
                setTerm={setTerm}
                handleSubmit={searchRepos}
            />

            <br />

            {loading
                ? <Spinner />
                : <List>
                    {repos.map(repo => (
                        <ListItem
                            repo={repo}
                            saved={false}
                            toggleSaved={toggleSaved}
                            key={repo.id}
                        />
                    ))}
                </List>
            }
        </Container>
    )
}

export default SearchPage
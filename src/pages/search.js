import { useState, useEffect } from 'react'
import Container from '../components/container'
import SearchForm from '../components/searchForm'
import API from '../utils/api'
import Spinner from '../components/spinner'
import List from '../components/list'
import ListItem from '../components/listItem'
import { lsKey } from '../utils/constants'

const SearchPage = props => {
    const [term, setTerm] = useState('React')
    const [loading, setLoading] = useState(false)
    const [repos, setRepos] = useState([])
    const [savedRepos, setSavedRepos] = useState([])

    useEffect(() => {
        loadSavedRepos()
    }, [])

    localStorage.getItem('')

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

    const loadSavedRepos = () => {
        const lsRepos = JSON.parse(localStorage.getItem(lsKey)) || []
        setSavedRepos(lsRepos)
    }

    const toggleSaved = repo => {
        const foundRepo = savedRepos.find(savedRepo => savedRepo.id === repo.id)

        let updatedSavedRepos
        if (foundRepo) {
            //remove repo from local storage
            updatedSavedRepos = savedRepos.filter(savedRepo => savedRepo.id != repo.id)
        } else {
            //add repo to local storage
            updatedSavedRepos = [...savedRepos, repo]
        }

        localStorage.setItem(lsKey, JSON.stringify(updatedSavedRepos))
        loadSavedRepos()
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
                    {repos.map(repo => {
                        const foundRepo = savedRepos.find(savedRepo => savedRepo === repo.id)
                        return (
                            <ListItem
                                repo={repo}
                                saved={foundRepo}
                                toggleSaved={toggleSaved}
                                key={repo.id}
                            />
                        )
                    })}
                </List>
            }
        </Container>
    )
}

export default SearchPage
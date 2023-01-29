import { useState, useEffect } from 'react'
import Container from '../components/container'
import List from '../components/list'
import ListItem from '../components/listItem'
import { lsKey } from '../utils/constants'

const SavedPage = props => {
    const [savedRepos, setSavedRepos] = useState([])

    useEffect(() => {
        loadSavedRepos()
    }, [])

    const loadSavedRepos = () => {
        const lsRepos = JSON.parse(localStorage.getItem(lsKey)) || []
        setSavedRepos(lsRepos)
    }

    const toggleSaved = repo => {
        // remove the repo from localStorage
        const updatedSavedRepos = savedRepos.filter(savedRepo => savedRepo.id !== repo.id)
        localStorage.setItem(lsKey, JSON.stringify(updatedSavedRepos))
        loadSavedRepos()
    }

    return (
        <Container className="mt-3">
            <h1>My Saved Repos</h1>

            {savedRepos.length === 0 ? (
                <div className='alert alert-warning'>You have no saved repos</div>
            ) : (
                <List>
                    {savedRepos.map(repo => {
                        return (
                            <ListItem
                                repo={repo}
                                saved={true}
                                toggleSaved={toggleSaved}
                                key={repo.id}
                            />
                        )
                    })}
                </List>
            )}
        </Container>
    )
}

export default SavedPage
import { useState } from 'react'
import Navbar from './components/navbar'
import SavedPage from './pages/saved'
import SearchPage from './pages/search'

function App() {
  const [view, setView] = useState('search')

  const renderView = () => {
    if (view === 'search') {
      return <SearchPage />
    } else if (view === 'saved') {
      return <SavedPage />
    } else {
      return 'No matching view found'
    }
  }

  return (
    <>
      <Navbar
        view={view}
        setView={setView}
      />
      {renderView()}
    </>
  );
}

export default App;
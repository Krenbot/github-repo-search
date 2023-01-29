import { useState } from 'react';
import Navbar from './components/navbar'
import SavedPage from './pages/saved';
import SearchPage from './pages/search';

function App() {
  //view argument in usestate is default state
  const [view, setView] = useState('search');

  const renderView = () => {
    if (view === 'search') {
      return <SearchPage />
    } else if (view = 'saved') {
      return <SavedPage />
    } else {
      'No Matching View Found!'
    }
  };

  console.log(view);

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
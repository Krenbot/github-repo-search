const Navbar = ({ view, setView }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container">
                <a className="navbar-brand" href="#">Repo Search</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a
                            onClick={() => setView('search')}
                            className={`nav-link ${view === 'search' ? 'active fw-bold' : ''}`}
                            href="#"
                        >
                            <i className="bi bi-search-heart"></i> Search
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            onClick={() => setView('saved')}
                            className={`nav-link ${view === 'saved' ? 'active fw-bold' : ''}`}
                            href="#"
                        >
                            <i className="bi bi-bookmark-heart"></i> Saved
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
import { Link, NavLink } from 'react-router-dom';


export default function MainNav() {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">

            

                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" aria-current="page">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/aboutus" className="nav-link" aria-current="page">
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink to="/posts" className="nav-link" aria-current="page">
                                    Posts
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>

    );
}
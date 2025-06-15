import React from 'react';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="/"><h1>DOM PIZZA</h1></a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/"><h4>Login</h4></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/features"><h4>Cart</h4></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

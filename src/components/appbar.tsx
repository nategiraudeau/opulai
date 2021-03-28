import React from 'react';
import { Link } from 'react-router-dom';

const Appbar: React.FC = () => {
    return (
        <nav className="appbar row">
            <div className="appbar__title">
                Opulai
            </div>
            <div className="appbar__links row">
                <div className="appbar__link">
                    About
                </div>
                <div className="appbar__link">
                    Pricing
                </div>
                <div className="appbar__link">
                    Help
                </div>
            </div>
            <div className="appbar__actions row">
                <Link to="/login" className="appbar__action appbar__action--secondary">
                    Login
                </Link>
                <Link to="/sign-up" className="appbar__action appbar__action--primary">
                    Sign Up
                </Link>
            </div>
        </nav>
    );
}

export default Appbar;
import React from 'react';
import { Link } from 'react-router-dom';

const LogIn: React.FC = () => {
    return (
        <div className="auth-form">
            <div className="form__header">
                <small>Opulai</small>
                <h1>Login</h1>
            </div>
            <div className="form__field">
                <label>Email</label>
                <input type="email" />
            </div>
            <div className="form__field">
                <label>Password</label>
                <input type="password" />
            </div>
            <Link to="/bank/dashboard" className="form__submit">
                Login
            </Link>
        </div>
    );
}

export default LogIn;
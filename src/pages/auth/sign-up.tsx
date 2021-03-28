import React from 'react';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
    return (
        <div className="auth-form">
            <div className="form__header">
                <small>Opulai</small>
                <h1>Sign Up</h1>
            </div>
            <div className="form__field">
                <label>Name</label>
                <input type="email" />
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
                Sign Up
            </Link>
        </div>
    );
}

export default SignUp;
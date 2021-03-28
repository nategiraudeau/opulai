import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Appbar from './components/appbar';
import LogIn from './pages/auth/login';
import SignUp from './pages/auth/sign-up';
import BankDashboard from './pages/dashboard/bank/dashboard';
import ClientDashboard from './pages/dashboard/client';

const Router: React.FC = () => (
    <div className="router">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/">
                    <Appbar />
                    <div className="landing-page">
                        <h1>Secure Digital Interaction for Community Banking</h1>
                        <Link to="sign-up" className="sign-up-btn">
                            Sign Up
                        </Link>
                    </div>
                </Route>

                <Route path="/login">
                    <LogIn />
                </Route>
                <Route path="/sign-up">
                    <SignUp />
                </Route>


                <Route path="/bank/dashboard">
                    <BankDashboard />
                </Route>

                <Route path="/dashboard">
                    <ClientDashboard />
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
);

export default Router;
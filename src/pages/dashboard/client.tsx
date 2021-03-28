import React from 'react';
import * as Icons from 'react-feather';
import { Link } from 'react-router-dom';

const ClientDashboard: React.FC = () => {
    return (
        <div className="bank-dashboard">
            <div className="sidenav">
                <h1>
                    Opulai
                </h1>
                <hr />
                <div className="links">
                    <div className="link">
                        <Icons.Home size={20} />
                        Home
                    </div>
                    <div className="link">
                        <Icons.User size={20} />
                        My Account
                    </div>
                </div>
                <hr />
                <div className="links">
                    <Link to="/" className="link">
                        <Icons.LogOut size={20} />
                        Logout
                    </Link>
                </div>
            </div>
            <div className="page">
                <div className="meeting-row">
                    <div className="zoom-square"></div>
                    <div className="chat-square">
                        <div className="chat__header">
                            <div className="icon"><Icons.MessageSquare strokeWidth={2} size={18} /></div>
                            <h3>Chat</h3>
                        </div>
                        <div className="chat__empty">
                            <Icons.MessageSquare size={100} />
                        </div>
                        <div className="chat__bar">
                            <div className="leading">
                                <div className="icon"><Icons.PlusCircle size={18} /></div>
                                Type Message...
                            </div>
                            <div className="send-button">
                                <Icons.Send size={18} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-row">
                    <h4>Account Information <Icons.ChevronRight /></h4>
                </div>
            </div>
        </div>
    );
}

export default ClientDashboard;
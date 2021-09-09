import React from 'react';
import {
    BrowserRouter,
    Route,
} from 'react-router-dom';

import Routes from '../Routes';
import Sidebar from '../sidebar/Sidebar';
import Topbar from '../topbar/Topbar';

import './layout.css';

export default function Layout() {
    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className="layout">
                    <Sidebar {...props} />
                    <div className="layout__content">
                        <Topbar />
                        <div className="layout__content-main">
                            <Routes />
                        </div>
                    </div>
                </div>
            )}/>
        </BrowserRouter>
    )
}

import React from 'react';
import { Link } from 'react-router-dom';

import './sidebar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'

library.add(faCheckSquare, faCoffee);

function SidebarItem(props) {
    const {
        icon,
        name,
        url,
    } = props;

    return (
        <div>
            <FontAwesomeIcon className="font-icon" icon="check-square" /><br /><br />
            <FontAwesomeIcon icon="coffee" /><br /><br />
        </div>
    )
}

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Link to="/dashboar">
                <SidebarItem name="dashboard" url="/dashboard" />
            </Link>
        </div>
    )
}

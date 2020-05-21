import React from 'react';
import { NavLink } from 'react-router-dom';
//import classes from './NavigationItem.css'

const navItem = (props) => (
    <li>
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={props.activeClassName}>{props.children}</NavLink>
    </li>
);

export default navItem;
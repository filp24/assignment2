import React, { Component } from 'react';
//import { Route, NavLink } from 'react-router-dom';
import NavItem from './navItem';

class Sidebar extends Component {
    render() {

        let list = ["Nike", "Adidas"];
        const lists = list.map(brands => (
           <NavItem link={("/"+brands.toLowerCase().split(' ').join('-'))} exact activeClassName="selected">
            <button className="btn btn-block btn-outline-secondary ml-1 mt-3 text-primary bg-light">
                {brands}
            </button>
           </NavItem>
           
        ));

        
        
        return (
            
            <div className="wrapper">
         
            <nav id="sidebar">
                <div className="sidebar-header mt-3">
                    <h2>List of Brands</h2>
                </div>
        
                <ul className="list-unstyled components">
                    <p>Brands</p>
                    
                    <div className="d-flex flex-column mb-3">
                       
                        <ul className="p-0" style={{listStyleType: 'none'}}>
                            {lists}
                        </ul>
                       
                       
                    </div>
                </ul>
            </nav>
        
        </div>
        );
    }
}

export default Sidebar;